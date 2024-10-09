import Link from "next/link";
import { Icons } from "@/app/components/icons";
import { cn } from "@/app/lib/utils";

// NOTE: Uncomment this code in Chapter 10

const navigation = [
  {
    name: "Visão Geral",
    href: "/dashboard",
    icon: Icons.Dashboard,
    current: false,
  },
  {
    name: "Cadastros",
    href: "/dashboard/customers",
    icon: Icons.Users,
    current: false,
  },
  {
    name: "Vendas",
    href: "/dashboard/invoices",
    icon: Icons.Inbox,
    current: false,
  },
  {
    name: "Raio X",
    href: "/dashboard/products",
    icon: Icons.ShoppingBag,
    current: false,
  },
  { name: "Conta Digital", href: "#", icon: Icons.CreditCard, current: false },
  {
    name: "Estoque",
    href: "/dashboard/stock",
    icon: Icons.Package,
    current: false,
  },
  {
    name: "Relatórios",
    href: "/dashboard/repports",
    icon: Icons.ChartBar,
    current: false,
  },
  { name: "Financeiro", href: "#", icon: Icons.CurrencyDollar, current: false },
  { name: "Fiscal", href: "#", icon: Icons.Scale, current: false },
  { name: "Contabilidade", href: "#", icon: Icons.Calculator, current: false },
  {
    name: "Configurações",
    href: "/dashboard/configurations",
    icon: Icons.Settings,
    current: false,
  },
  {
    name: "Loja de Aplicativos",
    href: "#",
    icon: Icons.Archive,
    current: false,
  },
];

export default function NavLinks() {
  return (
    <ul role="list" className="mt-4 space-y-1">
      {navigation.map((item) => (
        <li key={item.name}>
          <Link
            href={item.href}
            className={cn(
              "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
              item.current
                ? "bg-gray-100 text-gray-900"
                : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            {/* <item.icon
              className={cn(
                "mr-3 h-6 w-6 flex-shrink-0",
                item.current
                  ? "text-gray-900"
                  : "text-gray-400 group-hover:text-gray-500"
              )}
            /> */}
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
