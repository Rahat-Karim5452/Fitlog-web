import Image from "next/image";
import HeroImage from "../../public/images/banner.png";
export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
      <div className="grid overflow-hidden rounded-xl border border-white/10 bg-[#15161b] lg:grid-cols-2">
        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
          <p className="mb-4 text-xs font-bold tracking-[0.2em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="py-2 text-4xl font-bold uppercase leading-[0.95] sm:text-3xl lg:text-4xl">
            TRAIN WITH INTENT. LOG <br />
            EVERY SET.
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-6 text-gray-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <a
            href="#library"
            className="mt-7 w-fit rounded-md bg-[#ccff00] px-5 py-3 text-sm font-bold text-black transition hover:bg-[#b9eb00]"
          >
            BROWSE WORKOUTS
          </a>
        </div>

        <div className="flex min-h-65 items-center justify-center p-6">
          <Image
            src={HeroImage}
            alt="Workout illustration"
            className="max-h-75 w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
