import { getPriceByQty } from "@/lib/pricing";
import { whatsappLink } from "@/lib/whatsapp";
import { useState } from "react";

export default function PriceSlabs({ product }) {
  const [qty, setQty] = useState(product.moq);
  const price = getPriceByQty(product.slabs, qty);

  return (
    <>
      <p>Price: ₹{price} / meter</p>
      <p>GST: 5% Extra</p>

      <input
        type="number"
        value={qty}
        onChange={e => setQty(+e.target.value)}
      />

      <a href={whatsappLink(product, qty, price)}>
        <button>Order on WhatsApp</button>
      </a>
    </>
  );
}

