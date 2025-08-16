import { createElement, useEffect, useState } from "react";
import { render } from "react-dom";

export default function ({ model }) {
  const [count, setCount] = useState(model.get("count"));
  const [dark, setDark] = useState(model.get("dark"));

  useEffect(() => {
    const updateFromModel = () => {
      setCount(model.get("count"));
      setDark(model.get("dark"));
    };
    model.on("change:count", updateFromModel);
    model.on("change:dark", updateFromModel);
    return () => {
      model.off("change:count", updateFromModel);
      model.off("change:dark", updateFromModel);
    };
  }, [model]);

  const increment = () => model.set("count", count + 1) && model.save_changes();
  const decrement = () => model.set("count", count - 1) && model.save_changes();
  const toggleTheme = () => model.set("dark", !dark) && model.save_changes();

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "1rem",
    backgroundColor: dark ? "#1e1e1e" : "#f9f9f9",
    color: dark ? "#f9f9f9" : "#1e1e1e",
    borderRadius: "10px",
    textAlign: "center",
    width: "250px"
  };

  render(
    <div style={containerStyle}>
      <h3>React Counter</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>➕</button>
      <button onClick={decrement}>➖</button>
      <br /><br />
      <button onClick={toggleTheme}>Toggle {dark ? "Light" : "Dark"} Theme</button>
    </div>,
    document.body
  );
}
