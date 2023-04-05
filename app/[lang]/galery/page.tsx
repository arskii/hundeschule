import PhotoCard from "./PhotoCard";

const List = [
  {
    id: 0,
    image: "/dog_gallery1.jpeg",
    title: "dog_gallery",
  },
  {
    id: 1,
    image: "/dog_gallery2.jpeg",
    title: "dog_gallery",
  },
  {
    id: 2,
    image: "/dog_gallery1.jpeg",
    title: "dog_gallery",
  },
  {
    id: 3,
    image: "/dog_gallery1.jpeg",
    title: "dog_gallery",
  },
  {
    id: 4,
    image: "/dog_gallery1.jpeg",
    title: "dog_gallery",
  },
  {
    id: 5,
    image: "/dog_gallery1.jpeg",
    title: "dog_gallery",
  },
];

const Galery = ({
  dictionary,
}: {
  dictionary: {
    galery: string;
  };
}) => {
  return (
    <section id="galery" className="py-10">
      <h2 className="font-serif font-bold uppercase xl:text-4xl lg:text-3xl">
        {dictionary.galery}
      </h2>
      <div className="container flex flex-wrap justify-between gap-y-14 mt-10">
        {List.map((item) => (
          <PhotoCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default Galery;
