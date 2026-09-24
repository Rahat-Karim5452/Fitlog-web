"use client";

import Image from "next/image";
import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

import { IWorkout } from "../../../types/workout";
import MarkDoneButton from "../buttons/MarkDoneButton";
import RemoveButton from "../buttons/RemoveButton";

const PlanCard = ({
  workout,
  showActions,
  showMarkDone,
}: {
  workout: IWorkout;
  showActions: boolean;
  showMarkDone: boolean;
}) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative h-40 w-full sm:h-48 md:h-auto md:w-40">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center p-4 sm:p-5">
          <div className="flex flex-wrap gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="text-xs font-bold uppercase text-lime-400"
              >
                {muscle}
              </span>
            ))}
          </div>

          <h2 className="mt-2 text-xl font-black uppercase sm:text-2xl">
            {workout.name}
          </h2>

          <p className="mt-2 text-sm text-zinc-500">{workout.equipment}</p>

          {/* Stats */}
          <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-400 sm:gap-5">
            <span className="flex items-center gap-2">
              <FaClock />
              {workout.duration} min
            </span>

            <span className="flex items-center gap-2">
              <FaFire />
              {workout.caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              {workout.rating}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-3 border-t border-white/10 p-4 sm:p-5 md:border-l md:border-t-0">
          <Link
            href={`/workout/${workout.id}`}
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase transition hover:border-lime-400 hover:text-lime-400 sm:px-5 sm:text-sm"
          >
            View Details
          </Link>

          {showActions && (
            <>
              {showMarkDone && <MarkDoneButton id={workout.id} />}
              <RemoveButton
                id={workout.id}
                type={showMarkDone ? "plan" : "saved"}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
