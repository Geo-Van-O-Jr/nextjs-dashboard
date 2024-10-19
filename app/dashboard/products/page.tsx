// c:\Users\geova\nextjs-dashboard\nextjs-dashboard-1\app\dashboard\products\page.tsx
<<<<<<< HEAD
"use client";
import Pagination from "@/app/ui/products/pagination";
import Search from "@/app/ui/search";
import ProductsTable from "@/app/ui/products/table";
import { CreateProduct } from "@/app/ui/products/buttons";
import { lusitana } from "@/app/ui/fonts";
import { ProductsTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchProducts, fetchProductsPages } from "@/app/lib/data";
=======
'use client';
import Pagination from "@/app/ui/products/pagination";
import Search from "@/app/ui/search"; 
import ProductsTable from "@/app/ui/products/table";
import { CreateProduct } from "@/app/ui/products/buttons";
import { lusitana } from "@/app/ui/fonts"; 
import { ProductsTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { fetchProductsPages } from "@/app/lib/data"; 
>>>>>>> 811f765 (Create Products table)

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
<<<<<<< HEAD
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const products = await fetchProducts(query, currentPage);

  const totalPages = await fetchProductsPages(query, currentPage);
=======
  // Await searchParams before accessing properties
  const query = searchParams?.query || ""; 
  const currentPage = Number(searchParams?.page) || 1; 

  const { products, totalPages } = await fetchProductsPages(query,currentPage);

>>>>>>> 811f765 (Create Products table)

  return (
    <main className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Products</h1>
        <CreateProduct />
      </div>
<<<<<<< HEAD
      <Search />
      <Suspense fallback={<ProductsTableSkeleton />}>
        <ProductsTable products={products}/>
=======
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search />
        <CreateProduct /> {/* Use CreateProduct component */}
      </div>
      <Suspense key={query + currentPage} fallback={<ProductsTableSkeleton />}>
        <ProductsTable products={products} query={query} currentPage={currentPage} /> 
>>>>>>> 811f765 (Create Products table)
      </Suspense>
      <Pagination totalPages={totalPages} />
    </main>
  );
}
