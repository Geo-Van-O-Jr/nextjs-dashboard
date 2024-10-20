// app/dashboard/products/page.tsx
"use client";

import Pagination from "@/app/ui/products/pagination";
import Search from "@/app/ui/search";
import ProductsTable from "@/app/ui/products/table";
import { CreateProduct } from "@/app/ui/products/buttons";
import { lusitana } from "@/app/ui/fonts";
import { ProductsTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { products as productsData } from "@/app/lib/placeholder-data";


export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  
  const query = searchParams?.query || '';
  const page = searchParams?.page || 1;
  const totalPages = 10;
  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className={`text-3xl font-bold ${lusitana.className}`}>
          Products
        </h2>
        <CreateProduct />
      </div>
      <Search />
      <Suspense fallback={<ProductsTableSkeleton />}>
        <ProductsTable products={productsData} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
// app/dashboard/products/page.tsx