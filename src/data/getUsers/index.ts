// https://api.escuelajs.co/api/v1/users

import { UserProps } from "@/types/data";

const getUsers = async (): Promise<UserProps[]> => {
  const url = ` https://api.escuelajs.co/api/v1/users`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("failed to fetch");
  }

  return await response.json();
};

export default getUsers;
