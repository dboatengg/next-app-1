import { Metadata } from 'next';

type ProductPageParams = { params: { productId: string } };

export async function generateMetadata(
  props: ProductPageParams
): Promise<Metadata> {
  const { params } = await props;
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
    description: `Details and reviews for product ${productId}.`,
  };
}

export default async function Product({ params }: ProductPageParams) {
  const { productId } = await params;
  return <h1>Product {productId}</h1>;
}