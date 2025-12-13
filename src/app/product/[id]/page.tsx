// src/app/product/[id]/page.tsx
import dynamic from "next/dynamic";

const ProductDetailsClient = dynamic(
  () => import("./ProductDetailsClient"),
  { ssr: false }
);

type Props = {
  params: { id: string };
};

export default function ProductDetailsPage({ params }: Props) {
  const { id } = params;

  // (Optional) server-side fetch
  // const product = await getProduct(id);

  return <ProductDetailsClient id={id} />;
}
