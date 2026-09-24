import Hero from "@/components/Hero";
import WorkoutGrid from "@/components/WorkOut";
import { getWorkouts } from "@/lib/api";

const HomePage = async () => {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />

      <section id="library">
        <WorkoutGrid workouts={workouts} />
      </section>
    </>
  );
};

export default HomePage;
