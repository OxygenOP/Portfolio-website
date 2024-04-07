import Link from "next/link";
import React, { ReactElement, ReactHTMLElement } from "react";
import Image from "next/image";

function Project({
  url,
  children,
  image,
  alt = "",
  scale = false,
}: {
  url: string;
  children: React.ReactNode;
  image: string;
  alt?: string;
  scale?: boolean;
}) {
  return (
    <div className="max-h-[300px] sm:max-h-[400px] group rounded-md border-2 border-our-black dark:border-our-white w-full  overflow-hidden relative cursor-pointer">
      <Link href={url} target="_blank">
        {" "}
        <div className="absolute z-40 h-full w-full bg-our-black bg-opacity-75 text-our-white flex lg:hidden lg:group-hover:flex justify-center items-center">
          <p className="text-[20px]"> {children} </p>
        </div>
        <Image
          src={image}
          width={1000}
          height={10000}
          className={`w-full h-full object-cover object-top ${
            scale ? " scale-150 translate-y-[24%] " : " "
          } transition-transform`}
          alt={alt}
        />
      </Link>
    </div>
  );
}

export default Project;
