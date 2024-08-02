// https://api.escuelajs.co/api/v1/products/?title=Generic&price_min=900&price_max=1000&categoryId=1

import { ProductProps } from "@/types/data";

const getProductsByFilter = async (
  title: string = "",
  price: number = 0,
  price_min: number = 0,
  price_max: number = 0,
): Promise<ProductProps[]> => {
  const params = new URLSearchParams();

  if (title) params.append("title", title);
  if (price !== 0) params.append("price", price.toString());
  if (price_min !== 0) params.append("price_min", price_min.toString());
  if (price_max !== 0) params.append("price_max", price_max.toString());

  console.log(params.toString());

  const url = `https://api.escuelajs.co/api/v1/products/?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  return await response.json();
};

export default getProductsByFilter;
