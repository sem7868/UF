import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div style={{ border: "1px solid #ddd", padding: 12 }}>
        <img src={product.images[0]} width="100%" />
        <h3>{product.name}</h3>
        <p>Price starts from ₹{product.slabs.at(-1).price}/m</p>
        <p>MOQ: {product.moq} m</p>
      </div>
    </Link>
  );
}

