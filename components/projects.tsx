import React from "react";
import List from "./list";

type Props = {};

const projects = [
  {
    title: "SVG wave",
    subtitle: "Generate SVG waves for your next Project",
    src: "/svgwave.png",
    className: "bg-slate-300",
    link: "https://svgwave.in",
  },
  {
    title: "Mesh Gradient",
    subtitle: "Discover and create awesome mesh gradients",
    src: "/meshgradient.png",
    className: "bg-emerald-200",
    link: "https://meshgradient.in",
  },
  {
    title: "Tinter",
    subtitle: "Create pixel perfect image hue variations",
    src: "/tinter.png",
    className: " bg-amber-200",
    link: "https://tinter.uxie.io",
  },
  {
    title: "Uxie",
    subtitle: "A No code Design suite for developers (Private Beta)",
    src: "/uxie.png",
    className: " bg-lime-200",
    link: "https://uxie.io",
  },
];

const Projects = React.forwardRef((props: Props, ref: any) => {
  return <List data={projects} heading="Projects" ref={ref} />;
});

export default Projects;
