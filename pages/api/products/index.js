import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);
    case "POST":
      return saveProduct(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const getProducts = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM product");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const saveProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const [result] = await pool.query("INSERT INTO product SET ?", {
      name,
      description,
      price,
    });

    return res
      .status(200)
      .json({ name, description, price, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
