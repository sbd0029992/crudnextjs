import React from "react";
import { ProductForm } from "../components/ProductForm";
import axios from "axios";

function HomePage({ products }) {
  console.log(products);
  return (
    <div>
      <ProductForm />
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return {
    props: {
      products: products,
    },
  };
};

export default HomePage;
