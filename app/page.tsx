import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <main style={{ padding: 16 }}>
      <h1>Universal Fabrics</h1>
      <p>Wholesale Fabric Supplier | Pan India</p>

      <div style={{ display: "grid", gap: 16 }}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}

