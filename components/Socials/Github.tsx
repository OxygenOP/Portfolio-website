import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

function GithubIcon() {
  return (
    <>
      <Link href="https://github.com/OxygenOP" target="_blank">
        <div className="flex gap-5">
          <Github size={24} />
          <div className="hover:underline">@OxygenOP</div>
        </div>
      </Link>
    </>
  );
}

export default GithubIcon;
