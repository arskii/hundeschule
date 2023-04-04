"use client";

import LocaleSwitcher from "./components/locale-switcher";

export default function Navbar({
  dictionary,
}: {
  dictionary: {
    articles: string;
    about: string;
    price: string;
    galery: string;
    services: string;
  };
}) {
  return (
    <div className="flex justify-between font-serif uppercase xl:text-xl md:text-base">
      <ul className="flex items-center xl:gap-10 md:gap-5">
        <li>
          <a href={`#articles`}>{dictionary.articles}</a>
        </li>
        <li>
          <a href={`#about`}>{dictionary.about}</a>
        </li>
        <li>
          <a href={`#price`}>{dictionary.price}</a>
        </li>
        <li>
          <a href={`#galery`}>{dictionary.galery}</a>
        </li>
        <li>
          <a href={`/`}>{dictionary.services}</a>
        </li>
      </ul>
      <LocaleSwitcher />
    </div>
  );
}
