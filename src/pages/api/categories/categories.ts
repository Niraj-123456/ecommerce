export async function fetchAllCategories() {
  const res = await fetch(`https://fakestoreapi.com/products/categories`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return await res;
}
