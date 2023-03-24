import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CardArticleInterface {
  image: string;
  title: string;
  text: string;
}

const CardArticle = ({ image, title, text }: CardArticleInterface) => {
  return (
    <div className="flex flex-col gap-y-5 my-10 max-w-lg">
      <div className="relative">
        <Image src={image} width={512} height={340} alt={"State dog"}></Image>
      </div>
      <div className="flex flex-col gap-y-5">
        <h3 className="font-bold font-serif uppercase text-xl">{title}</h3>
        <p className=" font-sans text-left text-lg">{text}</p>
        <h3 className=" text-white font-bold font-serif uppercase">
          <Link href="/">weiter lesen</Link>
        </h3>
      </div>
    </div>
  );
};

export default CardArticle;
