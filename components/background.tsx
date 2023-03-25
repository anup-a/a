import React from "react";

type Props = {};

const Background = (props: Props) => {
  return (
    <img
      className="absolute top-0 left-0 block object-fill object-center w-full h-full pointer-events-none select-none"
      src="/1600-n.png"
      alt="Background gradient image"
      srcSet="/512-n.png 512w, /1024-n.png 1024w, /1600-n.png 1600w"
      sizes="100vw"
      style={{ imageRendering: "auto", backgroundSize: "100% 100%" }}
    />
  );
};

export default Background;
