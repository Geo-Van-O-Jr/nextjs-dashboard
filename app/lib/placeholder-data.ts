// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Jefferson Francisco',
    email: 'jefferson@francisco.com',
    image_url: '/customers/jefferson-francisco.png',
  },
  {
    id: '48947534-2594-4936-9062-fec4b6a6442a',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const products = [
  {
    id: '84e20c74-d24d-4d29-a09f-ef7874001695',
    name: 'Wireless Noise-Canceling Headphones',
    description: 'Immerse yourself in exceptional audio with our advanced noise-canceling technology.',
    price: 299.99,
    category: 'Electronics',
    image_url: '/products/headphones.png',
    stock: '120',
  },
  {
    id: '3c5a897c-384d-484a-a09f-ef7874001696',
    name: 'Ergonomic Office Chair',
    description: 'Experience ultimate comfort and support during long work hours.',
    price: 199.99,
    category: 'Furniture',
    image_url: '/products/office-chair.jpg',
    stock: '50',
  },
  {
    id: '95c2a78c-384d-484a-b09f-ef7874001697',
    name: 'Modern Coffee Table',
    description: 'Elevate your living space with this stylish and functional coffee table.',
    price: 149.99,
    category: 'Furniture',
    image_url: '/products/coffee-table.jpg',
    stock: '25',
  },
  {
    id: '2f5b347c-384d-484a-c09f-ef7874001698',
    name: 'Ultra HD Smart TV',
    description: 'Enjoy stunning visuals and immersive entertainment with our latest smart TV.',
    price: 599.99,
    category: 'Electronics',
    image_url: '/products/smart-tv.jpg',
    stock: '30',
  },
  {
    id: '7a5b347c-384d-484a-d09f-ef7874001699',
    name: 'Professional Chef Knife Set',
    description: 'Chop, slice, and dice like a pro with our premium chef knife set.',
    price: 129.99,
    category: 'Kitchen',
    image_url: '/products/chef-knives.jpg',
    stock: '75',
  },
];


export { users, customers, invoices, revenue, products };
