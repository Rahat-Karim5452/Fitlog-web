"use client";

import { FitLogContext } from "@/context/FitLogContext";
import Link from "next/link";
import { useContext } from "react";

const NavbarCounters = () => {
  const { plan, saved } = useContext(FitLogContext);

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href="/my-plan"
        className="flex items-center gap-1 transition hover:bg-white/10  rounded-full py-1 px-1"
      >
        <span>Plan</span>
        <span className="rounded-full bg-lime-400  px-2 py-1 text-black">
          {plan.length}
        </span>
      </Link>

      <Link
        href="/my-plan"
        className="flex items-center gap-1 transition hover:bg-white/10 rounded-full py-1 px-1"
      >
        <span>Saved</span>
        <span className="rounded-full border border-white/30 px-2 py-1">
          {saved.length}
        </span>
      </Link>
    </div>
  );
};

export default NavbarCounters;
