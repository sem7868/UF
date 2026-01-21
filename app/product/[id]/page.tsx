import { products } from "@/lib/data";
import MediaGallery from "@/components/MediaGallery";
import PriceSlabs from "@/components/PriceSlabs";

export default function ProductPage({ params }) {
  const product = products.find(p => p.id === params.id);

  if (!product) return <p>Product not found</p>;

  return (
    <div style={{ padding: 16 }}>
      <h2>{product.name}</h2>

      <MediaGallery images={product.images} videos={product.videos} />

      <PriceSlabs product={product} />
    </div>
  );
}

