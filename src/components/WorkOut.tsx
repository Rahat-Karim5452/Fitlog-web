import { IWorkout } from "../../types/workout";
import WorkoutCard from "./WorkOutCard";

const WorkoutGrid = ({ workouts }: { workouts: IWorkout[] }) => {
  return (
    <section id="library" className="mx-auto mt-14 max-w-7xl px-5 lg:px-8">
      <div className="mb-7">
        <h2 className="font-[family-name:var(--font-oswald)] text-3xl font-bold uppercase leading-none tracking-wide sm:text-4xl">
          THE LIBRARY
        </h2>
        <p className="mt-3 text-sm text-gray-400 sm:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutGrid;
