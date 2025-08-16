import * as React from "https://esm.sh/react@18.2.0";
import { createRender, useModelState } from "https://esm.sh/@anywidget/react@0.2.0";

console.log("React widget module is loaded");

function Counter() {
  const [count, setCount] = useModelState("count");
  const [dark, setDark] = useModelState("dark");
  console.log("Rendering Counter • count:", count, "dark:", dark);

  const style = {
    fontFamily: "Arial, sans-serif",
    padding: "1rem",
    backgroundColor: dark ? "#1e1e1e" : "#f9f9f9",
    color: dark ? "#f9f9f9" : "#1e1e1e",
    borderRadius: "10px",
    textAlign: "center",
    width: "250px"
  };

  return React.createElement(
    "div",
    { style },
    React.createElement("h3", null, "React Counter"),
    React.createElement("p", null, `Count: ${count}`),
    React.createElement("button", { onClick: () => setCount(count + 1) }, "➕"),
    React.createElement("button", { onClick: () => setCount(count - 1) }, "➖"),
    React.createElement("br"),
    React.createElement(
      "button",
      { onClick: () => setDark(!dark) },
      `Toggle ${dark ? "Light" : "Dark"} Theme`
    )
  );
}

const renderView = createRender(Counter);

export default {
  initialize({ model }) {
    console.log("initialize called");
  },
  render({ model, el }) {
    console.log("render called");
    return renderView({ model, el });
  },
};