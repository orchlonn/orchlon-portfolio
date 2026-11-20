"use client";

import { type CSSProperties, useEffect, useRef } from "react";

import { subscribeToTheme } from "@/lib/theme";

/* The hero's right-hand whitespace: a loss surface drawn as a contour map, with
   an optimiser rolling downhill across it.

   - The surface is a shallow bowl holding a few Gaussian basins and ridges that
     wander on slow Lissajous paths. Every term is separable in x and y, so a
     frame costs one exp() per grid column and row, not one per vertex.
   - Contours come from marching squares over a 6px grid. Every fifth level is
     drawn heavier, like the index contours on a survey map. On first paint the
     levels fill in from the deepest basin outward.
   - The optimiser is gradient descent with momentum. It starts on high ground,
     plots a step every tenth of a second in the accent colour, comes to rest in
     a minimum, fades, and starts again somewhere else.
   - A mouse or pen over the field presses a well into the surface, so the
     contours bend toward the cursor and the optimiser can be led around.

   Decorative only: aria-hidden and no pointer events. It renders at lg and up
   (below that the headline fills the width), runs only while on screen, and
   under prefers-reduced-motion draws one still frame with a finished descent. */

// ─── Tuning ──────────────────────────────────────────────────────────────────

/** Marching-squares grid pitch, in CSS px. */
const CELL = 6;
/** Surface height between neighbouring contour lines. */
const LEVEL_STEP = 0.06;
/** Below anything the surface reaches, so level indices stay positive. */
const LEVEL_FLOOR = -4;
const INDEX_EVERY = 5;
const MINOR_ALPHA = 0.16;
const INDEX_ALPHA = 0.36;

const BOWL = 0.3;
const RIPPLE = 0.045;
const WELL_DEPTH = -0.6;
const WELL_SPREAD = 0.14;

/** Fixed physics step, in seconds. */
const STEP = 1 / 60;
const MOMENTUM = 0.92;
const LEARNING_RATE = 0.00024;
/** Seconds between plotted steps, and the least distance between two. */
const PLOT_EVERY = 0.1;
const PLOT_GAP_PX = 5;
const MAX_PLOTTED = 48;
/** Below this speed, in surface units per second, the optimiser has settled. */
const SETTLED_SPEED = 0.04;
const REST_SECONDS = 1.8;
const FADE_SECONDS = 0.9;
const BETWEEN_RUNS_SECONDS = 0.8;
const PING_SECONDS = 0.9;
/** Give up on a run that never settles, unless the cursor is steering it. */
const MAX_RUN_SECONDS = 14;

const REVEAL_SECONDS = 2.6;
const FIRST_RUN_AT = 1.8;
/** Where the still frame for reduced motion is taken. */
const STILL_AT = 11;
const MAX_DPR = 2;
/** Skips alternate frames at 120Hz and up; slower displays draw every frame. */
const MIN_FRAME_MS = 11;

// ─── Placement ───────────────────────────────────────────────────────────────

/* At lg and up the headline is 5.5rem and its longest line ends about 49.4rem
   from the container's left edge (a 3rem gutter plus 8.43em of type). The
   field starts a little inside that, so the fade rather than an edge meets the
   type, and runs out to the viewport. Keep it in step with the headline. */
const PLACEMENT: CSSProperties = {
  left: "calc(max(0px, (100% - var(--container-page)) / 2) + 46rem)",
};

/* One gradient per element, and the two masks multiply, so no mask-composite
   is needed. Vertically it clears the header and the rule under the hero;
   horizontally it fades up from behind the end of the headline. */
const FADE_Y = "linear-gradient(to bottom, transparent, #000 16%, #000 76%, transparent)";
const FADE_X = "linear-gradient(to right, transparent, #000 36%)";
const MASK_Y: CSSProperties = { WebkitMaskImage: FADE_Y, maskImage: FADE_Y };
const MASK_X: CSSProperties = { WebkitMaskImage: FADE_X, maskImage: FADE_X };

// ─── Surface ─────────────────────────────────────────────────────────────────

interface Feature {
  /** Rest position, in surface units: one unit is half the canvas height. */
  x: number;
  y: number;
  /** Negative digs a basin, positive raises a ridge. */
  depth: number;
  /** Gaussian width, in surface units. */
  spread: number;
  /** How far it wanders from rest, and the seconds one loop takes. */
  wander: number;
  period: number;
  phase: number;
}

const FEATURES: readonly Feature[] = [
  // The global minimum, in the middle of the visible band.
  { x: -0.06, y: -0.1, depth: -1, spread: 0.32, wander: 0.1, period: 36, phase: 0 },
  // Two shallower basins: local minima a run can get stuck in.
  { x: -0.3, y: -0.62, depth: -0.45, spread: 0.18, wander: 0.08, period: 31, phase: 1.9 },
  { x: 0.42, y: 0.5, depth: -0.4, spread: 0.18, wander: 0.1, period: 41, phase: 4.1 },
  // Two ridges to roll off.
  { x: -0.4, y: 0.42, depth: 0.45, spread: 0.22, wander: 0.08, period: 47, phase: 2.7 },
  { x: 0.42, y: -0.42, depth: 0.4, spread: 0.2, wander: 0.09, period: 33, phase: 5.3 },
];

/** The features plus the cursor well, which is always last. */
const TERMS = FEATURES.length + 1;

interface Well {
  x: number;
  y: number;
  /** 0 when the cursor is away, easing to 1 while it is over the field. */
  strength: number;
}

class Surface {
  width = 0;
  height = 0;
  cols = 0;
  rows = 0;
  /** Heights at the grid vertices, row by row. */
  values = new Float32Array(0);
  min = 0;
  max = 0;

  private scale = 1;
  private originX = 0;
  private originY = 0;
  private colX = new Float32Array(0);
  private rowY = new Float32Array(0);
  private colBowl = new Float32Array(0);
  private rowBowl = new Float32Array(0);
  private colRipple = new Float32Array(0);
  private rowRipple = new Float32Array(0);
  /** Per-term Gaussian factors: TERMS blocks of cols, and of rows. */
  private colTerm = new Float32Array(0);
  private rowTerm = new Float32Array(0);

  private readonly centreX = new Float64Array(TERMS);
  private readonly centreY = new Float64Array(TERMS);
  private readonly depth = new Float64Array(TERMS);
  /** 1 / (2σ²) for each term. */
  private readonly falloff = new Float64Array(TERMS);
  private phaseX = 0;
  private phaseY = 0;

  resize(width: number, height: number) {
    this.width = width;
    this.height = height;
    // The origin sits in the middle of the part the fade leaves visible.
    this.scale = height / 2;
    this.originX = width * 0.68;
    this.originY = height * 0.47;

    const cols = (this.cols = Math.ceil(width / CELL) + 1);
    const rows = (this.rows = Math.ceil(height / CELL) + 1);
    this.values = new Float32Array(cols * rows);
    this.colX = new Float32Array(cols);
    this.rowY = new Float32Array(rows);
    this.colBowl = new Float32Array(cols);
    this.rowBowl = new Float32Array(rows);
    this.colRipple = new Float32Array(cols);
    this.rowRipple = new Float32Array(rows);
    this.colTerm = new Float32Array(TERMS * cols);
    this.rowTerm = new Float32Array(TERMS * rows);

    for (let c = 0; c < cols; c++) {
      const x = this.surfaceX(c * CELL);
      this.colX[c] = x;
      this.colBowl[c] = BOWL * x * x;
    }
    for (let r = 0; r < rows; r++) {
      const y = this.surfaceY(r * CELL);
      this.rowY[r] = y;
      this.rowBowl[r] = BOWL * y * y;
    }
  }

  /** Moves every feature to where it is `time` seconds in, and the well to the cursor. */
  advance(time: number, well: Well) {
    FEATURES.forEach((feature, i) => {
      const turn = (2 * Math.PI * time) / feature.period + feature.phase;
      this.centreX[i] = feature.x + feature.wander * Math.sin(turn);
      this.centreY[i] = feature.y + feature.wander * 0.8 * Math.sin(turn * 0.73 + 1.1);
      this.depth[i] = feature.depth;
      this.falloff[i] = 1 / (2 * feature.spread * feature.spread);
    });

    const w = FEATURES.length;
    this.centreX[w] = well.x;
    this.centreY[w] = well.y;
    this.depth[w] = WELL_DEPTH * well.strength;
    this.falloff[w] = 1 / (2 * WELL_SPREAD * WELL_SPREAD);

    this.phaseX = time * 0.23;
    this.phaseY = time * 0.17;
  }

  /** Fills `values` from the current feature positions. */
  sample() {
    const { cols, rows, values, colTerm, rowTerm, colRipple, rowRipple, depth } = this;

    for (let i = 0; i < TERMS; i++) {
      if (depth[i] === 0) continue;
      const cx = this.centreX[i];
      const cy = this.centreY[i];
      const k = this.falloff[i];
      for (let c = 0; c < cols; c++) {
        const d = this.colX[c] - cx;
        colTerm[i * cols + c] = Math.exp(-d * d * k);
      }
      for (let r = 0; r < rows; r++) {
        const d = this.rowY[r] - cy;
        rowTerm[i * rows + r] = Math.exp(-d * d * k);
      }
    }
    for (let c = 0; c < cols; c++) {
      colRipple[c] = Math.sin(3.1 * this.colX[c] + this.phaseX);
    }
    for (let r = 0; r < rows; r++) {
      rowRipple[r] = RIPPLE * Math.sin(2.6 * this.rowY[r] - this.phaseY);
    }

    let min = Infinity;
    let max = -Infinity;
    for (let r = 0; r < rows; r++) {
      const rowBase = this.rowBowl[r];
      const ripple = rowRipple[r];
      for (let c = 0; c < cols; c++) {
        let v = this.colBowl[c] + rowBase + colRipple[c] * ripple;
        for (let i = 0; i < TERMS; i++) {
          if (depth[i] !== 0) v += depth[i] * colTerm[i * cols + c] * rowTerm[i * rows + r];
        }
        values[r * cols + c] = v;
        if (v < min) min = v;
        if (v > max) max = v;
      }
    }
    this.min = min;
    this.max = max;
  }

  heightAt(x: number, y: number) {
    let v =
      BOWL * (x * x + y * y) +
      RIPPLE * Math.sin(3.1 * x + this.phaseX) * Math.sin(2.6 * y - this.phaseY);
    for (let i = 0; i < TERMS; i++) {
      if (this.depth[i] === 0) continue;
      const dx = x - this.centreX[i];
      const dy = y - this.centreY[i];
      v += this.depth[i] * Math.exp(-(dx * dx + dy * dy) * this.falloff[i]);
    }
    return v;
  }

  /** The gradient, by central differences. Downhill is minus this. */
  slopeAt(x: number, y: number): [number, number] {
    const h = 0.002;
    return [
      (this.heightAt(x + h, y) - this.heightAt(x - h, y)) / (2 * h),
      (this.heightAt(x, y + h) - this.heightAt(x, y - h)) / (2 * h),
    ];
  }

  screenX(x: number) {
    return this.originX + x * this.scale;
  }
  screenY(y: number) {
    return this.originY + y * this.scale;
  }
  surfaceX(px: number) {
    return (px - this.originX) / this.scale;
  }
  surfaceY(py: number) {
    return (py - this.originY) / this.scale;
  }
  /** A screen distance in surface units. */
  units(px: number) {
    return px / this.scale;
  }
}

// ─── Contours ────────────────────────────────────────────────────────────────

/* Cell edges are 0 top, 1 right, 2 bottom, 3 left. The case index has a bit
   per corner above the level: 8 top-left, 4 top-right, 2 bottom-right, 1
   bottom-left. Each entry lists the edge pairs the contour joins. */
const CASES: readonly (readonly number[])[] = [
  [], [3, 2], [2, 1], [3, 1], [0, 1], [], [0, 2], [0, 3],
  [0, 3], [0, 2], [], [0, 1], [3, 1], [2, 1], [3, 2], [],
];
/* Cases 5 and 10 are saddles. The cell centre decides which pair of opposite
   corners the contour cuts off. */
const CUT_TOP_LEFT_AND_BOTTOM_RIGHT = [0, 3, 2, 1] as const;
const CUT_TOP_RIGHT_AND_BOTTOM_LEFT = [0, 1, 3, 2] as const;

function edgeX(edge: number, a: number, b: number, c: number, d: number, level: number, x: number) {
  if (edge === 0) return x + (CELL * (level - a)) / (b - a);
  if (edge === 2) return x + (CELL * (level - d)) / (c - d);
  return edge === 1 ? x + CELL : x;
}

function edgeY(edge: number, a: number, b: number, c: number, d: number, level: number, y: number) {
  if (edge === 1) return y + (CELL * (level - b)) / (c - b);
  if (edge === 3) return y + (CELL * (level - a)) / (d - a);
  return edge === 2 ? y + CELL : y;
}

/**
 * Strokes every contour line. `reveal` is a fractional level index: levels
 * below it are drawn, the one it sits in fades in, and the rest wait. Infinity
 * draws them all.
 */
function drawContours(ctx: CanvasRenderingContext2D, surface: Surface, reveal: number, ink: string) {
  const { cols, rows, values } = surface;
  const minor = new Path2D();
  const index = new Path2D();
  const edge = new Path2D();
  const front = Math.floor(reveal);

  for (let r = 0; r < rows - 1; r++) {
    const y = r * CELL;
    for (let col = 0; col < cols - 1; col++) {
      const x = col * CELL;
      const i = r * cols + col;
      const a = values[i];
      const b = values[i + 1];
      const c = values[i + cols + 1];
      const d = values[i + cols];

      const lo = Math.min(a, b, c, d);
      const hi = Math.max(a, b, c, d);
      const first = Math.ceil((lo - LEVEL_FLOOR) / LEVEL_STEP);
      const last = Math.min(Math.floor((hi - LEVEL_FLOOR) / LEVEL_STEP), front);

      for (let k = first; k <= last; k++) {
        const level = LEVEL_FLOOR + k * LEVEL_STEP;
        const code = (a > level ? 8 : 0) | (b > level ? 4 : 0) | (c > level ? 2 : 0) | (d > level ? 1 : 0);
        if (code === 0 || code === 15) continue;

        let pairs: readonly number[] = CASES[code];
        if (code === 5 || code === 10) {
          const centreAbove = (a + b + c + d) / 4 > level;
          pairs =
            (code === 5) === centreAbove
              ? CUT_TOP_LEFT_AND_BOTTOM_RIGHT
              : CUT_TOP_RIGHT_AND_BOTTOM_LEFT;
        }

        const path = k === front ? edge : k % INDEX_EVERY === 0 ? index : minor;
        for (let p = 0; p < pairs.length; p += 2) {
          path.moveTo(edgeX(pairs[p], a, b, c, d, level, x), edgeY(pairs[p], a, b, c, d, level, y));
          path.lineTo(
            edgeX(pairs[p + 1], a, b, c, d, level, x),
            edgeY(pairs[p + 1], a, b, c, d, level, y),
          );
        }
      }
    }
  }

  ctx.lineWidth = 1;
  ctx.lineCap = "round";
  ctx.strokeStyle = ink;
  ctx.globalAlpha = MINOR_ALPHA;
  ctx.stroke(minor);
  ctx.globalAlpha = INDEX_ALPHA;
  ctx.stroke(index);
  if (Number.isFinite(reveal)) {
    ctx.globalAlpha = (front % INDEX_EVERY === 0 ? INDEX_ALPHA : MINOR_ALPHA) * (reveal - front);
    ctx.stroke(edge);
  }
  ctx.globalAlpha = 1;
}

// ─── Optimiser ───────────────────────────────────────────────────────────────

type Phase = "rolling" | "resting" | "leaving";

class Optimiser {
  alive = false;
  x = 0;
  y = 0;
  /** Velocity, in surface units per step. */
  vx = 0;
  vy = 0;
  /** Plotted steps, flattened [x0, y0, x1, y1, …], in surface units. */
  plot: number[] = [];
  opacity = 0;
  /** Seconds since it came to rest; drives the one-off ping. */
  sinceRest = Infinity;
  phase: Phase = "rolling";

  private sincePlot = 0;
  private settled = 0;
  private age = 0;

  /** Starts a run from the highest of a few random points in the visible band. */
  spawn(surface: Surface, random: () => number) {
    let best = -Infinity;
    for (let n = 0; n < 5; n++) {
      const x = surface.surfaceX(surface.width * (0.5 + 0.42 * random()));
      const y = surface.surfaceY(surface.height * (0.22 + 0.5 * random()));
      const h = surface.heightAt(x, y);
      if (h > best) {
        best = h;
        this.x = x;
        this.y = y;
      }
    }

    // A sideways push, so each run curves rather than falling straight down.
    const [gx, gy] = surface.slopeAt(this.x, this.y);
    const norm = Math.hypot(gx, gy) || 1;
    const push = (random() < 0.5 ? -1 : 1) * 0.003;
    this.vx = (-gy / norm) * push;
    this.vy = (gx / norm) * push;

    this.alive = true;
    this.plot = [this.x, this.y];
    this.opacity = 0;
    this.sinceRest = Infinity;
    this.phase = "rolling";
    this.sincePlot = 0;
    this.settled = 0;
    this.age = 0;
  }

  /** One fixed step. `steered` holds a run open while the cursor is near it. */
  step(surface: Surface, steered: boolean) {
    const [gx, gy] = surface.slopeAt(this.x, this.y);
    this.vx = this.vx * MOMENTUM - LEARNING_RATE * gx;
    this.vy = this.vy * MOMENTUM - LEARNING_RATE * gy;
    this.x += this.vx;
    this.y += this.vy;
    this.age += STEP;
    this.sinceRest += STEP;

    this.sincePlot += STEP;
    if (this.phase !== "leaving" && this.sincePlot >= PLOT_EVERY) {
      const n = this.plot.length;
      if (Math.hypot(this.x - this.plot[n - 2], this.y - this.plot[n - 1]) > surface.units(PLOT_GAP_PX)) {
        this.plot.push(this.x, this.y);
        if (this.plot.length > MAX_PLOTTED * 2) this.plot.splice(0, 2);
        this.sincePlot = 0;
      }
    }

    const speed = Math.hypot(this.vx, this.vy) / STEP;
    switch (this.phase) {
      case "rolling":
        this.opacity = Math.min(1, this.opacity + STEP / 0.35);
        this.settled = speed < SETTLED_SPEED ? this.settled + STEP : 0;
        if (this.settled > 0.6) {
          this.phase = "resting";
          this.sinceRest = 0;
        } else if (this.age > MAX_RUN_SECONDS && !steered) {
          this.phase = "leaving";
        }
        break;
      case "resting":
        if (speed > SETTLED_SPEED * 3) {
          // The cursor pulled it out of the minimum: keep plotting.
          this.phase = "rolling";
          this.settled = 0;
        } else if (this.sinceRest > REST_SECONDS && !steered) {
          this.phase = "leaving";
        }
        break;
      case "leaving":
        this.opacity -= STEP / FADE_SECONDS;
        if (this.opacity <= 0) this.alive = false;
        break;
    }
  }
}

function drawOptimiser(
  ctx: CanvasRenderingContext2D,
  surface: Surface,
  run: Optimiser,
  accent: string,
  paper: string,
) {
  if (!run.alive || run.opacity <= 0) return;
  const { plot } = run;
  const hx = surface.screenX(run.x);
  const hy = surface.screenY(run.y);

  ctx.globalAlpha = run.opacity;
  ctx.strokeStyle = accent;
  ctx.fillStyle = paper;

  // The path, through every plotted step to where it is now.
  ctx.lineWidth = 1.25;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(surface.screenX(plot[0]), surface.screenY(plot[1]));
  for (let i = 2; i < plot.length; i += 2) {
    ctx.lineTo(surface.screenX(plot[i]), surface.screenY(plot[i + 1]));
  }
  ctx.lineTo(hx, hy);
  ctx.stroke();

  // Open markers on the plotted steps, as on an optimiser trace.
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let i = 0; i < plot.length; i += 2) {
    const px = surface.screenX(plot[i]);
    const py = surface.screenY(plot[i + 1]);
    ctx.moveTo(px + 2, py);
    ctx.arc(px, py, 2, 0, Math.PI * 2);
  }
  ctx.fill();
  ctx.stroke();

  // The current position.
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(hx, hy, 4.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // One ring on arrival in a minimum.
  if (run.sinceRest < PING_SECONDS) {
    const t = run.sinceRest / PING_SECONDS;
    const eased = 1 - (1 - t) ** 3;
    ctx.globalAlpha = run.opacity * 0.6 * (1 - t);
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(hx, hy, 4.5 + 18 * eased, 0, Math.PI * 2);
    ctx.stroke();
  }

  ctx.globalAlpha = 1;
}

// ─── Lifecycle ───────────────────────────────────────────────────────────────

/** mulberry32: a tiny seeded PRNG, so the reduced-motion still is always the same. */
function seeded(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const levelOf = (height: number) => (height - LEVEL_FLOOR) / LEVEL_STEP;

/** Sets up the canvas and its loop; returns the teardown. */
function mount(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
  /* The tokens are light-dark() pairs, which a custom property reports
     unresolved, so each one goes through `color` to come back as a colour. */
  const token = (name: string, fallback: string) => {
    canvas.style.color = `var(${name}, ${fallback})`;
    return getComputedStyle(canvas).color;
  };
  let ink = "";
  let accent = "";
  let paper = "";
  const readTokens = () => {
    ink = token("--color-ink", "#111111");
    accent = token("--color-accent", "#b4400f");
    paper = token("--color-bg", "#ffffff");
    canvas.style.color = "";
  };
  readTokens();

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const surface = new Surface();
  const run = new Optimiser();
  const well: Well = { x: 0, y: 0, strength: 0 };
  const pointer = { x: 0, y: 0, present: false };

  let dpr = 1;
  /** Seconds the animation has actually run; it stands still off screen. */
  let time = 0;
  /** Seconds since the last run faded out. */
  let idle = 0;
  let pending = 0;
  let raf = 0;
  let last = 0;
  let running = false;
  let visible = false;

  const revealAt = () => {
    if (time >= REVEAL_SECONDS) return Infinity;
    const from = Math.floor(levelOf(surface.min));
    const to = Math.ceil(levelOf(surface.max)) + 1;
    return from + (to - from) * easeInOut(time / REVEAL_SECONDS);
  };

  const render = (reveal: number) => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, surface.width, surface.height);
    drawContours(ctx, surface, reveal, ink);
    drawOptimiser(ctx, surface, run, accent, paper);
  };

  const followPointer = (dt: number) => {
    const rect = canvas.getBoundingClientRect();
    const px = pointer.x - rect.left;
    const py = pointer.y - rect.top;
    const over = pointer.present && px >= 0 && py >= 0 && px <= rect.width && py <= rect.height;

    if (over) {
      const x = surface.surfaceX(px);
      const y = surface.surfaceY(py);
      // Appear under the cursor rather than sweeping in from where it last was.
      const follow = well.strength < 0.02 ? 1 : 1 - Math.exp(-dt * 10);
      well.x += (x - well.x) * follow;
      well.y += (y - well.y) * follow;
    }
    well.strength += ((over ? 1 : 0) - well.strength) * (1 - Math.exp(-dt * 3));
    if (!over && well.strength < 0.002) well.strength = 0;
  };

  const tick = (dt: number) => {
    time += dt;
    followPointer(dt);
    surface.advance(time, well);

    pending += dt;
    while (pending >= STEP) {
      pending -= STEP;
      if (!run.alive) {
        idle += STEP;
        if (time < FIRST_RUN_AT || idle < BETWEEN_RUNS_SECONDS) continue;
        run.spawn(surface, Math.random);
        idle = 0;
      }
      const steered =
        well.strength > 0.2 && Math.hypot(run.x - well.x, run.y - well.y) < WELL_SPREAD * 3;
      run.step(surface, steered);
    }

    surface.sample();
    render(revealAt());
  };

  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    if (now - last < MIN_FRAME_MS) return;
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    tick(dt);
  };

  const start = () => {
    if (running || !visible || motion.matches || surface.width === 0) return;
    running = true;
    last = performance.now();
    raf = requestAnimationFrame(frame);
  };

  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };

  /** Reduced motion: one frame, mid-drift, with a finished run on it. */
  const still = () => {
    well.strength = 0;
    surface.advance(STILL_AT, well);
    surface.sample();
    run.spawn(surface, seeded(7));
    for (let i = 0; i < 60 * 10 && run.phase === "rolling"; i++) run.step(surface, false);
    run.opacity = 1;
    run.sinceRest = Infinity;
    render(Infinity);
  };

  const resize = new ResizeObserver(([entry]) => {
    const { width, height } = entry.contentRect;
    if (width === 0 || height === 0) return; // hidden below lg
    dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    surface.resize(width, height);

    // Resizing clears the canvas, so redraw now rather than flash blank.
    if (motion.matches) {
      still();
    } else {
      surface.advance(time, well);
      surface.sample();
      render(revealAt());
    }
    canvas.dataset.ready = "";
    start();
  });

  const onScreen = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
    else stop();
  });

  const onMotionChange = () => {
    if (motion.matches) {
      stop();
      if (surface.width > 0) still();
    } else {
      run.alive = false;
      start();
    }
  };

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType === "touch") return;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.present = true;
  };
  const onPointerGone = () => {
    pointer.present = false;
  };
  // No related target means the pointer left the window. The field runs to
  // the window's right edge, so that is a common way out of it.
  const onPointerOut = (event: PointerEvent) => {
    if (!event.relatedTarget) onPointerGone();
  };

  // A running loop picks the new colours up on its next frame; a still or
  // off-screen canvas has to be redrawn now.
  const onThemeChange = () => {
    readTokens();
    if (!running && surface.width > 0) render(motion.matches ? Infinity : revealAt());
  };

  resize.observe(canvas);
  onScreen.observe(canvas);
  const unsubscribeTheme = subscribeToTheme(onThemeChange);
  motion.addEventListener("change", onMotionChange);
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("blur", onPointerGone);
  document.addEventListener("pointerout", onPointerOut);

  return () => {
    stop();
    resize.disconnect();
    onScreen.disconnect();
    unsubscribeTheme();
    motion.removeEventListener("change", onMotionChange);
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("blur", onPointerGone);
    document.removeEventListener("pointerout", onPointerOut);
  };
}

export function HeroLandscape() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    return mount(canvas, ctx);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block"
      style={{ ...PLACEMENT, ...MASK_Y }}
    >
      <canvas
        ref={canvasRef}
        className="block size-full opacity-0 transition-opacity duration-1000 ease-out data-ready:opacity-100"
        style={MASK_X}
      />
    </div>
  );
}
