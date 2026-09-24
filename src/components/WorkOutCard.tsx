import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import { IWorkout } from "../../types/workout";
import Image from "next/image";

interface WorkoutCardProps {
  workout: IWorkout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-white/10 bg-[#15161b] transition hover:-translate-y-1 hover:border-[#ccff00]/30"
    >
      <div className="aspect-video overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          width={300}
          height={200}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-2 py-1 text-[10px] font-bold text-black"
            >
              {muscle.toUpperCase()}
            </span>
          ))}
        </div>

        <h3 className="font-[family-name:var(--font-oswald)] text-lg font-bold uppercase">
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-gray-500">{workout.equipment}</p>

        <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <FiClock />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1">
            <FaFire />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1">
            <FiStar />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
