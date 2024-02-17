import { useState } from "react"
import { colorAtom } from "../states/pages/background"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil" 
export function Assgnment2() {
  const [background, setBackground] = useRecoilState(colorAtom);

  const colors = ['redd', 'yellow', 'purple', 'green', 'blue'];

  return (
    <div className={`main ${background}`}>
      <div className="background">
        <div className="btns">
          {colors.map((color) => (
            <button
              // key={color}
              className="mini-btn"
              style={{ background: color }}
              onClick={() => setBackground(color)}
            >
             {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
          <button className="mini-btn" onClick={() => setBackground('main')}>
            Default
          </button>
        </div>
      </div>
    </div>
  );
}
