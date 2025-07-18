'use client';

import { useParams } from "next/navigation";

export default function NotFound() {    
  const { productId, reviewsId } = useParams();
  return <h1>Review not found for product {productId} and review {reviewsId}</h1>;
}