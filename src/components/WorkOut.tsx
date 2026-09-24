import { IWorkout } from "../../types/workout";
import WorkoutCard from "./WorkOutCard";

const WorkoutGrid = ({ workouts }: { workouts: IWorkout[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} workout={workout} />
      ))}
    </div>
  );
};

export default WorkoutGrid;
