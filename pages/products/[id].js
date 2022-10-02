import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";

function ProductView({ product }) {
  const router = useRouter();
  const handlerDelete = async (id) => {
    await axios.delete("/api/products/" + id);
    router.push("/");
  };
  return (
    <Layout>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button
        onClick={() => handlerDelete(product.id)}
        className="bg-red-50 0 px-3 py-2 text-white hover:bg-red-700"
      >
        delete
      </button>
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  const { data: product } = await axios.get(
    `http://localhost:3000/api/products/` + context.query.id
  );

  return {
    props: {
      product,
    },
  };
};

export default ProductView;
