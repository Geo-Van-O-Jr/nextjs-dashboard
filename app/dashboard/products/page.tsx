// c:\Users\geova\nextjs-dashboard\nextjs-dashboard-1\app\dashboard\products\page.tsx
'use client';
import Pagination from "@/app/ui/products/pagination";
import Search from "@/app/ui/search"; 
import ProductsTable from "@/app/ui/products/table";
import { CreateProduct } from "@/app/ui/products/buttons";
import { lusitana } from "@/app/ui/fonts"; 
import { ProductsTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchProductsPages } from "@/app/lib/data"; 

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  // Await searchParams before accessing properties
  const query = searchParams?.query || ""; 
  const currentPage = Number(searchParams?.page) || 1; 

  const { products, totalPages } = await fetchProductsPages(query,currentPage);


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
        <ProductsTable products={products} query={query} currentPage={currentPage} /> 
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
