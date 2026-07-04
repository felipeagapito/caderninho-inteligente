export type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
  minStock: number;
  price: number;
};

export type Customer = {
  id: string;
  name: string;
  phone?: string;
  amountDue: number;
};

export type Sale = {
  id: string;
  customerName: string;
  productName: string;
  quantity: number;
  amount: number;
  payment: "Pix" | "Dinheiro" | "Cartao" | "Pendente";
  time: string;
};

export const products: Product[] = [
  { id: "p1", name: "Kaiak Classico", category: "Perfume", stock: 3, minStock: 2, price: 120 },
  { id: "p2", name: "Tododia Macadamia", category: "Corpo", stock: 7, minStock: 3, price: 38 },
  { id: "p3", name: "Luna Radiante", category: "Perfume", stock: 1, minStock: 2, price: 145 },
  { id: "p4", name: "Sabonete Erva Doce", category: "Banho", stock: 12, minStock: 5, price: 24 }
];

export const customers: Customer[] = [
  { id: "c1", name: "Dona Maria", amountDue: 0 },
  { id: "c2", name: "Dona Ana", amountDue: 60 },
  { id: "c3", name: "Seu Roberto", amountDue: 120 }
];

export const sales: Sale[] = [
  { id: "s1", customerName: "Dona Maria", productName: "Kaiak Classico", quantity: 1, amount: 120, payment: "Pix", time: "Hoje, 09:20" },
  { id: "s2", customerName: "Dona Ana", productName: "Tododia Macadamia", quantity: 2, amount: 76, payment: "Pendente", time: "Hoje, 10:15" },
  { id: "s3", customerName: "Seu Roberto", productName: "Sabonete Erva Doce", quantity: 1, amount: 24, payment: "Dinheiro", time: "Ontem, 18:40" }
];

export const dashboard = {
  todaySales: sales.filter((sale) => sale.time.startsWith("Hoje")).reduce((sum, sale) => sum + sale.amount, 0),
  amountDue: customers.reduce((sum, customer) => sum + customer.amountDue, 0),
  lowStockCount: products.filter((product) => product.stock <= product.minStock).length,
  monthSales: 1248
};

export const lowStockProducts = products.filter((product) => product.stock <= product.minStock);
