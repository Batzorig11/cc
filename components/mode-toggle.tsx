"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => setIsAnimating(false), 600);
  };

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="relative overflow-hidden">
        <span className="sr-only">Toggle theme</span>
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="relative overflow-hidden"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-in-out
        dark:scale-0 dark:opacity-0
        ${theme === "dark"
            ? "rotate-180"
            : isAnimating
              ? "scale-150 rotate-180"
              : "scale-100 rotate-0"
          }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all duration-500 ease-in-out
        scale-0 opacity-0 dark:scale-100 dark:opacity-100
        ${theme === "light"
            ? "-rotate-180"
            : isAnimating
              ? "scale-150 rotate-180"
              : "rotate-0"
          }`}
      />

      {/* Ripple effect on click */}
      {isAnimating && (
        <span className="absolute inset-0 animate-ping bg-current opacity-20 rounded-md" />
      )}
    </Button>
  );
}
