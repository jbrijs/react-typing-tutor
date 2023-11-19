import { useState, useEffect } from "react";

import Keyboard from "./Keyboard";
import Text from "./Text";
import prompts from "./prompts";
import randomPrompt from "./utils/randomPrompt";

function App() {
  const [isShifted, setIsShifted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPrompt, setCurrentPrompt] = useState(() =>
    randomPrompt(prompts)
  );

  const target = currentPrompt[currentIndex];

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Shift") {
        setIsShifted(true);
      }
    };

    const handleKeyUp = (event: any) => {
      if (event.key === "Shift") {
        setIsShifted(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <>
      <h1 className="text-center mt-10 mb-3 text-5xl text-amber-200">
        Panagram Typing Tutor
      </h1>
      <p className="text-center mb-16 text-2xl text-gray-500">by Joe Brijs</p>
      <div className="flex flex-col justify-center text-center items-center">
        {Text({
          prompts,
          currentPrompt,
          currentIndex,
          setCurrentIndex,
          setCurrentPrompt,
        })}
        {Keyboard({ isShifted, target })}
      </div>
    </>
  );
}

export default App;
