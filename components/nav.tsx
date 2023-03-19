import Link from "next/link";
import { Logo } from "./../assets/logo";

type Props = {
  projectsRef: any;
  enableBackground: boolean;
};

const Nav = (props: Props) => {
  return (
    <nav
      className={`flex items-center justify-between px-4 py-2 mt-4 ${
        props.enableBackground ? "bg-[#ffffff45] rounded-md " : ""
      }`}
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <a href="/" className="flex text-black" style={{ maxWidth: "2rem" }}>
        <Logo />
      </a>
      <div className="flex gap-4 text-sm font-normal text-black md:gap-6 md:text-md">
        <a href="https://github.com/anup-a">Projects</a>
        <Link href="/creatives" className="hidden sm:block">
          Creatives
        </Link>
        <a href="#" className="cursor-not-allowed">
          Blog
        </a>
        <a href="/#footer">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
