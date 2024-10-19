// c:\Users\geova\nextjs-dashboard\nextjs-dashboard-1\app\dashboard\products\page.tsx
"use client";
import Pagination from "@/app/ui/products/pagination";
import Search from "@/app/ui/search";
import ProductsTable from "@/app/ui/products/table";
import { CreateProduct } from "@/app/ui/products/buttons";
import { lusitana } from "@/app/ui/fonts";
import { ProductsTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchProducts, fetchProductsPages } from "@/app/lib/data";

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
  const products = await fetchProducts(query, currentPage);

  const totalPages = await fetchProductsPages(query, currentPage);

  return (
    <main className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
        <CreateProduct />
      </div>
      <Search />
      <Suspense fallback={<ProductsTableSkeleton />}>
        <ProductsTable products={products}/>
      </Suspense>
      <Pagination totalPages={totalPages} />
    </main>
  );
}
