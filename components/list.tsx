import React from "react";
import ListItem, { DataItem } from "./list-item";

type Props = {
  data: DataItem[];
  heading: string;
};

const List = (props: Props, ref: any) => {
  return (
    <section>
      <div className="flex items-center" data-aos="fade-right" ref={ref}>
        <h3 className="my-4 text-lg">{props.heading}</h3>
        <span
          className="flex-1 mx-6 bg-black dark:bg-slate-400"
          style={{ height: ".5px" }}
        ></span>
      </div>
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 md:grid-cols-3 gap-x-0 gap-y-8">
        {props.data.map((p, i) => (
          <ListItem {...p} aosDelay={(i + 1) * 50} key={p.link} />
        ))}
      </div>
    </section>
  );
};

export default React.forwardRef(List);
