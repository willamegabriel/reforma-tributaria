import React, { useEffect } from "react";
import "./theme-ripple.css";

export default function Root({ children }) {
  useEffect(() => {
    const btn = document.querySelector('button[class*="toggle"]');

    if (!btn) return;

    btn.addEventListener("click", (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      startThemeRipple(x, y);
    });

    function startThemeRipple(x, y) {
      const ripple = document.createElement("div");
      ripple.className = "theme-ripple";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      document.body.appendChild(ripple);

      setTimeout(() => ripple.remove(), 900);
    }
  }, []);

  return <>{children}</>;
}
