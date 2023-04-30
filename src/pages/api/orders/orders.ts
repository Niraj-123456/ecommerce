export const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return await res;
};
