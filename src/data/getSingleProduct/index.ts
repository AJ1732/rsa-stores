import { ProductProps } from "@/types/data";

const getSingleProduct = async (id: number): Promise<ProductProps> => {
  const url = `https://api.escuelajs.co/api/v1/products/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  return await response.json();
};

export default getSingleProduct;
