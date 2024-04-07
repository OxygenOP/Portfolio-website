import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/src/ThemeProvider";
import { ThemeSwitcher } from "@/src/ToggleButton";
import Logo from "@/src/Logo";
import Link from "next/link";
import { Contact } from "lucide-react";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hassam Sohail - Full Stack Developer | Portfolio",
  description: `Welcome to my portfolio! I'm Hassam Sohail, a passionate full stack developer. Get ready to be inspired by my collection of innovative web applications, stunning designs, and efficient coding solutions. Feel free to reach out to me directly at info@hassamsohail.com or connect with me on Instagram @_hassamsohail for exciting collaborations and opportunities. Let's bring your ideas to life!`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {" "}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="bg-our-white dark:bg-our-black text-our-black dark:text-our-white min-h-screen md:h-screen w-screen flex flex-col items-center">
            <nav className="w-full  max-w-[1280px] h-[70px] px-[15px] md:px-[40px] py-[14px] flex justify-between items-center">
              <Link href={"/"} className="flex gap-x-[10px] items-center">
                {" "}
                <Logo
                  inside={{ className: "dark:fill-our-black fill-our-white" }}
                  className=" h-[30px] dark:fill-our-white fill-our-black scale-125 rounded-[100%] "
                />
                <p className=" font-medium text-base sm:text-lg">
                  {" "}
                  Hassam Sohail
                </p>
              </Link>
              <div className="flex gap-x-5">
                <Link
                  href="/schedule"
                  className="flex gap-x-2 py-2 font-medium dark:bg-our-white dark:text-our-black bg-our-black text-our-white rounded-3xl px-2 md:px-6"
                >
                  <Contact className="" />{" "}
                  <span className="hidden md:block">Contact</span>
                </Link>
                <ThemeSwitcher />
              </div>
            </nav>

            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
