import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export function ProductForm() {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/products", product);
    console.log(res);
    router.push("/");
  };

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          className="shadow border rounded py-2 px-2 text-gray-700"
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          className="shadow border rounded py-2 px-2 text-gray-700"
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id=""
          rows="2"
          onChange={handleChange}
          className="shadow border rounded py-2 px-2 text-gray-700"
        />

        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline fond-bolder text-white  ">
          Save Product
        </button>
      </form>
    </div>
  );
}
