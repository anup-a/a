import React, { useRef } from "react";
import Background from "../components/background";
import Nav from "../components/nav";

type Props = {};

const Creatives = (props: Props) => {
  const projectsRef = useRef(null);

  return (
    <main>
      <Background />
      <section
        className="relative flex flex-col items-center w-4/5 mx-auto md:p-0"
        style={{ gap: "90px" }}
      >
        <div className="flex flex-col w-full md:w-3/4">
          <Nav projectsRef={projectsRef} enableBackground={true} />
          <span
            className="w-full my-6 bg-slate-500"
            style={{ height: ".5px" }}
          ></span>
        </div>
      </section>

      <section className="relative flex flex-col items-center justify-center w-3/5 mx-auto">
        <div className="flex w-full" data-aos="fade-right">
          <h3 className="my-4 mt-12 text-lg font-bold dark:text-slate-200">
            UI Snippets
          </h3>
        </div>
        <div className="w-full mt-8">
          <div className="mb-4">
            <h2 className="inline mb-6 font-normal text-slate-800 dark:text-slate-400">
              Word Rotater
            </h2>
            <div className="inline float-right">
              <span className="h-6 px-2 py-1 ml-2 text-xs rounded-md bg-[#ffffff45] dark:bg-[#00000045]">
                React
              </span>
              <span className="h-6 px-2 py-1 ml-2 text-xs rounded-md bg-[#ffffff45] dark:bg-[#00000045]">
                Tailwind CSS
              </span>
              <span className="h-6 px-2 py-1 ml-2 text-xs rounded-md bg-[#ffffff45] dark:bg-[#00000045]">
                Animation
              </span>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg dark:bg-slate-800">
            <div className="flex gap-2 p-4 rounded-t-lg bg-slate-800 dark:bg-slate-900">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 rounded-full bg-amber-300"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>

            <div className="p-10 min-h-[250px] flex justify-center items-center">
              <h1
                className="flex text-xl text-slate-600 dark:text-slate-300"
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
                    style={{
                      animation: "rotater 6s infinite",
                      animationDelay: "1.5s",
                    }}
                  >
                    <li>Software Engineer</li>
                    <li>Full Stack web developer</li>
                    <li>Open Source Developer</li>
                    <li>Software Engineer</li>
                  </ul>
                </div>
              </h1>
            </div>
          </div>
          <div className="flex items-center mt-8 ml-2">
            <button
              className="px-6 py-2 text-xs border-2 rounded-md text-slate-800 dark:text-slate-300 border-slate-800 dark:border-slate-300"
              style={{ borderWidth: "1px" }}
            >
              Code <span className="ml-1"> &#8594;</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Creatives;
