// src/app/product/[id]/page.tsx
import ProductDetailsClient from "./ProductDetailsClient";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params; 

  return <ProductDetailsClient id={id} />;
}
