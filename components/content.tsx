import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type Props = {};

const Content = (props: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="flex flex-col items-center">
      <div data-aos="fade-up" data-aos-duration="1000">
        <div className="lines"></div>
        <Image
          src="/112-a.png"
          alt="Anup image"
          width={160}
          height={160}
          className="rounded-lg "
          style={{
            aspectRatio: "1/1",
            borderRadius: "10px",
          }}
        />
      </div>
      <h1
        className="flex mt-12 text-xl text-slate-600"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <div className="mr-2">I'm Anup &#8212; a </div>
        <div className="relative inline-flex mr-2 overflow-hidden font-bold">
          <span className="w-full opacity-0 select-none">
            Full Stack web developer
          </span>
          <ul
            className="absolute bottom-0 left-0 "
            style={{ animation: "rotater 6s infinite", animationDelay: "1.5s" }}
          >
            <li>Software Engineer</li>
            <li>Full Stack web developer</li>
            <li>Open Source Developer</li>
            <li>Software Engineer</li>
          </ul>
        </div>
      </h1>
      <h3
        className="mt-4 text-lg font-normal text-slate-500"
        data-aos="fade-up"
        data-aos-delay="400"
        data-aos-duration="1000"
      >
        Current working at Goldman Sachs, where I build awesome web applications
        for trading.
      </h3>
    </section>
  );
};

export default Content;
