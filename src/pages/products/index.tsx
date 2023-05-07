import React from "react";
import { GetServerSideProps } from "next";

import Products from "@/components/Products/Products";
import { getAllProducts } from "../api/products/products";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getAllProducts();
  return {
    props: {
      products: data,
    },
  };
};

const ProductsPage = ({ products }: any) => {
  return <Products products={products} />;
};

export default ProductsPage;
