const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/vendas", label: "Vendas" },
  { href: "/estoque", label: "Estoque" },
  { href: "/clientes", label: "Clientes" },
  { href: "/relatorio", label: "Resumo" }
];

export function AppShell({ children, active = "/" }: { children: React.ReactNode; active?: string }) {
  return (
    <>
      <main className="app-shell">{children}</main>
      <nav className="bottom-nav" aria-label="Navegacao principal">
        <div className="bottom-nav-inner">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={item.href === active ? "nav-link active" : "nav-link"}>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
