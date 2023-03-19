import Link from "next/link";
import Background from "../components/background";
import Content from "../components/content";
import Footer from "../components/footer";
import Nav from "../components/nav";
import OpenSource from "../components/open-source";
import Projects from "../components/projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

export default function IndexPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const projectsRef = useRef(null);

  return (
    <main>
      <Background />
      <section
        className="relative flex flex-col items-center w-4/5 mx-auto md:p-0 md:w-3/4"
        style={{ gap: "80px" }}
      >
        <div className="flex flex-col w-full md:w-3/4">
          <Nav projectsRef={projectsRef} enableBackground={false} />
          <span
            className="w-full my-6 bg-slate-500"
            style={{ height: ".5px" }}
          ></span>
        </div>
        <Content />
        <Projects />
        <OpenSource />
        <Footer />
      </section>
      <div
        id="footer"
        className="flex justify-center mt-6 mb-4 text-sm"
        ref={projectsRef}
      >
        © 2023 Anup. All Rights reserved
      </div>
    </main>
  );
}
