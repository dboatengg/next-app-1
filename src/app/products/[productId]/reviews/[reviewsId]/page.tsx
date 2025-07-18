import { notFound } from 'next/navigation';

export default async function Review({ params }: { params: { productId: string, reviewsId: string } }) {
  const { productId, reviewsId } = await params;
  if (Number(reviewsId) > 10) {
    notFound();
  }
  return <h1>Review {reviewsId} for product {productId}</h1>;
}