import { AppShell } from "../components/AppShell";
import { PageHeader } from "../components/PageHeader";
import { dashboard, lowStockProducts, sales } from "../data/mock";

function money(value: number) {
  return "R$ " + value.toLocaleString("pt-BR");
}

export default function Home() {
  return (
    <AppShell active="/">
      <PageHeader eyebrow="Caderninho da familia" title="Controle simples das vendas" />

      <section className="card hero-card">
        <p className="eyebrow">Comece por aqui</p>
        <h2 className="section-title">Registrar uma venda</h2>
        <p>Digite ou dite a venda usando o microfone do teclado. Depois confira antes de salvar.</p>
        <a className="big-button" href="/vendas">Registrar venda</a>
      </section>

      <section className="metrics-grid" aria-label="Resumo de hoje">
        <article className="card metric-card">
          <p className="metric-label">Hoje</p>
          <p className="metric-value">{money(dashboard.todaySales)}</p>
          <p className="metric-note">Vendido hoje</p>
        </article>
        <article className="card metric-card">
          <p className="metric-label">A receber</p>
          <p className="metric-value">{money(dashboard.amountDue)}</p>
          <p className="metric-note">Clientes devendo</p>
        </article>
        <article className="card metric-card">
          <p className="metric-label">Baixo estoque</p>
          <p className="metric-value">{dashboard.lowStockCount}</p>
          <p className="metric-note">Precisa olhar</p>
        </article>
        <article className="card metric-card">
          <p className="metric-label">Mes</p>
          <p className="metric-value">{money(dashboard.monthSales)}</p>
          <p className="metric-note">Total estimado</p>
        </article>
      </section>

      <h2 className="section-title">Ultimas vendas</h2>
      <section className="card list-card">
        {sales.map((sale) => (
          <div className="list-row" key={sale.id}>
            <div>
              <p className="item-title">{sale.productName}</p>
              <p className="item-subtitle">{sale.customerName} · {sale.time}</p>
            </div>
            <strong className="price">{money(sale.amount)}</strong>
          </div>
        ))}
      </section>

      <h2 className="section-title">Produtos acabando</h2>
      <section className="card list-card">
        {lowStockProducts.map((product) => (
          <div className="list-row" key={product.id}>
            <div>
              <p className="item-title">{product.name}</p>
              <p className="item-subtitle">Estoque atual: {product.stock}</p>
            </div>
            <span className="status-pill">Repor</span>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
