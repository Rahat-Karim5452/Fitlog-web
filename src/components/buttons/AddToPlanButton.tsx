"use client";

import { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import { FitLogContext } from "@/context/FitLogContext";
import { IWorkout } from "../../../types/workout";

const AddToPlanButton = ({ workout }: { workout: IWorkout }) => {
  const { plan, setPlan } = useContext(FitLogContext);

  const handleAddToPlan = () => {
    const alreadyExists = plan.some((item) => item.id === workout.id);

    if (alreadyExists) {
      toast.warning("Workout is already in today's plan.");
      return;
    }

    if (plan.length >= 5) {
      toast("Today's plan can have maximum 5 workouts.");
      return;
    }

    setPlan((previousPlan) => [...previousPlan, workout]);

    toast.success("Added to today's plan");
  };

  return (
    <button
      onClick={handleAddToPlan}
      className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#C2F800] px-6 py-3 font-bold uppercase text-black transition hover:bg-lime-300"
    >
      <FaPlus />
      Add to today&apos;s plan
    </button>
  );
};

export default AddToPlanButton;
