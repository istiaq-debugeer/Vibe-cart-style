import ProductDetailsClient from "./ProductDetailsClient";

type Props = {
  params: { id: string };
};

export default function ProductDetailsPage({ params }: Props) {
  return <ProductDetailsClient id={params.id} />;
}
