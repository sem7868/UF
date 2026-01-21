export function getPriceByQty(slabs, qty) {
  return slabs.find(
    s => qty >= s.min && (s.max === null || qty <= s.max)
  )?.price || slabs[0].price;
}

