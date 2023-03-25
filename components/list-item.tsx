import Image from "next/image";
import { Arrow } from "./../assets/arrow";

export type DataItem = {
  title: string;
  subtitle: string;
  src: string;
  link: string;
  className: string;
};

type Props = DataItem & {
  aosDelay?: number;
};

const ListItem = (props: Props) => {
  return (
    <div
      className="mx-6 group"
      data-aos-delay={props.aosDelay}
      data-aos="fade-up"
    >
      <div
        className={`rounded-md pt-12 px-8 overflow-hidden transition-all hover:bg-gradient-to-b hover:from-slate-700 hover:to-transparent ${props.className}`}
      >
        <Image
          src={props.src}
          width={250}
          height={300}
          alt={`${props.title} image`}
          className="mx-auto transition-transform shadow-lg rounded-t-md group-hover:scale-110"
        />
      </div>
      <a
        className="flex items-center justify-between mt-6 hover:cursor-pointer"
        href={props.link}
      >
        <h5 className="font-bold text-slate-600 dark:text-slate-200 text-md">
          {props.title}
        </h5>
        <p className="mr-2 dark:text-slate-600">
          <Arrow />
        </p>
      </a>
      <p className="mt-2 font-normal text-md text-slate-500">
        {props.subtitle}
      </p>
    </div>
  );
};

export default ListItem;
