import Image from "next/image";

import MainButton from "./components/MainButton";
import SecondButton from "./components/SecondButton";
import Articles from "./articles/page";
import About from "./about/page";
import Price from "./price/page";
import Galery from "./galery/page";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <section className="flex justify-between items-center py-10">
          <div className="flex flex-col xl:w-96 lg:w-72 gap-y-5">
            <h1 className="font-serif font-bold uppercase xl:text-5xl lg:text-4xl">
              HUNDEERZIEHUNG
            </h1>
            <p className=" text-left text-lg">
              Wir schulen Besitzer darin, Hunde so zu erziehen, dass das
              Zusammenleben mit einem Haustier angenehm ist.
            </p>
            <MainButton text="Online termin" />
            <SecondButton text="Beratungsfragebogen" />
            <Image
              className="mt-18"
              src="/foots.svg"
              width={400}
              height={230}
              alt="foots"
            ></Image>
          </div>
          <div className=" relative">
            <Image
              src="/zyro-image.png"
              width={650}
              height={700}
              alt={"Main dog"}
            ></Image>
          </div>
        </section>
        <Articles />
        <About />
        <Price />
        <Galery />
      </div>
    </>
  );
}
