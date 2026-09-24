import Image from "next/image";
import Logo from "../../public/images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-black tracking-wider"
        >
          <Image src={Logo} alt="FitLog Logo" width={30} height={30} />
          <span className="text-xl font-bold tracking-wide">FITLOG</span>
        </Link>

        <p className="text-sm text-zinc-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
