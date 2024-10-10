// app/api/products.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres'; // Assuming you're using @vercel/postgres
import { ProductsTableType } from '../lib/definitions';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const products = await sql<ProductsTableType>`
        SELECT * FROM products;
      `;
      res.status(200).json(products.rows);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
