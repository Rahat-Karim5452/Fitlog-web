"use client";

import { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

import { FitLogContext } from "@/context/FitLogContext";

const MarkDoneButton = ({ id }: { id: number }) => {
  const { completed, setCompleted } = useContext(FitLogContext);

  const isCompleted = completed.includes(id);

  const handleDone = () => {
    if (isCompleted) {
      toast("Workout is already marked as done.");
      return;
    }

    setCompleted((previous) => [...previous, id]);

    toast("Workout marked as done");
  };

  return (
    <button
      onClick={handleDone}
      className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold uppercase transition ${
        isCompleted
          ? "bg-lime-400 text-black"
          : "border border-white/20 hover:border-lime-400 hover:text-lime-400"
      }`}
    >
      <FaCheck />

      {isCompleted ? "Done" : "Mark as Done"}
    </button>
  );
};

export default MarkDoneButton;
