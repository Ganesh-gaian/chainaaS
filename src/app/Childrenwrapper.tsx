"use client";

import { useEffect } from "react";
import { runDemo, startDemoMode, stopDemoMode } from "../scripts/demoRunner";
import steps from "../scripts/steps.json";

export default function ChildrenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let activityTimer: NodeJS.Timeout;
    let debounceTimer: NodeJS.Timeout;
    let autodemo = false;

    const debounce = (func: () => void, delay: number) => {
      clearTimeout(debounceTimer); // Clear existing timer
      debounceTimer = setTimeout(() => func(), delay); // Set a new debounce timer
    };

    const handleUserActivity = (userStartedManually = false) => {
      if (autodemo) {
        clearTimeout(activityTimer); // Reset the activity timer
        if (!userStartedManually) {
          debounce(() => {
            console.log("Activity detected. Resetting activity timer.");
            activityTimer = setTimeout(() => {
              console.log("User inactive for 10 seconds. Triggering demo mode.");
              // Trigger your demo mode here
              startDemoMode();
              runDemo(steps);
            }, 10 * 1000); // 2 seconds
          }, 1000); // Debounce for 1 second
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "m") {
        console.log("Ctrl + M pressed!");
        startDemoMode();
        runDemo(steps);
        handleUserActivity(true);
      } else if (event.altKey && event.key === "m") {
        console.log("Alt + M pressed!");
        stopDemoMode();
        handleUserActivity();
      }
    };

    // Add event listeners for various user activity
    const handleArrowKeys = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
        case "ArrowRight":
        case "ArrowUp":
        case "ArrowDown":
          handleUserActivity();
          break;
        default:
          handleKeyDown(event);
          break;
      }
    };

    // Wrap the user activity handler to match the event signature
    const wrappedHandleUserActivity = () => handleUserActivity();

    document.addEventListener("keydown", handleArrowKeys);
    document.addEventListener("mousemove", wrappedHandleUserActivity);
    document.addEventListener("mousedown", wrappedHandleUserActivity);
    document.addEventListener("wheel", wrappedHandleUserActivity);
    document.addEventListener("touchstart", wrappedHandleUserActivity);

    // Start activity timer on component mount
    handleUserActivity();

    // Clean up event listeners on component unmount
    return () => {
      clearTimeout(activityTimer);
      clearTimeout(debounceTimer);

      document.removeEventListener("keydown", handleArrowKeys);
      document.removeEventListener("mousemove", wrappedHandleUserActivity);
      document.removeEventListener("mousedown", wrappedHandleUserActivity);
      document.removeEventListener("wheel", wrappedHandleUserActivity);
      document.removeEventListener("touchstart", wrappedHandleUserActivity);
    };
  }, []); // Run on mount

  return <>{children}</>;
}
