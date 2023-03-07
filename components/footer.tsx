import { useEffect } from "react";
import { Github } from "./../assets/logo-github";
import { Instagram } from "./../assets/logo-instagram";
import { Linkedin } from "./../assets/logo-linkedin";
import { Twitter } from "./../assets/logo-twitter";
import AOS from "aos";

type Props = {};

const Footer = (props: Props) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <section
      style={{ borderWidth: 1 }}
      className="w-full p-4 mx-6 ml-8 border-2 rounded-md border-slate-300 bg-gradient-to-br from-white to-slate-300"
    >
      <footer className="px-4 pb-4">
        <h3 className="my-4 text-2xl font-bold">
          Open to new <span>full-stack opportunity</span>
        </h3>
        <h6 className="pt-4 text-slate-600">
          Feel free to reach out if you have (or know) any full stack
          opportunity for me or just say hi!
        </h6>
        <a
          href="mailto:aglawe.anup22@gmail.com"
          className="mb-4 text-slate-600"
        >
          aglawe.anup22@gmail.com
        </a>
        <div className="flex items-center gap-2 mt-12">
          <a
            href="mailto:aglawe.anup22@gmail.com"
            className="px-4 py-2 text-sm text-white rounded-md bg-slate-800"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/anup-aglawe-8488aa1a5/"
            target="_blank"
            className="p-2 ml-4 rounded-full w-9 h-9"
          >
            <Linkedin />
          </a>

          <a
            href="https://twitter.com/abscubix"
            target="_blank"
            className="p-2 rounded-full w-9 h-9"
          >
            <Twitter />
          </a>

          <a
            href="https://github.com/anup-a"
            target="_blank"
            className="p-2 rounded-full w-9 h-9"
          >
            <Github />
          </a>

          <a
            href="https://www.instagram.com/uxie.io/"
            target="_blank"
            className="p-2 rounded-full w-9 h-9"
          >
            <Instagram />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
