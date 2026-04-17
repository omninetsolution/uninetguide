import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ─── Content Protection ────────────────────────────────────────────────────────
// Disable right-click context menu (content protection)
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable common dev-tools keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U (view source)
  const blocked =
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key.toUpperCase())) ||
    (e.ctrlKey && e.key.toUpperCase() === "U");
  if (blocked) e.preventDefault();
});

// Disable text selection via keyboard Ctrl+A on production
// (mouse selection still works for accessibility)
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key.toUpperCase() === "A") e.preventDefault();
});
// ─────────────────────────────────────────────────────────────────────────────

createRoot(document.getElementById("root")!).render(<App />);
