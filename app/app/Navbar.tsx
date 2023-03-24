import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between font-serif uppercase xl:text-xl md:text-base">
      <ul className="flex items-center xl:gap-10 md:gap-5">
        <li>
          <a href="#articles">Wichtiges über Hunde</a>
        </li>
        <li>
          <a href="#about">Über mich</a>
        </li>
        <li>
          <a href="#price">Preise</a>
        </li>
        <li>
          <a href="#galery">Galerie</a>
        </li>
        <li>
          <a href="/">Leistungen</a>
        </li>
      </ul>

      <ul className="flex items-center gap-2">
        <li>
          <Link href="/">De</Link>
        </li>
        <li>
          <Link href="/">Ua</Link>
        </li>
        <li>
          <Link href="/">Ru</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
