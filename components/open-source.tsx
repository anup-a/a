import React from "react";
import List from "./list";

type Props = {};

const openSource = [
  {
    title: "mesh-gradient.js",
    subtitle: "A JS library to generate mesh gradient",
    src: "/mesh.png",
    className: "bg-fuchsia-100",
    link: "https://github.com/anup-a/mesh-gradient.js/",
  },
  {
    title: "medusa-plugin-stats",
    subtitle: "Awesome stats for your Medusa ecommerce",
    src: "/boxes.svg",
    className: "bg-purple-200",
    link: "https://github.com/anup-a/medusa-plugin-stats",
  },
  {
    title: "create-mini-preactails-app",
    subtitle: "Bootstrap a minimal preact and tailwind app",
    src: "/maze.svg",
    className: " bg-indigo-100",
    link: "https://github.com/anup-a/create-mini-preactails-app",
  },
];

const OpenSource = React.forwardRef((props: Props, ref: any) => {
  return <List heading="Open Source" data={openSource} ref={ref} />;
});

export default OpenSource;
