"use client"
import { useModel, useRegModel } from "@/lib/store";

export const DarkScreen = () => {
  const { isOpen: isModelOpen } = useModel();
  const { isOpen: isRegModelOpen } = useRegModel();

  return (
    <>
      {(isModelOpen || isRegModelOpen) && (
        <div className="min-h-full min-w-full bg-black absolute z-10 opacity-50"></div>
      )}
    </>
  );
};
