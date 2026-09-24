import { IWorkout } from "../../types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

// All Data
export const getWorkouts = async (): Promise<IWorkout[]> => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }
  return res.json();
};

//Single ekta
export const getWorkout = async (id: string): Promise<IWorkout> => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) {
    throw new Error("Workout not found");
  }
  return res.json();
};
