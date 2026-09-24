"use client";

import { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

import { FitLogContext } from "@/context/FitLogContext";
import { IWorkout } from "../../../types/workout";

const SaveButton = ({ workout }: { workout: IWorkout }) => {
  const { saved, setSaved } = useContext(FitLogContext);

  const handleSave = () => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.warning("Workout is already saved.");
      return;
    }

    setSaved((previousSaved) => [...previousSaved, workout]);

    toast.success("Saved for later");
  };

  return (
    <button
      onClick={handleSave}
      className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 font-bold uppercase transition hover:border-lime-400 hover:text-lime-400"
    >
      <FaRegBookmark />
      Save for later
    </button>
  );
};

export default SaveButton;
