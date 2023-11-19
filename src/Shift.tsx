import { useState, useEffect } from "react";
import { upperCaseKeys } from "./utils/keys";

interface ShiftProps {
  target: string;
}

function Shift({ target }: ShiftProps) {
  const [isPressed, setIsPressed] = useState(false);
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Shift") {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (event: any) => {
      if (event.key === "Shift") {
        setIsPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  if (upperCaseKeys.includes(target)) {
    return (
      <div
        className={`flex items-center justify-center w-28 h-14 rounded-lg bg-gray-800 ${
          isPressed ? "bg-gray-700 translate-y-2" : "shadow-target"
        }`}
      >
        Shift
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center w-28 h-14 rounded-lg bg-gray-800 ${
        isPressed ? "bg-gray-700 translate-y-2" : "shadow-key"
      }`}
    >
      Shift
    </div>
  );
}

export default Shift;
