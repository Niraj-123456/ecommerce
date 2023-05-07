import React from "react";
import Categories from "@/components/Categories/Categories";
import { GetServerSideProps } from "next";
import { fetchAllCategories } from "../api/categories/categories";

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchAllCategories();
  return {
    props: {
      categories: data,
    },
  };
};

const CategoryPage = ({ categories }: any) => {
  return <Categories categories={categories} />;
};

export default CategoryPage;
