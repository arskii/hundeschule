import Link from "next/link";
import Image from "next/image";

const TopBar = () => {
  return (
    <div className="flex flex-row gap-x-1 h-12 w-screen bg-white text-center items-center justify-center font-serif text-lx">
      <Link href="/">#Help Ukraine</Link>
      <Image
        src="https://flagicons.lipis.dev/flags/4x3/ua.svg"
        width={15}
        height={15}
        alt="ua_flag"
      />
    </div>
  );
};

export default TopBar;
