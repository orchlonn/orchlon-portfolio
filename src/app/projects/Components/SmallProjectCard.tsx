"use client";

type SmallProjectCardProps = {
  title: string;
  tags?: string[];
  githubLink?: string;
  demoLink?: string;
};

const SmallProjectCard = ({
  title,
  tags = [],
  githubLink,
  demoLink,
}: SmallProjectCardProps) => {
  return (
    <div className="group flex items-center justify-between gap-4 py-4 px-4 rounded-xl bg-[#1a1a25]/50 hover:bg-[#1a1a25] hover:border-[#22d3ee]/20 border border-transparent transition-all duration-300">
      <div className="flex flex-col gap-1.5 min-w-0">
        <h4 className="text-sm sm:text-base font-semibold text-slate-200 group-hover:text-[#22d3ee] transition-colors duration-300">
          {title}
        </h4>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-0.5 text-[10px] font-mono rounded-full text-slate-500"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-slate-500 hover:text-[#22d3ee] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.65 2 12.35c0 4.52 2.87 8.35 6.85 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.2-1.1-1.52-1.1-1.52-.9-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.13 2.94.86.09-.67.35-1.13.63-1.39-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.06a9.2 9.2 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.9-1.33 2.74-1.06 2.74-1.06.56 1.43.21 2.49.1 2.75.64.73 1.03 1.66 1.03 2.79 0 3.98-2.34 4.85-4.57 5.1.36.33.67.97.67 1.95 0 1.41-.01 2.55-.01 2.89 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.35C22 6.65 17.52 2 12 2Z" />
            </svg>
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
            className="text-slate-500 hover:text-[#22d3ee] transition-colors duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default SmallProjectCard;
