import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FullPageScreen } from "./screens/FullPageScreen";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <FullPageScreen />
  </StrictMode>,
);
