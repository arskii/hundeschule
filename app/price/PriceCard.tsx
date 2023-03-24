import Image from "next/image";
import SecondButton from "../components/SecondButton";

interface PriceCardInterface {
  title: string;
  image: string;
  cost: string;
  time: string;
  others: string;
}

const PriceCard = ({
  title,
  image,
  cost,
  time,
  others,
}: PriceCardInterface) => {
  return (
    <div className="flex w-full h-50 border border-solid p-5 justify-between items-start my-12">
      <div className="flex">
        <div>
          <Image src={`${image}`} width={295} height={210} alt={`${title}`} />
        </div>
        <div className="flex flex-col mx-20 justify-between uppercase font-serif">
          <p className="font-bold text-xl">{title}</p>
          <div className="flex flex-col gap-5">
            <p>{time}</p>
            <p>{cost}</p>
            <p>{others}</p>
          </div>
        </div>
      </div>
      <SecondButton text="Anfrage" />
    </div>
  );
};

export default PriceCard;
