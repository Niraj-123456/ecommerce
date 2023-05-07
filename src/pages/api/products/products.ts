export async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return await res;
}

export async function getProductById(id: string | string[] | undefined) {
  if (id === undefined) return;
  const res = fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
    res.json()
  );
  return await res;
}
