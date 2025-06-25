import dbConnect from '@/lib/mongodb';
export async function GET() {
  await dbConnect();
  return new Response('pong');
}