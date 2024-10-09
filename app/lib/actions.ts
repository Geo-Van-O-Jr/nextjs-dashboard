"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: "Please select a customer.",
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: "Please enter an amount greater than $0." }),
  status: z.enum(["pending", "paid"], {
    invalid_type_error: "Please select an invoice status.",
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Invoice.",
    };
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  // Insert data into the database
  try {
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath("/dashboard/invoices");
  redirect("/dashboard/invoices");
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    };
  }
 
  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
 
  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  // throw new Error('Failed to Delete Invoice');

  try {
    await sql`
      DELETE FROM invoices
      WHERE id = ${id}
    `;
    revalidatePath("/dashboard/invoices");
    return { message: "Deleted Invoice." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Invoice." };
  }
}
 
export type ProductState = {
  errors?: {
    name?: string[];
    description?: string[];
    price?: string[];
    category?: string[];
    image_url?: string[];
    stock?: string[];
  };
  message?: string | null;
};


const ProductSchema = z.object({
  id: z.string(),
  name: z.string({
    invalid_type_error: "Product name is required.",
  }),
  description: z.string({
    invalid_type_error: "Product description is required.",
  }),
  price: z.coerce
    .number()
    .gt(0, { message: "Please enter a price greater than $0." }),
  category: z.string({
    invalid_type_error: "Please select a category.",
  }),
  image_url: z.string({
    invalid_type_error: "Image URL is required.",
  }),
  stock: z.string({
    invalid_type_error: "Stock is required.",
  }),
});

const CreateProduct = ProductSchema.omit({ id: true });
const UpdateProduct = ProductSchema.omit({ id: true });

export async function createProduct(prevState: State, formData: FormData) {
  const validatedFields = CreateProduct.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    category: formData.get("category"),
    image_url: formData.get("image_url"),
    stock: formData.get("stock"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Product.",
    };
  }

  const { name, description, price, category, image_url, stock } =
    validatedFields.data;
  const priceInCents = price * 100;

  try {
    await sql`
    INSERT INTO products (name, description, price, category, image_url, stock)
    VALUES (${name}, ${description}, ${priceInCents}, ${category}, ${image_url}, ${stock})
  `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Product.",
    };
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
}

export async function updateProduct(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateProduct.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    category: formData.get("category"),
    image_url: formData.get("image_url"),
    stock: formData.get("stock"),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Product.',
    };
  }
 
  const { name, description, price, category, image_url, stock } = validatedFields.data;
  const priceInCents = price * 100;
 
  try {
    await sql`
      UPDATE products
      SET name = ${name}, description = ${description}, price = ${priceInCents}, category = ${category}, image_url = ${image_url}, stock = ${stock}
      WHERE id = ${id}
    `;
  } catch (error) {
    return { message: 'Database Error: Failed to Update Product.' };
  }
 
  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
}

export async function deleteProduct(id: string) {
  try {
    await sql`
      DELETE FROM products
      WHERE id = ${id}
    `;
    revalidatePath("/dashboard/products");
    return { message: "Deleted Product." };
  } catch (error) {
    return { message: "Database Error: Failed to Delete Product." };
  }
}
 
