// 'use client'
// import Pagination from '@/app/ui/products/pagination'
// import Search from '@/app/ui/search'
// import Table from '@/app/ui/products/table'
// import { CreateProduct } from '@/app/ui/products/buttons'
// import { lusitana } from '@/app/ui/fonts'
// import { ProductsTableSkeleton } from '@/app/ui/skeletons'
// import { Suspense, useState } from "react";
// import { products as placeholderProducts } from '@/app/lib/placeholder-data'
// import { FormattedProductsTable } from '@/app/lib/definitions'
// import { useEffect } from 'react';

// export default function ProductsPage() {
//   const [products, setProducts] = useState([...placeholderProducts]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setIsLoading(true);
//       try {
//         const res = await fetch('/api/products');
//         const data = await res.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const totalPages = 10;

//   return (
//     <div className="flex flex-col gap-6">
//       <div className="flex items-center justify-between">
//         <h1 className={`${lusitana.className} text-2xl md:text-3xl`}>Products</h1>
//         <CreateProduct />
//       </div>
//       <Search />
//       <Suspense fallback={<ProductsTableSkeleton />}>
//         <Table products={products as FormattedProductsTable[]} />
//       </Suspense>
//       <Pagination totalPages={totalPages} />
//     </div>
//   );
// }
