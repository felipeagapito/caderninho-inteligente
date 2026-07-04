import { AppShell } from "../../components/AppShell";
import { PageHeader } from "../../components/PageHeader";

export default function ConfiguracoesPage() {
  return (
    <AppShell active="/configuracoes">
      <PageHeader eyebrow="Ajustes" title="Configuracoes" />
      <section className="notice">Aqui ficarao nome do app, tamanho da letra, backup e preferencia de confirmacao.</section>
    </AppShell>
  );
}
