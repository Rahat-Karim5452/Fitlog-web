import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import NavbarCounters from "./NavbarCounters";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5">
        <Link href="/" className="flex items-center gap-2">
          <Image src={Logo} alt="FitLog Logo" width={30} height={30} />

          <span className="font-bold tracking-wide text-xl">FITLOG</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/">Workouts</Link>

          <Link href="/my-plan">My Plan</Link>
        </div>

        <NavbarCounters />
      </div>
    </nav>
  );
};

export default Navbar;
