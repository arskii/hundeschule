import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center py-7">
        <Image priority src="logo.svg" width={180} height={80} alt="logo" />
      </div>
    </Link>
  );
};

export default Logo;
