import React, { useEffect } from "react";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Dashboard from "@/components/Dashboard/Dashboard";

const DashboardRoute = () => {
  const router = useRouter();
  const { data } = useSession();
  const user = data?.user;

  useEffect(() => {
    if (!user) router.push("/");
  }, [user, router]);

  return user && <Dashboard />;
};

export default DashboardRoute;
