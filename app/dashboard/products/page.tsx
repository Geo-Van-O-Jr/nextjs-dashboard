

import Pagination from "@/app/ui/products/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/products/table";
import { CreateProduct } from "@/app/ui/products/buttons";
import { lusitana } from "@/app/ui/fonts";
import { ProductsTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchProductsPages } from "@/app/lib/data";


export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  
  const query = searchParams?.query || "" ;
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductsPages(query);
 
 
  // const totalPages = 10;
  // export async function fetchInvoicesPages(query: string) {
  //   try {
  //     const count = await sql`SELECT COUNT(*)
  //     FROM invoices
  //     JOIN customers ON invoices.customer_id = customers.id
  //     WHERE
  //       customers.name ILIKE ${`%${query}%`} OR
  //       customers.email ILIKE ${`%${query}%`} OR
  //       invoices.amount::text ILIKE ${`%${query}%`} OR
  //       invoices.date::text ILIKE ${`%${query}%`} OR
  //       invoices.status ILIKE ${`%${query}%`}
  //   `;
  
  //     const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);
  //     return totalPages;
  //   } catch (error) {
  //     console.error("Database Error:", error);
  //     throw new Error("Failed to fetch total number of invoices.");
  //   }
  // }
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search />
        <CreateProduct />
      </div>
       <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={Number(totalPages) || 1} />
      </div>
    </div>
  );
}
// app/dashboard/products/page.tsx