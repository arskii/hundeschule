import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between py-10">
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-bold font-serif uppercase text-2xl">
              Nataliya & Benito
            </h3>
            <p>Hundeschule</p>
          </div>
          <p className="font-serif">© 2022 Nataliya & Benito</p>
        </div>
        <div className="flex flex-col items-end justify-between">
          <h4 className="font-bold font-serif uppercase">Kontakt</h4>
          <div className="text-end">
            <p>
              Hundeschule <span className=" uppercase">Nataliya & benito</span>
            </p>
            <p>Nataliya - Hundetrainerin</p>
            <p>+49 (0)111 1111 111</p>
            <p>Mail: Info@link.de</p>
          </div>
          <Link className=" font-serif" href="/">
            Datenschutzerklärung | Impressum & AGB
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
