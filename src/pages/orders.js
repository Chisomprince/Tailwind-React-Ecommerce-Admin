import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import OrderTable from "../components/tables/orderTable";

export default function Orders() {
  return (
    <div>
      <Layout>
        <Header title="Add Order" link="/orders" />
        <OrderTable />
      </Layout>
    </div>
  );
}
