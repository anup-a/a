import React from "react";

type Props = {};

const Background = (props: Props) => {
  return (
    <img
      className="absolute top-0 left-0 block object-fill object-center w-full h-full pointer-events-none select-none"
      src="https://framerusercontent.com/images/P9LGrc34PeSpMrCX3YzWJFZQSyY.jpg"
      alt="Background gradient image"
      srcSet="https://framerusercontent.com/images/P9LGrc34PeSpMrCX3YzWJFZQSyY.jpg?scale-down-to=512 512w, https://framerusercontent.com/images/P9LGrc34PeSpMrCX3YzWJFZQSyY.jpg?scale-down-to=1024 1024w, https://framerusercontent.com/images/P9LGrc34PeSpMrCX3YzWJFZQSyY.jpg 1600w"
      sizes="100vw"
      style={{ imageRendering: "auto" }}
    />
  );
};

export default Background;
