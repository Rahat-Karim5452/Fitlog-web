"use client";

import { useContext } from "react";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";

import { FitLogContext } from "@/context/FitLogContext";

const RemoveButton = ({ id, type }: { id: number; type: "plan" | "saved" }) => {
  const { setPlan, setSaved } = useContext(FitLogContext);

  const handleRemove = () => {
    if (type === "plan") {
      setPlan((previousPlan) =>
        previousPlan.filter((workout) => workout.id !== id),
      );
      toast.success("Workout removed from today's plan");
    }
    if (type === "saved") {
      setSaved((previousSaved) =>
        previousSaved.filter((workout) => workout.id !== id),
      );
      toast.success("Workout removed from saved");
    }
  };
  return (
    <button
      onClick={handleRemove}
      aria-label="Remove workout"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-red-400 hover:text-red-400"
    >
      <FaXmark />
    </button>
  );
};

export default RemoveButton;
