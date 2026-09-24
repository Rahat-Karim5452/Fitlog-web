"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className="hidden items-center gap-2 md:flex">
      <Link
        href="/"
        className={`rounded-full px-5 py-2 text-sm font-bold uppercase transition ${
          pathname === "/"
            ? "bg-lime-400 text-black"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        Workouts
      </Link>

      <Link
        href="/my-plan"
        className={`rounded-full px-5 py-2 text-sm font-bold uppercase transition ${
          pathname === "/my-plan"
            ? "bg-lime-400 text-black"
            : "text-zinc-400 hover:text-white"
        }`}
      >
        My Plan
      </Link>
    </div>
  );
};

export default NavLinks;
