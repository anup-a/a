import { Logo } from "./../assets/logo";

type Props = {
  projectsRef: any;
};

const Nav = (props: Props) => {
  return (
    <nav
      className="flex items-center justify-between px-4 mt-4"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <a href="/" className="flex text-black" style={{ maxWidth: "2rem" }}>
        <Logo />
      </a>
      <div className="flex gap-4 text-sm font-normal text-black md:gap-6 md:text-md">
        <a href="https://github.com/anup-a">Projects</a>
        <a href="#" className="cursor-not-allowed">
          Creatives
        </a>
        <a href="#" className="cursor-not-allowed">
          Blog
        </a>
        <a href="/#footer">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
