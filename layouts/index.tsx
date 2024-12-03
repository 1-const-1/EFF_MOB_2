import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";

const elm = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(elm);
root.render(<App />);