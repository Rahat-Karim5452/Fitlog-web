import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";

const WorkoutDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  let workout;

  try {
    workout = await getWorkout(id);
  } catch {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime-400"
      >
        <FaArrowLeft />
        Back to workouts
      </Link>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Side */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
          <Image
            src={workout.image}
            alt={workout.name}
            width={800}
            height={800}
            className="h-full min-h-[400px] w-full object-cover"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-lime-400">
            Workout Details
          </p>

          <h1 className="text-4xl font-black uppercase leading-tight sm:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-5 leading-7 text-zinc-400">{workout.description}</p>

          {/* Category Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs font-semibold uppercase text-lime-400"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/80">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Equipment
              </p>
              <p className="text-xs font-medium text-zinc-200">
                {workout.equipment}
              </p>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Difficulty
              </p>
              <p className="text-xs font-medium text-zinc-200">
                {workout.difficulty}
              </p>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Sets
              </p>
              <p className="text-xs font-medium text-zinc-200">
                {workout.sets}
              </p>
            </div>

            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Reps
              </p>
              <p className="text-xs font-medium text-zinc-200">
                {workout.reps}
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Duration
              </p>
              <p className="text-xs font-medium text-zinc-200">
                {workout.duration} min
              </p>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Calories
              </p>
              <p className="text-xs font-medium text-zinc-200">
                {workout.caloriesBurned} kcal
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-5 py-3.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                Rating
              </p>
              <p className="text-xs font-medium text-zinc-200">
                {workout.rating}
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold uppercase">Instructions</h2>

            <ol className="mt-4 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-4 text-sm leading-6 text-zinc-400"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-lime-400 font-bold text-black">
                    {index + 1}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"></div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
