import React from "react";
import { GetServerSideProps } from "next";

import Orders from "@/components/Orders/Orders";
import { fetchProducts } from "../api/orders/orders";

type Order = {
  id: string;
  title: string;
  category: string;
  description: string;
  price: string;
  image: string;
  rating: {
    rate: number;
  };
};

type OrdersProps = {
  orders: Order[];
};

const OrderPage = ({ orders }: OrdersProps) => {
  return <Orders orders={orders} />;
};

export default OrderPage;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await fetchProducts();
  return {
    props: { orders: data },
  };
};
