import Link from "next/link";
import Image from "next/image";

import { Locale } from "../../i18n-config";

const Logo = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <Link href={`/${lang}`}>
      <div className="flex items-center justify-center py-7">
        <Image priority src={`/logo.svg`} width={180} height={80} alt="logo" />
      </div>
    </Link>
  );
};

export default Logo;
