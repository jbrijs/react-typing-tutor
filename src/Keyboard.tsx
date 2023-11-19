import Shift from "./Shift";
import SpaceBar from "./SpaceBar";
import renderKeys from "./utils/renderKeys";
import {
  firstRow,
  secondRow,
  thirdRow,
  fourthRow,
  firstRowShift,
  secondRowShift,
  thirdRowShift,
  fourthRowShift,
} from "./utils/keys";

interface KeyboardProps {
  isShifted: boolean;
  target: string;
}

function Keyboard({ isShifted, target }: KeyboardProps) {
  if (isShifted) {
    return (
      <>
        <div className="flex flex-col gap-4 bg-gray-600 p-10 rounded-2xl shadow-board items-center justify-center">
          <div className="flex gap-2">{renderKeys(firstRowShift, target)}</div>
          <div className="flex gap-2">{renderKeys(secondRowShift, target)}</div>
          <div className="flex gap-2">{renderKeys(thirdRowShift, target)}</div>
          <div className="flex gap-2">
            {Shift({ target })}
            {renderKeys(fourthRowShift, target)}
            {Shift({ target })}
          </div>
          {SpaceBar({ target })}
        </div>
      </>
    );
  }
  return (
    <>
      <div className="flex flex-col gap-4 bg-gray-600 p-10 rounded-2xl shadow-board items-center justify-center">
        <div className="flex gap-2">{renderKeys(firstRow, target)}</div>
        <div className="flex gap-2">{renderKeys(secondRow, target)}</div>
        <div className="flex gap-2">{renderKeys(thirdRow, target)}</div>
        <div className="flex gap-2">
          {Shift({ target })}
          {renderKeys(fourthRow, target)}
          {Shift({ target })}
        </div>
        {SpaceBar({ target })}
      </div>
    </>
  );
}

export default Keyboard;
