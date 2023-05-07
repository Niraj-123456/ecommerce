import React from "react";
import ProductDetail from "@/components/Products/ProductDetail";
import { GetServerSideProps } from "next";
import { getProductById } from "@/pages/api/products/products";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id;
  const productDetail = await getProductById(id);

  return {
    props: {
      productDetail,
    },
  };
};

const ProductDetailPage = ({ productDetail }: any) => {
  return <ProductDetail productDetail={productDetail} />;
};

export default ProductDetailPage;
