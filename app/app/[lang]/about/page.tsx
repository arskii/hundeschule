import Link from "next/link";
import Image from "next/image";
import AboutCard from "./AboutCard";

const About = ({
  dictionary,
}: {
  dictionary: {
    about: string;
  };
}) => {
  return (
    <section id="about" className="py-10">
      <h2 className="font-serif font-bold uppercase xl:text-4xl lg:text-3xl">
        {dictionary.about}
      </h2>
      <div className="container flex px-16 my-10 justify-between">
        <div className="flex">
          <Image src="/about.jpg" width={460} height={550} alt="about"></Image>
        </div>
        <div className="flex leading-7 font-serif flex-col max-w-lg justify-between">
          <p>
            <span className="font-bold">
              Herzlich Willkommen lieber Hundefreund,
            </span>
          </p>
          <p>
            ein Hund ist etwas ganz Besonderes. Er kann bester Freund,
            Seelenverwandter, Sportpartner und noch so vieles mehr sein. Was ist
            er für dich?
          </p>
          So einzigartig jeder einzelne Hund ist, so einzigartig ist auch jede
          Beziehung zwischen Hund und Mensch. Um dir und deinem Hund gerecht zu
          werden, arbeite ich deshalb in meiner Hundeschule Hannover.
          <p>
            Ich freue mich auf dich und deine tierische Begleitung in meiner
            Hundeschule Hannover!{" "}
          </p>
          Dein Hunde
          <p>Coach Nataliya</p>
          <h3 className="font-bold text-lg uppercase mt-10">
            <Link href="/">e-mail: Nataliya & benito.com</Link>
          </h3>
          <h3 className="font-bold text-lg uppercase">
            <Link href="/">mobil: 0151 - 291 60 434</Link>
          </h3>
        </div>
      </div>
      <div className="flex my-20 justify-between">
        <AboutCard image="/sertificate.png" title="Sertificate" />
        <AboutCard
          title="Meine Zertifikate"
          text="Ich bin zertifizierter Hundetrainer und habe Erfahrung in der Ausbildung "
        />
        <AboutCard image="/sertificate.png" title="Sertificate" />
      </div>
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

export default About;
