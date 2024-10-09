// app/dashboard/products/page.tsx
import Pagination from "@/app/ui/products/pagination"; // Adjust path if needed
import Search from "@/app/ui/search"; 
import Table from "@/app/ui/products/table"; // Adjust path if needed
import { CreateProduct } from "@/app/ui/products/buttons"; // Adjust path if needed
import { lusitana } from "@/app/ui/fonts";
import { ProductsTableSkeleton } from "@/app/ui/skeletons"; // Adjust path if needed
import { Suspense } from "react";
import { fetchProductsPages, fetchProducts, fetchFilteredProducts } from "@/app/lib/data"; // Adjust path if needed
import { FormattedProductsTable } from "@/app/lib/definitions"; // Adjust path if needed

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  
  const [totalPages, products] = await Promise.all([fetchProductsPages(query, currentPage), fetchFilteredProducts(query)]);
  


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
        <Table products={products} /> 
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} /> 
      </div>
    </div>
  );
}
