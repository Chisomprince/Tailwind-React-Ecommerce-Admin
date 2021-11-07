import React, { useState } from "react";
import Layout from "../components/layout";
import CustomerTable from "../components/customers/customerTable";
import CustomersHeader from "../components/customers/customerHeader";

export default function Customers() {
  return (
    <div>
      <Layout>
        <CustomersHeader />
        <CustomerTable />
      </Layout>
    </div>
  );
}
