import {
  simulateClick,
  simulateHover,
  simulateHoverAndClick,
  addClass,
  removeClass,
  simulateVerticalScroll,
  simulateHorizontalScroll,
  wait,
  simulateHoverAndDoubleClick,
} from "./helpers";
const app_url = "";
let stopDemo = false; // Variable to control demo mode

async function executeStep(step) {
  const { action, selector, duration, className, distance, delay } = step;
  const element = document.querySelector(selector);
  
  try {
    switch (action) {
      case "simulateClick":
        await simulateClick(element);
        break;
      case "simulateHover":
        await simulateHover(element, className);
        break;
      case "simulateHoverAndClick":
        await simulateHoverAndClick(element, className);
        break;
      case "simulateHoverAndDoubleClick":
        await simulateHoverAndDoubleClick(element, className);
        break;
      case "addClass":
        await addClass(element, className);
        break;
      case "removeClass":
        await removeClass(element, className);
        break;
      case "simulateVerticalScroll":
        await simulateVerticalScroll(element, distance, duration);
        break;
      case "simulateHorizontalScroll":
        await simulateHorizontalScroll(element, distance, duration);
        break;
      case "wait":
        await wait(delay);
        break;
      // Add more cases for other actions

      default:
        console.warn(`Unknown action: ${action}`);
    }
  } catch (error) {
    console.log(error)
    console.log(step)
    stopDemoMode();
    //window.location.href = app_url;
  }
}

export async function runDemo(steps) {
  for (const step of steps) {
    if (stopDemo) {
      console.log("Demo stopped.");
      return; // Exit the function if stopDemo is true
    }
    await executeStep(step);
  }
  runDemo(steps);
}

// Function to stop the demo mode
export function stopDemoMode() {
  stopDemo = true;
}

export function startDemoMode() {
  stopDemo = false;
}
