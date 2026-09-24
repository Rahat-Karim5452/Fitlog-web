import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
          FitLog
        </p>
        <h1 className="mt-3 text-7xl font-black">404</h1>
        <h2 className="mt-3 text-2xl font-bold uppercase">Nothing here</h2>
        <p className="mt-3 text-zinc-400">
          The workout or page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-lime-400 px-6 py-3 font-bold uppercase text-black transition hover:bg-lime-300"
        >
          Go to workouts
        </Link>
      </div>
    </main>
  );
};
export default NotFound;
