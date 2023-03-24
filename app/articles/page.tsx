import Image from "next/image";
import CardArticle from "./CardArticle";

const List = [
  {
    id: 0,
    image: "/article_dog1.jpeg",
    title: "Welpenerziehung",
    text: "Wir erzählen und zeigen das Wichtigste über Welpen: wie man kommuniziert, was, wann und wie unterrichtet, wie man füttert und das Haus ausstattet.",
  },
  {
    id: 1,
    image: "/article_dog2.jpeg",
    title: "Wie man einem Hund beibringt, allein zu Hause zu bleiben ",
    text: "Macht sich der Hund Sorgen, zerstört er das Haus, pinkelt oder bellt er, wenn Sie gehen? Oder haben Sie einen Welpen, den Sie vor möglichen Problemen schützen möchten?",
  },
  {
    id: 2,
    image: "/article_dog3.jpeg",
    title: "Wie man einen Hund vom Bellen abhält",
    text: "Es ist notwendig, das Problem des übermäßigen Hundebellens unabhängig von seiner Art zu lösen.",
  },
  {
    id: 3,
    image: "/article_dog4.png",
    title: "So lernen Sie, die Krallen Ihres Hundes zu schneiden",
    text: "Helfen Sie bei der Auswahl des richtigen Werkzeugs und finden Sie heraus, wie oft Ihr Hund seine Krallen schneiden muss.",
  },
];

const Articles = () => {
  return (
    <section id="articles" className=" py-10">
      <h2 className="font-serif font-bold uppercase xl:text-4xl lg:text-3xl">
        Wichtiges über Hunde
      </h2>
      <div className="container flex flex-wrap px-16 justify-between">
        {List.map((item) => (
          <CardArticle
            key={item.id}
            image={item.image}
            title={item.title}
            text={item.text}
          />
        ))}
        <Image
          className="mt-18"
          src="/foots.svg"
          width={400}
          height={230}
          alt="foots"
        ></Image>
      </div>
    </section>
  );
};

export default Articles;
