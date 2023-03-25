import Link from "next/link";
import { spectral } from "../utils/fonts";
import { Logo } from "./../assets/logo";
import ThemeSwitch from "./theme-switch";

type Props = {
  projectsRef: any;
  enableBackground: boolean;
};

const Nav = (props: Props) => {
  return (
    <nav
      className={`flex items-center justify-between px-8 py-2 mt-4 ${
        spectral.className
      } ${
        props.enableBackground
          ? "bg-[#ffffff20] dark:bg-[#00000045] rounded-md "
          : ""
      }`}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <a
        href="/"
        className="flex text-black dark:text-gray-200 hover:bg-[#00000016] dark:hover:bg-[#ffffff16] px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-700"
        style={{ maxWidth: "3.5rem" }}
      >
        <Logo />
      </a>
      <div className="flex items-center font-normal text-black dark:text-gray-200 text-md md:text-md">
        <Link
          href="https://github.com/anup-a"
          target="blank"
          className="hover:bg-[#00000016] transition-all duration-700 py-2 px-4 dark:hover:bg-[#ffffff16] rounded-md focus:outline-none focus:ring-1 focus:ring-slate-700"
        >
          Github
        </Link>
        <Link
          href="/creatives"
          className="hidden sm:block transition-all duration-700 hover:bg-[#00000016] dark:hover:bg-[#ffffff16] py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-700"
        >
          Creatives
        </Link>
        <Link
          href="https://github.com/anup-a/anup-a/blob/main/resume.pdf"
          className="sm:block transition-all duration-700 hover:bg-[#00000016] dark:hover:bg-[#ffffff16] py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-700"
          target="blank"
        >
          Resume
        </Link>
        <Link
          className="hover:bg-[#00000016] transition-all duration-700 py-2 px-4 dark:hover:bg-[#ffffff16] rounded-md focus:outline-none focus:ring-1 focus:ring-slate-700"
          href="/#footer"
        >
          Contact
        </Link>
        <ThemeSwitch />
      </div>
    </nav>
  );
};

export default Nav;
