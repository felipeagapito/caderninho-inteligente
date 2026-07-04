import { AppShell } from "../../components/AppShell";
import { PageHeader } from "../../components/PageHeader";
import { customers } from "../../data/mock";

function money(value: number) {
  return "R$ " + value.toLocaleString("pt-BR");
}

export default function ClientesPage() {
  return (
    <AppShell active="/clientes">
      <PageHeader eyebrow="Pessoas" title="Clientes" />

      <section className="notice">Esta tela mostra clientes e valores em aberto de forma simples.</section>

      <h2 className="section-title">Lista de clientes</h2>
      <section className="card list-card">
        {customers.map((customer) => (
          <div className="list-row" key={customer.id}>
            <div>
              <p className="item-title">{customer.name}</p>
              <p className="item-subtitle">{customer.amountDue > 0 ? "Valor em aberto" : "Tudo certo"}</p>
            </div>
            <strong className="price">{money(customer.amountDue)}</strong>
          </div>
        ))}
      </section>
    </AppShell>
  );
}
