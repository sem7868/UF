export function whatsappLink(product, qty, price) {
  const msg = `
Hello Universal Fabrics,

Product: ${product.name}
Quantity: ${qty} meters
Price: ₹${price}/meter
GST: 5% Extra
`;
  return `https://wa.me/919408494088?text=${encodeURIComponent(msg)}`;
}

