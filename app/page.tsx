import Project from "@/components/Project/Project";
import { projects } from "@/constants/projects";
import InstagramIcon from "@/components/Socials/Instagram";
import GithubIcon from "@/components/Socials/Github";
import EmailIcon from "@/components/Socials/Email";

export default function Home() {
  return (
    <div className="h-full w-full max-w-[1280px]  min-h-[600px]  flex justify-center md:items-center  pl-[40px]  pr-[40px] flex-wrap  lg:flex-nowrap pb-20">
      <div className=" mb-24 md:mb-0 lg:mb-24 mt-24 w-full lg:w-[55%] lg:max-h-[400px] lg:h-full flex flex-col justify-start">
        <h1 className=" text-[38px] leading-[39px] mb-[16px]">Hassam Sohail</h1>
        <h3 className="text-[20px]|"> Full Stack Web Developer</h3>
        <Socials />
      </div>

      <div className=" w-full flex flex-col md:flex-row gap-[40px] ">
        {projects.map((item, index) => (
          <>
            {" "}
            {!item.disabled && (
              <Project
                url={item.url}
                image={item.image}
                alt={item.alt}
                scale={item.scale ? item.scale : false}
              >
                {item.name}
              </Project>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

function Socials() {
  return (
    <>
      <div className="flex flex-col gap-y-[25px] mt-[30px]">
        <GithubIcon />
        <InstagramIcon />
        <EmailIcon />
      </div>
    </>
  );
}
