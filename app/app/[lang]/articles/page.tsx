import Image from "next/image";
import CardArticle from "./CardArticle";

const List = [
  {
    id: 0,
    image: "/article_dog1.jpeg",
    title: "Welpenerziehung",
    description:
      "Wir erzählen und zeigen das Wichtigste über Welpen: wie man kommuniziert, was, wann und wie unterrichtet, wie man füttert und das Haus ausstattet.",
  },
  {
    id: 1,
    image: "/article_dog2.jpeg",
    title: "Wie man einem Hund beibringt, allein zu Hause zu bleiben ",
    description:
      "Macht sich der Hund Sorgen, zerstört er das Haus, pinkelt oder bellt er, wenn Sie gehen? Oder haben Sie einen Welpen, den Sie vor möglichen Problemen schützen möchten?",
  },
  {
    id: 2,
    image: "/article_dog3.jpeg",
    title: "Wie man einen Hund vom Bellen abhält",
    description:
      "Es ist notwendig, das Problem des übermäßigen Hundebellens unabhängig von seiner Art zu lösen.",
  },
  {
    id: 3,
    image: "/article_dog4.png",
    title: "So lernen Sie, die Krallen Ihres Hundes zu schneiden",
    description:
      "Helfen Sie bei der Auswahl des richtigen Werkzeugs und finden Sie heraus, wie oft Ihr Hund seine Krallen schneiden muss.",
  },
];

const Articles = ({
  dictionary,
}: {
  dictionary: {
    articles: string;
  };
}) => {
  return (
    <section id="articles" className=" py-10">
      <h2 className="font-serif font-bold uppercase xl:text-4xl lg:text-3xl">
        {dictionary.articles}
      </h2>
      <div className="container flex flex-wrap px-16 justify-between">
        {List.map((item) => (
          <CardArticle
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
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
