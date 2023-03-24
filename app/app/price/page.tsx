import Image from "next/image";

import PriceCard from "./PriceCard";

const List = [
  {
    id: 0,
    image: "/cardprice_img1.png",
    title: "Einzeltraining",
    time: "60 Min.",
    cost: "Jede weitere 15 min. + 15 €zzgl.",
    others: " Anfahrt (siehe unten)",
  },
  {
    id: 1,
    image: "/cardprice_img1.png",
    title: "Paket Einzeltraining 5 x 60 Min.",
    time: "60 Min.",
    cost: "Jede weitere 15 min. + 15 €zzgl.",
    others: " Anfahrt (siehe unten)",
  },
  {
    id: 2,
    image: "/cardprice_img1.png",
    title: "Tandemtraining",
    time: "60 Min.",
    cost: "Jede weitere 15 min. + 15 €zzgl.",
    others: " Anfahrt (siehe unten)",
  },
];

const Price = () => {
  return (
    <section id="price" className="py-10">
      <h2 className="font-serif font-bold uppercase xl:text-4xl lg:text-3xl">
        Preisübersicht
      </h2>
      <h3 className="font-serif uppercase xl:text-xl">
        Einzeltraining / Beratung
      </h3>
      {List.map((item) => (
        <PriceCard
          key={item.id}
          image={item.image}
          title={item.title}
          time={item.time}
          cost={item.cost}
          others={item.others}
        />
      ))}
      <Image
        className="mt-18"
        src="/foots.svg"
        width={400}
        height={230}
        alt="foots"
      ></Image>
    </section>
  );
};

export default Price;
