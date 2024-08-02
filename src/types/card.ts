import { StaticImageData } from "next/image";

type CardProps = {
  src?: StaticImageData
  title: string;
  description?: string;
  content?: number | React.ReactNode;
  footer?: string | React.ReactNode;
  className?: string;
}

export type CartCardProps = Omit<CardProps, "footer" | "className"> ;
export type ProductCardProps = Omit<CardProps, "footer" | "className">;