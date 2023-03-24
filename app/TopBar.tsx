import Link from "next/link";

const TopBar = () => {
  return (
    <div className="flex h-12 w-screen bg-white text-center items-center justify-center font-serif text-lx">
      <Link href="/">#Help Ukraine 🇺🇦</Link>
    </div>
  );
};

export default TopBar;
