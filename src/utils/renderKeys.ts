import Key from "../Key";

function renderKeys(charList: Array<string>, target: string) {
  return charList.map((char, index) =>
    Key({ char, isTarget: char === target, index: index })
  );
}

export default renderKeys;
