import { AppShell } from "../../components/AppShell";
import { PageHeader } from "../../components/PageHeader";

export default function VendasPage() {
  return (
    <AppShell active="/vendas">
      <PageHeader eyebrow="Venda nova" title="Fale ou digite a venda" />

      <section className="card input-card">
        <label className="metric-label" htmlFor="sale-command">O que foi vendido?</label>
        <textarea
          id="sale-command"
          className="sale-textarea"
          placeholder="Exemplo: vendi um Kaiak para Dona Maria por 120 reais, pago no Pix."
        />
        <p className="help-text">Dica: toque no microfone do teclado do celular e fale a venda com calma.</p>
        <button className="big-button" type="button">Interpretar venda</button>
      </section>

      <section className="card confirm-card">
        <p className="eyebrow">Exemplo de confirmacao</p>
        <h2 className="section-title">Confira antes de salvar</h2>
        <div className="confirm-grid">
          <div className="confirm-line"><span>Produto</span><strong>Kaiak Classico</strong></div>
          <div className="confirm-line"><span>Cliente</span><strong>Dona Maria</strong></div>
          <div className="confirm-line"><span>Valor</span><strong>R$ 120</strong></div>
          <div className="confirm-line"><span>Pagamento</span><strong>Pix</strong></div>
        </div>
        <button className="big-button" type="button">Confirmar</button>
        <br />
        <button className="big-button secondary" type="button">Corrigir</button>
      </section>
    </AppShell>
  );
}
