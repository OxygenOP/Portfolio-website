import React from "react";
import { Form } from "./form";
import Image from "next/image";

export default function Page(props) {
  return (
    <>
      <div className="w-full h-full max-w-[1280px] pt-20 px-[15px] md:pl-[40px] ">
        <div className=" text-2xl font-medium"> Contact Me</div>
        <div className="flex items-end gap-x-4">
          <div className="w-full lg:w-1/2 ">
            <Form />
          </div>
          <div className="hidden w-0 lg:block md:w-1/2 pr-8">
            <Image
              src="/2.jpg"
              width="900"
              height="700"
              alt=""
              className=" w-full h-[450px] object-cover object-center rounded-md
               shadow-lg "
            />
          </div>
        </div>
      </div>
    </>
  );
}
