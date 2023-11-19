import { useEffect } from "react";
import randomPrompt from "./utils/randomPrompt";

interface TextProps {
  prompts: string[];
  currentIndex: number;
  currentPrompt: string;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentPrompt: React.Dispatch<React.SetStateAction<string>>;
}

function Text({
  prompts,
  currentIndex,
  currentPrompt,
  setCurrentIndex,
  setCurrentPrompt,
}: TextProps) {
  const typedText = currentPrompt.substring(0, currentIndex);
  const pointer = currentPrompt[currentIndex];
  const untypedText = currentPrompt.substring(currentIndex + 1);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === pointer) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [pointer]);

  useEffect(() => {
    if (currentIndex === currentPrompt.length) {
      setCurrentPrompt(randomPrompt(prompts));
      setCurrentIndex(0);
    }
  }, [currentIndex, currentPrompt, prompts]);

  return (
    <>
      <div className="flex flex-row flex-nowrap mb-10">
        <span className="text-4xl font-mono whitespace-pre">{typedText}</span>
        <span className="text-4xl font-mono underline underline-offset-8 text-amber-500 whitespace-pre">
          {pointer}
        </span>
        <span className="text-4xl font-mono text-gray-500 whitespace-pre">
          {untypedText}
        </span>
      </div>
    </>
  );
}

export default Text;
