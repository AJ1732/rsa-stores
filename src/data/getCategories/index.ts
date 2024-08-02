import { CategoryProps } from "@/types/data";

const getCategories = async (): Promise<CategoryProps[]> => {
  const url = `https://api.escuelajs.co/api/v1/categories`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  return await response.json();
};

export default getCategories;
