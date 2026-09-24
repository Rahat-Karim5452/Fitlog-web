"use client";

import { createContext, ReactNode, useState } from "react";
import { IWorkout } from "../../types/workout";

interface IFitLogContext {
  plan: IWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;

  saved: IWorkout[];
  setSaved: React.Dispatch<React.SetStateAction<IWorkout[]>>;

  completed: number[];
  setCompleted: React.Dispatch<React.SetStateAction<number[]>>;
}

export const FitLogContext = createContext<IFitLogContext>(
  {} as IFitLogContext,
);

const FitLogProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);
  const [completed, setCompleted] = useState<number[]>([]);

  const shareData = {
    plan,
    setPlan,
    saved,
    setSaved,
    completed,
    setCompleted,
  };

  return (
    <FitLogContext.Provider value={shareData}>
      {children}
    </FitLogContext.Provider>
  );
};

export default FitLogProvider;
