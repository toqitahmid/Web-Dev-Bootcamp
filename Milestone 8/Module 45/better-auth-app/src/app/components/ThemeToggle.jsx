"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@heroui/react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Switch onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {({ isSelected }) => (
        <>
          <Switch.Control
            className={`h-[31px] w-[51px] rounded-3xl bg-purple-800 ${isSelected ? "" : "bg-brown-200"}`}
          >
            <Switch.Thumb
              className={`size-[27px] rounded-3xl bg-white shadow-sm ${isSelected ? "ms-[22px] shadow-lg" : ""}`}
            >
              <Switch.Icon>
                {isSelected ? (
                  <Sun className="size-4 text-blue-600" />
                ) : (
                  <Moon className="size-4 text-cyan-600" />
                )}
              </Switch.Icon>
            </Switch.Thumb>
          </Switch.Control>
        </>
      )}
    </Switch>
  );
};

export default ThemeToggle;
