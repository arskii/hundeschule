import Image from "next/image";

import { Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";
import MainButton from "./components/MainButton";
import SecondButton from "./components/SecondButton";
import Articles from "./articles/page";
import About from "./about/page";
import Price from "./price/page";
import Galery from "./galery/page";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="container mx-auto">
      <section className="flex justify-between items-center py-10">
        <div className="flex flex-col xl:w-96 lg:w-72 gap-y-5">
          <h1 className="font-serif font-bold uppercase xl:text-5xl lg:text-4xl">
            {dictionary["home"].h1}
          </h1>
          <p className=" text-left text-lg">{dictionary["home"].p}</p>
          <MainButton
            text={dictionary["home"]["main-button"]}
            link={`/${lang}/meeting`}
          />
          <SecondButton
            text={dictionary["home"]["secont-button"]}
            link={`/${lang}/form`}
          />
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
      <Articles dictionary={dictionary.titles} />
      <About dictionary={dictionary.titles} />
      <Price dictionary={dictionary.titles} />
      <Galery dictionary={dictionary.titles} />
    </div>
  );
}
