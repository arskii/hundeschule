import Image from "next/image";

interface PhotoCardInterface {
  image: string;
  title: string;
}

const PhotoCard = ({ image, title }: PhotoCardInterface) => {
  return (
    <div className="flex flex-col w-96 h-96 border border-solid border-white items-center justify-center">
      <Image src={image} width={280} height={180} alt={title} />
    </div>
  );
};

export default PhotoCard;
