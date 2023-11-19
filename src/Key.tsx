import { useState } from "react";
import { useEffect } from "react";

interface KeyProps {
  char: string;
  isTarget: boolean;
  index: number;
}

function Key({ char, isTarget, index }: KeyProps) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === char) {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (event: any) => {
      if (event.key === char) {
        setIsPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [char]);

  if (isTarget) {
    return (
      <div
        key={index}
        className={`flex bg-gray-800 w-14 h-14 items-center justify-center rounded-lg ${
          isPressed ? "bg-gray-700 translate-y-2" : "shadow-target"
        } text-xl`}
      >
        {char}
      </div>
    );
  }
  return (
    <div
      key={index}
      className={`flex bg-gray-800 w-14 h-14 items-center justify-center rounded-lg ${
        isPressed ? "bg-gray-700 translate-y-2" : "shadow-key"
      } text-xl`}
    >
      {char}
    </div>
  );
}
export default Key;
