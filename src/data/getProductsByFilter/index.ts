import { ProductProps, ProductFilterProps } from "@/types/data";

const getProductsByFilter = async ({
  title = "",
  price,
  price_min,
  price_max,
  offset,
  limit,
  categoryId,
}: ProductFilterProps = {}): Promise<ProductProps[]> => {
  const params = new URLSearchParams();

  if (title) params.append("title", title);
  if (price !== undefined) params.append("price", price.toString());
  if (price_min !== undefined) params.append("price_min", price_min.toString());
  if (price_max !== undefined) params.append("price_max", price_max.toString());
  if (offset !== undefined) params.append("offset", offset.toString());
  if (limit !== undefined) params.append("limit", limit.toString());
  if (categoryId !== undefined) params.append("categoryId", categoryId.toString());

  const url = `https://api.escuelajs.co/api/v1/products/?${params.toString()}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  return await response.json();
};

export default getProductsByFilter;
