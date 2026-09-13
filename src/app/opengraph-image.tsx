import { ImageResponse } from "next/og";

import { SITE } from "@/data/site";

export const alt = `${SITE.name} — ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FFFFFF",
          padding: "72px",
          borderTop: "14px solid #111111",
        }}
      >
        <div
          style={{
            fontSize: 24,
            letterSpacing: "0.16em",
            color: "#6B6B6B",
            textTransform: "uppercase",
          }}
        >
          {SITE.name}
        </div>

        <div
          style={{
            fontSize: 78,
            lineHeight: 1.02,
            letterSpacing: "-0.035em",
            color: "#111111",
            maxWidth: 940,
          }}
        >
          {SITE.headline}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#6B6B6B",
            borderTop: "1px solid #E5E5E5",
            paddingTop: 24,
          }}
        >
          <span>{SITE.role}</span>
          <span>orchlon.dev</span>
        </div>
      </div>
    ),
    size,
  );
}
