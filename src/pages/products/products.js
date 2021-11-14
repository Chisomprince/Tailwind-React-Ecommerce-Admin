import React from "react";
import Header from "../../components/header";
import Layout from "../../components/layout";
import ProductTable from "../../components/tables/productTable";

export default function Products() {
  return (
    <div>
      <Layout>
        <Header link="/products/add-product" title="Add Product" />
        <ProductTable />
      </Layout>
    </div>
  );
}
