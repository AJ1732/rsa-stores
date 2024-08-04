"use client";
import Link from "next/link";
import { Button } from "@/components";

const ErrorPage = ({ message }: { message: string }) => {
  return (
    <div className="mx-auto flex size-full items-center justify-between gap-10 lg:py-16 max-lg:flex-col-reverse lg:pb-5">
      <div className="flex flex-col w-full gap-4">
        <h3 className={`font-integral text-5xl mb-10 font-extrabold lg:text-7xl`}>
          Oops...
        </h3>

        <p className="text-lg lg:text-xl">
          Something went wrong, <br />
          {message} <br /> <br />
        </p>

        <Link href="/" className="size-full">
          <Button label="Go Home" className="py-6 text-lg" />
        </Link>
      </div>

      <div></div>
    </div>
  );
};
export default ErrorPage;
