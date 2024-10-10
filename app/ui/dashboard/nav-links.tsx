"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CurrencyDollarIcon,
  ArrowLongUpIcon,
  ArrowUpRightIcon,
  ShoppingBagIcon,
  PresentationChartBarIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
  { name: "Products", href: "/dashboard/products", icon: ShoppingBagIcon },
  { name: "Finantial", href: "/dashboard/finantial", icon: CurrencyDollarIcon },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Configurations",
    href: "/dashboard/configurations",
    icon: XCircleIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-blue-600 p-3 text-sm font-medium text-white hover:bg-blue-700 md:flex-none md:justify-start md:p-2 md:px-3"
                : "flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            }
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
