export default function SubjectGrid({ children }) {
  return (
    // <div className="mx-auto w-full max-w-[1400px] px-4">
      <div
        className="
          grid
          grid-cols-1         /* xs: 1 per row (optional but helpful) */
          sm:grid-cols-2      /* ≥640px: 2 per row */
          lg:grid-cols-3      /* ≥1024px: 3 per row */
          xl:grid-cols-3      /* ≥1280px: keep 3 per row */
          2xl:grid-cols-4
          gap-5
          items-stretch
        "
      >
        {children}
      </div>
    // </div>
  );
}
