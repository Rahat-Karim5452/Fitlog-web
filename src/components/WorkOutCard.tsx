import Link from "next/link";
import { FaClock, FaFire, FaStar } from "react-icons/fa";

import Image from "next/image";
import { IWorkout } from "../../types/workout";

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <article>
        <Image
          src={workout.image}
          alt={workout.name}
          width={300}
          height={300}
        />

        <div>
          <div>
            {workout.muscleGroups.map((muscle) => (
              <span key={muscle}>{muscle}</span>
            ))}
          </div>

          <h3>{workout.name}</h3>

          <p>{workout.equipment}</p>

          <div>
            <span>
              <FaClock />
              {workout.duration} min
            </span>

            <span>
              <FaFire />
              {workout.caloriesBurned} kcal
            </span>

            <span>
              <FaStar />
              {workout.rating}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default WorkoutCard;
