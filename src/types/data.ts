export type CategoryProps = {
  id: number;
  name: string;
  image: string;
};

export type ProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: CategoryProps;
  images: string[];
};

export type UserProps = {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
};
