import React from "react";
import { useRouter } from "next/router";

const OrderDetailRoute = () => {
  const router = useRouter();
  console.log("id", router.query.id);
  return <div>this is Order deTAIL with id {router.query.id}</div>;
};

export default OrderDetailRoute;
