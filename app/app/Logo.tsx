import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex hover:cursor-pointer items-center justify-center py-7">
        <Image
          priority
          src="logo.svg"
          width={180}
          height={80}
          alt="logo"
        ></Image>
      </div>
    </Link>
  );
};

export default Logo;
