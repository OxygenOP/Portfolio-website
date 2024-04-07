import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

function EmailIcon() {
  return (
    <Link href="mailto:hassamsohail86@gmail.com" target="_blank">
      <div className="flex gap-5">
        <Mail size={24} />{" "}
        <div className="hover:underline">hassamsohail86@gmail.com</div>
      </div>
    </Link>
  );
}

export default EmailIcon;
