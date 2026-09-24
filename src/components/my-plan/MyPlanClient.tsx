"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { FitLogContext } from "@/context/FitLogContext";
import PlanCard from "./PlanCard";

type ActiveTab = "plan" | "saved";
type SortType = "duration" | "calories" | "rating";

const MyPlanClient = () => {
  const { plan, saved } = useContext(FitLogContext);
  const [activeTab, setActiveTab] = useState<ActiveTab>("plan");
  const [sortBy, setSortBy] = useState<SortType>("duration");

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  const currentList = [...(activeTab === "plan" ? plan : saved)].sort(
    (a, b) => {
      if (sortBy === "duration") return b.duration - a.duration;
      if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
      return b.rating - a.rating;
    },
  );

  return (
    <main className="w-full px-4 py-6 sm:px-6 md:px-10 lg:px-20 xl:px-35 md:py-10">
      <div>
        <h1 className="text-2xl font-black uppercase tracking-tight sm:text-3xl">
          My Plan
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
        <div className="grid grid-cols-3">
          <div className="px-3 py-4 sm:px-5 sm:py-6">
            <p className="text-xs text-zinc-500">Exercises</p>
            <p className="mt-1 text-xl font-black text-lime-400 sm:text-2xl md:text-3xl">
              {plan.length}
            </p>
          </div>

          <div className="border-l border-white/10 px-3 py-4 sm:px-5 sm:py-6">
            <p className="text-xs text-zinc-500">Minutes</p>
            <p className="mt-1 text-xl font-black sm:text-2xl md:text-3xl">
              {totalMinutes}
            </p>
          </div>

          <div className="border-l border-white/10 px-3 py-4 sm:px-5 sm:py-6">
            <p className="text-xs text-zinc-500">Calories</p>
            <p className="mt-1 text-xl font-black sm:text-2xl md:text-3xl">
              {totalCalories}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <div className="inline-flex rounded-xl border border-white/10 bg-zinc-900 p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-3 py-2 text-xs font-bold whitespace-nowrap transition sm:px-4 ${
              activeTab === "plan"
                ? "bg-zinc-800 text-white"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-3 py-2 text-xs font-bold whitespace-nowrap transition sm:px-4 ${
              activeTab === "saved"
                ? "bg-zinc-800 text-white"
                : "text-zinc-500 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort Start */}
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm text-zinc-400">
            Sort By
          </label>

          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortType)}
            className="rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-sm outline-none focus:border-lime-400"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* List */}
      <div className="mt-5">
        {currentList.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-zinc-900 px-4 py-12 text-center sm:px-6 sm:py-16">
            <h2 className="text-2xl font-black uppercase sm:text-3xl">
              Nothing here yet
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400 sm:text-base">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex rounded-full bg-lime-400 px-6 py-3 font-bold uppercase text-black transition hover:bg-lime-300"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {currentList.map((workout) => (
              <PlanCard
                key={workout.id}
                workout={workout}
                showActions={true}
                showMarkDone={activeTab === "plan"}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanClient;
