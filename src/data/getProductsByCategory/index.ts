import { ProductProps } from "@/types/data";

const getProductsByCategory = async (id: number): Promise<ProductProps[]> => {
  const url = `https://api.escuelajs.co/api/v1/categories/${id}/products`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  return await response.json();
};

export default getProductsByCategory;
