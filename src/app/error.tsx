"use client";

import Link from "next/link";

const Error = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-black uppercase">Something went wrong</h1>

        <p className="mt-3 text-zinc-400">
          We couldn&apos;t load this page right now.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-lime-400 px-6 py-3 font-bold text-black"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
};

export default Error;
