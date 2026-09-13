import { SITE, SOCIALS } from "@/data/site";

import { ExternalLink } from "../primitives/external-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-(--container-page) px-5 py-10 sm:px-8 md:py-12 lg:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-[15px] font-medium tracking-[-0.02em] text-ink">
              {SITE.name}
            </p>
            <p className="type-meta mt-2 text-muted">
              &copy; {new Date().getFullYear()} {SITE.name}
            </p>
          </div>

          <div>
            <p className="type-label text-muted">Elsewhere</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <ExternalLink
                    href={social.href}
                    showArrow={false}
                    className="type-meta text-muted hover:text-ink"
                  >
                    {social.label}
                  </ExternalLink>
                </li>
              ))}
              <li>
                <a
                  href="#top"
                  className="type-meta text-muted transition-colors hover:text-ink"
                >
                  Back to top &uarr;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
