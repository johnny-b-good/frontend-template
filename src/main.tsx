import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1 className="flex items-center gap-1 p-4 text-2xl font-bold text-blue-500">
      <CheckBadgeIcon className="h-8 w-8" /> HELLO WORLD!
    </h1>
  </StrictMode>,
);
