# Modelo de dados futuro

A primeira fase usa dados mockados. Quando o banco real entrar, o modelo deve comecar simples.

## Tabelas principais

- products: produtos, categorias, preco e estoque minimo.
- customers: clientes e valores em aberto.
- sales: venda confirmada.
- sale_items: itens de cada venda.
- inventory_movements: entradas, saidas e ajustes de estoque.
- action_logs: historico de acoes importantes.

## Decisao importante

O estoque nao deve ser alterado de forma solta. Cada mudanca deve gerar um movimento para permitir revisao depois.
