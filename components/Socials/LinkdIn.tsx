import { LinkedinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function LinkdInIcon() {
  return (
    <Link
      href="www.linkedin.com/in/
  hassam-sohail"
      target="_blank"
    >
      <div className="flex gap-5">
        <LinkedinIcon size={24} />{" "}
        <div className="hover:underline">Hassam Sohail</div>
      </div>
    </Link>
  );
}

export default LinkdInIcon;
