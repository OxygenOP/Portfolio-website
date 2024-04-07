import { Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

function InstagramIcon() {
  return (
    <Link href="https://www.instagram.com/_hassamsohail/" target="_blank">
      {" "}
      <div className="flex gap-5">
        <Instagram size={24} />
        <div className="hover:underline">@_hassamsohail</div>
      </div>
    </Link>
  );
}

export default InstagramIcon;
