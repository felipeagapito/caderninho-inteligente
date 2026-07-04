import { AppShell } from "../../components/AppShell";
import { PageHeader } from "../../components/PageHeader";

export default function ReportsPage() {
  return (
    <AppShell active="/reports">
      <PageHeader eyebrow="Resumo" title="Vendas" />
      <section className="notice">Totais e historico entram na proxima fase.</section>
    </AppShell>
  );
}
