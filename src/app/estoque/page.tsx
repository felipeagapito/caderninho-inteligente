import { AppShell } from "../../components/AppShell";
import { PageHeader } from "../../components/PageHeader";
import { products } from "../../data/mock";

function money(value: number) {
  return "R$ " + value.toLocaleString("pt-BR");
}

export default function EstoquePage() {
  return (
    <AppShell active="/estoque">
      <PageHeader eyebrow="Produtos" title="Estoque" />

      <section className="notice">Produtos com estoque baixo aparecem com aviso para facilitar a reposicao.</section>

      <h2 className="section-title">Lista de produtos</h2>
      <section className="card list-card">
        {products.map((product) => (
          <div className="list-row" key={product.id}>
            <div>
              <p className="item-title">{product.name}</p>
              <p className="item-subtitle">{product.category} · {money(product.price)}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <strong className="price">{product.stock}</strong>
              {product.stock <= product.minStock ? <p className="status-pill">Baixo</p> : null}
            </div>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
