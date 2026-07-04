export function PageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">{title}</h1>
      </div>
      <div className="brand-mark" aria-hidden="true">C</div>
    </header>
  );
}
