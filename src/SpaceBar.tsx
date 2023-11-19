import { useState, useEffect } from "react";

interface SpaceBarProps {
  target: string;
}

function SpaceBar({ target }: SpaceBarProps) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === " ") {
        setIsPressed(true);
      }
    };

    const handleKeyUp = (event: any) => {
      if (event.key === " ") {
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
  if (target === " ") {
    return (
      <div
        className={`bg-gray-800 w-80 h-14 rounded-lg ${
          isPressed ? "bg-gray-700 translate-y-2" : "shadow-target"
        }`}
      ></div>
    );
  }
  return (
    <div
      className={`bg-gray-800 w-80 h-14 rounded-lg ${
        isPressed ? "bg-gray-700 translate-y-2" : "shadow-key"
      }`}
    ></div>
  );
}

export default SpaceBar;
