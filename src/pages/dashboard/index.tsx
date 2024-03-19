import DashboardLayout from "@/components/dashboard/layout";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { type ReactElement } from "react";
import React from "react";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    void router.push("/dashboard/tickets");
  }, [router]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-4 text-3xl font-bold">Dashboard</h1>
      <p className="mb-8 text-center text-lg text-gray-500">
        Welcome to your dashboard!
      </p>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
