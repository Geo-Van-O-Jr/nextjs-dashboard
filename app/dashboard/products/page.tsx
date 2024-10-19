// c:\Users\geova\nextjs-dashboard\nextjs-dashboard-1\app\dashboard\products\page.tsx
'use client';
import Pagination from "@/app/ui/products/pagination"; // Update import path
import Search from "@/app/ui/search"; 
import Table from "@/app/ui/products/table"; // Update import path
import { CreateProduct } from "@/app/ui/products/buttons"; // Update import path
import { lusitana } from "@/app/ui/fonts"; 
import { ProductsTableSkeleton } from "@/app/ui/skeletons"; // Update import path
import { Suspense } from "react";
import { fetchProductsPages } from "@/app/lib/data"; // Update data fetching function

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchProductsPages(query); // Fetch product pages

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1> {/* Update title */}
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search />
        <CreateProduct /> {/* Use CreateProduct component */}
      </div>
      <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
        <Table query={query} currentPage={currentPage} /> 
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
