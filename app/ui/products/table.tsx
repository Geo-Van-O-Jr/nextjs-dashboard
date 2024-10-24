import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { fetchFilteredProducts } from "@/app/lib/data";
import { formatCurrency } from "@/app/lib/utils";
import { DeleteProduct, UpdateProduct } from "./buttons";

export default async function ProductsTable({
  query,
  currentPage,
}: {
  query: string ;
  currentPage: number;
}) {
  const products = await fetchFilteredProducts(query);
  
  // return (
  //   <div className="w-full">
  //     <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}></h1>
  //     <Search />
  //     <div className="mt-6 flow-root">
  //       <div className="overflow-x-auto">
  //         <div className="inline-block min-w-full align-middle">
  //           <div className="overflow-hidden rounded-md bg-gray-50 p-2 md:pt-0 ">
  //             <div className="md:hidden">
  //               {products?.map((product) => (
  //                 <div
  //                   key={product.id}
  //                   className="mb-2 w-full rounded-md bg-white p-4"
  //                 >
  //                   <div className="flex items-center justify-between border-b pb-4">
  //                     <div>
  //                       <div className="mb-2 flex items-center">
  //                         <div className="flex items-center gap-3">
  //                           <Image
  //                             src={product.image_url}
  //                             className="rounded-full"
  //                             alt={`${product.name}'s image`}
  //                             width={28}
  //                             height={28}
  //                           />
  //                           <p>{product.name}</p>
  //                         </div>
  //                       </div>
  //                       <p className="text-sm text-gray-500">
  //                         {product.description}
  //                       </p>
  //                     </div>
  //                   </div>
  //                   <div className="flex w-full items-center justify-between border-b py-5">
  //                     <div className="flex w-1/2 flex-col">
  //                       <p className="text-xs">Price</p>
  //                       <p className="font-medium">{product.price}</p>
  //                     </div>
  //                     <div className="flex w-1/2 flex-col">
  //                       <p className="text-xs">Stock</p>
  //                       <p className="font-medium">{product.stock}</p>
  //                     </div>
  //                   </div>
  //                 </div>
  //               ))}
  //             </div>
  //             <table className="hidden min-w-full rounded-md text-gray-900 md:table">
  //               <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
  //                 <tr>
  //                   <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
  //                     Name
  //                   </th>
  //                   <th scope="col" className="px-3 py-5 font-medium">
  //                     Description
  //                   </th>
  //                   <th scope="col" className="px-3 py-5 font-medium">
  //                     Price
  //                   </th>
  //                   <th scope="col" className="px-3 py-5 font-medium">
  //                     Stock
  //                   </th>
  //                   <th scope="col" className="px-3 py-5 font-medium">
  //                     Image
  //                   </th>
  //                   <th></th>
  //                 </tr>
  //               </thead>

  //               <tbody className="divide-y divide-gray-200 text-gray-900">
  //                 {products.map((product) => (
  //                   <tr key={product.id} className="group">
  //                     <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
  //                       <div className="flex items-center gap-3">
  //                         <Image
  //                           src={product.image_url}
  //                           className="rounded-full"
  //                           alt={`${product.name}'s image`}
  //                           width={28}
  //                           height={28}
  //                         />
  //                         <p>{product.name}</p>
  //                       </div>
  //                     </td>
  //                     <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
  //                       {product.description}
  //                     </td>
  //                     <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
  //                       {product.price}
  //                     </td>
  //                     <td className="whitespace-nowrap bg-white px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
  //                       {product.stock}
  //                     </td>
  //                   </tr>
  //                 ))}
  //               </tbody>
  //               </table>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {products?.map((product) => (
              <div
                key={product.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={product.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${product.name}'s profile picture`}
                      />
                      <p>{product.name}</p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    {/* <p className="text-xl font-medium">
                      {formatCurrency(product.price)}
                    </p>
                    <p>{formatDateToLocal(product.date)}</p> */}
                  </div>
                  <div className="flex justify-end gap-2">
                    {/* <Updateproduct id={product.id} />
                    <Deleteproduct id={product.id} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Price
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Stock
                </th>
              </tr>
            </thead>

            <thead>
              <th scope="col" className="relative py-3 pl-6 pr-3">
                <span className="sr-only">Edit</span>
              </th>
            </thead>
            <tbody className="bg-white">
              {products?.map((product) => (
                <tr
                  key={product.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={product.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${product.name}'s profile picture`}
                      />
                      <p>{product.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {product.description}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* {formatCurrency(product.price)} */}
                    {product.price}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {/* {formatDateToLocal(product.date)} */}
                    {product.stock}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateProduct id={product.id} />
                      <DeleteProduct id={product.id} />
                    </div>
                  </td>


                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      </div>
    </div>
  );
}
