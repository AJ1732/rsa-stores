import { StaticImageData } from "next/image";

type CardProps = {
  src?: StaticImageData
  title: string;
  description?: string;
  content?: string | React.ReactNode;
  footer?: string | React.ReactNode;
  className?: string;
}

export type CartCardProps = Omit<CardProps, "footer"> & {
  price?: number;
};;
export type ProductCardProps = Omit<CardProps, "footer"> & {
  price?: number;
};;