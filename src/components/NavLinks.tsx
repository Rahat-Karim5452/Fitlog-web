"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <>
      <li>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "bg-lime-400 text-black rounded-full px-5 py-2 text-sm font-bold transition"
              : "text-zinc-400 hover:text-white rounded-full px-5 py-2 text-sm font-bold transition"
          }
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={
            pathname === "/my-plan"
              ? "bg-lime-400 text-black rounded-full px-5 py-2 text-sm font-bold transition"
              : "text-zinc-400 hover:text-white rounded-full px-5 py-2 text-sm font-bold transition"
          }
        >
          My Plan
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
