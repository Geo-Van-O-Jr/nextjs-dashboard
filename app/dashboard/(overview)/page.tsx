import { lusitana } from "app/ui/fonts";
import Link from "next/link";
import {
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  ClipboardDocumentListIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Dashboard from "@/app/dashboard/dashboard-panel/page";

const quickAccessLinks = [
  {
    section: "Cadastros",
    icon: BuildingStorefrontIcon,
    links: [
      { name: "Novo fornecedor", href: "/cadastros/fornecedor" },
      { name: "Novo produto", href: "/cadastros/produto" },
      { name: "Novo cliente", href: "/cadastros/cliente" },
      
    ],
  },
  {
    section: "Financeiro",
    icon: CurrencyDollarIcon,
    links: [
      { name: "Novo boleto", href: "/financeiro/boleto" },
      { name: "Mensalidades", href: "/financeiro/mensalidades" },
      { name: "Nova conta a pagar", href: "/financeiro/pagar" },
      { name: "Nova conta a receber", href: "/financeiro/receber" },
    ],
  },
  {
    section: "Vendas",
    icon: ShoppingBagIcon,
    links: [
      { name: "Novo orçamento", href: "/vendas/orcamento" },
      { name: "Faturamento", href: "/vendas/faturamento" },
      { name: "Fechamento de caixa", href: "/vendas/caixa" },
    ],
  },
  {
    section: "Estoque",
    icon: ClipboardDocumentListIcon,
    links: [
      { name: "Nova movimentação", href: "/estoque/movimentacao" },
      { name: "Novo local estoque", href: "/estoque/local" },
    ],
  },
  {
    section: "Fiscal",
    icon: DocumentDuplicateIcon,
    links: [
      { name: "Lançar documento fiscal", href: "/fiscal/lancar" },
      { name: "Emitir nota fiscal", href: "/fiscal/emitir" },
    ],
  },
];

export default async function Page() {
  return (
    <main>
      <div className="">
        <Link href="./dashboard/" className="text-blue-500">
          Acésso rápido
        </Link>
      </div>
      <div className="">
        <Link href="./dashboard/dashboard-panel" className="text-blue-500">
          Dashboard
        </Link>
      </div>

      {/* Quick Access Section */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {quickAccessLinks.map((section) => (
          <div
            key={section.section}
            className="rounded-lg bg-white p-4 shadow-md"
          >
            <div className="flex items-center gap-2 mb-3 text-lg font-medium">
              <section.icon className="h-6 w-6" />
              <span>{section.section}</span>
            </div>
            <ul>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
