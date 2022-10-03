import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export function ProductForm() {
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (router.query.id) {
        await axios.put("/api/products/" + router.query.id, product);
        toast.success("Product updated successfully");
      } else {
        await axios.post("/api/products", product);
        toast.success("Product created successfully");
      }
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get("/api/products/" + router.query.id);
      setProduct(data);
    };

    if (router.query?.id) {
      getProduct(router.query.id);
    }
  }, []);

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
          value={product.name}
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          className="shadow border rounded py-2 px-2 text-gray-700"
          value={product.price}
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id=""
          rows="2"
          onChange={handleChange}
          className="shadow border rounded py-2 px-2 text-gray-700"
          value={product.description}
        />

        <button className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded focus:outline-none focus:shadow-outline fond-bolder text-white  ">
          {router.query.id ? "Update Product" : "Save Product"}
        </button>
      </form>
    </div>
  );
}
