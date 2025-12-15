import { Suspense } from "react";
import ProductDetailsClient from "./ProductDetailsClient";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailsPage({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={<div className="p-4">Loading product...</div>}>
      <ProductDetailsClient id={id} />
    </Suspense>
  );
}
