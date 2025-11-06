import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type ProjectCardProps = {
  title: string;
  image: StaticImageData | string;
  description?: string;
  tags?: string[];
  githubLink?: string;
  demoLink?: string;
  appStoreLink?: string;
  playStoreLink?: string;
  featured?: boolean;
  className?: string;
};

const Icon = {
  GitHub: () => (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.65 2 12.35c0 4.52 2.87 8.35 6.85 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.2-1.1-1.52-1.1-1.52-.9-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.13 2.94.86.09-.67.35-1.13.63-1.39-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.06a9.2 9.2 0 0 1 2.5-.35c.85 0 1.71.12 2.5.35 1.9-1.33 2.74-1.06 2.74-1.06.56 1.43.21 2.49.1 2.75.64.73 1.03 1.66 1.03 2.79 0 3.98-2.34 4.85-4.57 5.1.36.33.67.97.67 1.95 0 1.41-.01 2.55-.01 2.89 0 .27.18.59.69.49A10.04 10.04 0 0 0 22 12.35C22 6.65 17.52 2 12 2Z" />
    </svg>
  ),
  External: () => (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z" />
    </svg>
  ),
  AppStore: () => (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  ),
  PlayStore: () => (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
  ),
};

const ActionButton = ({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-300 text-black px-3 py-2 rounded-md hover:from-teal-300 hover:to-teal-400 transition-all duration-300 text-sm ring-1 ring-teal-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/50"
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
    </a>
  );
};

const ProjectCard = ({
  title,
  image,
  description,
  tags = [],
  githubLink,
  demoLink,
  appStoreLink,
  playStoreLink,
  featured = false,
  className = "",
}: ProjectCardProps) => {
  return (
    <div
      className={clsx(
        "group relative flex flex-col rounded-3xl border border-slate-700/60 bg-slate-900/60 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-1",
        featured ? "md:col-span-2 xl:col-span-2" : "",
        className
      )}
    >
      <div
        className={clsx(
          "relative w-full overflow-hidden rounded-t-3xl",
          featured ? "h-64 sm:h-72" : "h-44 sm:h-56"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out scale-100 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>

      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-50">
            {title}
          </h3>
          {(appStoreLink || playStoreLink) && (
            <div className="flex items-center gap-1">
              {appStoreLink && (
                <span className="px-2 py-1 text-[10px] font-medium rounded-md bg-teal-400/20 text-teal-200">
                  iOS
                </span>
              )}
              {playStoreLink && (
                <span className="px-2 py-1 text-[10px] font-medium rounded-md bg-teal-400/20 text-teal-200">
                  Android
                </span>
              )}
            </div>
          )}
        </div>

        {description && (
          <p className="text-slate-300 text-sm leading-relaxed">
            {description}
          </p>
        )}

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-1 flex flex-wrap gap-2">
          {githubLink && (
            <ActionButton href={githubLink} label="GitHub">
              <Icon.GitHub />
            </ActionButton>
          )}
          {demoLink && (
            <ActionButton href={demoLink} label="Live Demo">
              <Icon.External />
            </ActionButton>
          )}
          {appStoreLink && (
            <ActionButton href={appStoreLink} label="App Store">
              <Icon.AppStore />
            </ActionButton>
          )}
          {playStoreLink && (
            <ActionButton href={playStoreLink} label="Play Store">
              <Icon.PlayStore />
            </ActionButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
