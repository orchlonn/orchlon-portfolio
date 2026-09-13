import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60svh] w-full max-w-(--container-page) flex-col justify-center px-5 py-24 sm:px-8 lg:px-12">
      <p className="type-label text-muted">404</p>
      <h1 className="mt-6 max-w-[16ch] text-3xl font-medium tracking-[-0.03em] text-ink md:text-4xl">
        That page doesn&rsquo;t exist.
      </h1>
      <Link href="/" className="rule-link mt-8 self-start text-ink">
        Back to the homepage
      </Link>
    </div>
  );
}
