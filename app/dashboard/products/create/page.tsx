import ProductsForm from '@/app/ui/products/create-product';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import {fetchProducts } from '@/app/lib/data';
 
export default async function Page() {
  const products = await fetchProducts();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Products', href: '/dashboard/products' },
          {
            label: 'Create Invoice',
            href: '/dashboard/products/create',
            active: true,
          },
        ]}
      />
      <ProductsForm products={products} />
    </main>
  );
}