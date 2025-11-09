import { useState } from "react";
import "./ColorPicker.css";

export default function ColorPicker() {
  const [selectColor, setSelectColor] = useState({ hex: null, name: null });
  const [focusedIndex, setFocusedIndex] = useState(null);

  const colors = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#00FF00" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
    { name: "Cyan", hex: "#00FFFF" },
    { name: "Magenta", hex: "#FF00FF" },
  ];

  function handleClick(color) {
    setSelectColor(color);
  }
  function handleMouseEnter(hex) {
    const index = colors.findIndex((color) => color.hex === hex);
    setFocusedIndex(index);
  }
  function handleMouseLeave() {
    setFocusedIndex(null);
  }
  function handleKeyDown(e, index) {
    if (e.key === "Enter") {
      handleClick(colors[index]);
    }
  }
  function handleFocus(index) {
    setFocusedIndex(index);
  }
  function handleBlur() {
    setFocusedIndex(null);
  }

  return (
    <div className="Color-picker">
      <h1>ColorPicker</h1>
      <div className="color-list">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-item ${focusedIndex === index ? "focused" : ""}`}
            style={{ backgroundColor: color.hex }}
            onClick={() => handleClick(color)}
            onMouseEnter={() => handleMouseEnter(color.hex)}
            onMouseLeave={handleMouseLeave}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            tabIndex={0}
          >
            {selectColor.hex === color.hex && (
              <span className="color-code">
                {selectColor.name || color.hex}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
