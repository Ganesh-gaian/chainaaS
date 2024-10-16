import anime from "animejs";

export const wait = (delay) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export const simulateClick = (element) => {
  if (!element) {
    throw new Error("Element not found");
  }
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(event);
};

export const simulateHover = async (element, className) => {
  if (!element) {
    throw new Error("Element not found");
  }
  element.classList.add(className);
  await wait(1000);
  element.classList.remove(className);
};

export const simulateHoverAndClick = async (element, className) => {
  if (!element) {
    throw new Error("Element not found");
  }
  element.classList.add(className);
  await wait(1000);
  const event = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(event);
  element.classList.remove(className);
};

export const simulateHoverAndDoubleClick = async (element, className) => {
  if (!element) {
    throw new Error("Element not found");
  }
  element.classList.add(className);
  await wait(1000);
  const event = new MouseEvent("dblclick", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  element.dispatchEvent(event);
  element.classList.remove(className);
};

export const addClass = async (element, className) => {
  if (!element) {
    throw new Error("Element not found");
  }
  element.classList.add(className);
};

export const removeClass = async (element, className) => {
  if (!element) {
    throw new Error("Element not found");
  }
  element.classList.remove(className);
};

export const simulateVerticalScroll = async (
  element,
  distance,
  duration = 1000
) => {
  if (!element) {
    throw new Error("Element not found");
  }
  return new Promise(async (resolve) => {
    anime({
      targets: element,
      scrollTop: distance,
      duration: duration,
      easing: "easeInOutQuad",
    });
    await wait(duration);
    resolve();
  });
};

export const simulateHorizontalScroll = async (
  element,
  distance,
  duration = 1000
) => {
  if (!element) {
    throw new Error("Element not found");
  }
  return new Promise(async (resolve) => {
    anime({
      targets: element,
      scrollLeft: distance,
      duration: duration,
      easing: "easeInOutQuad",
    });
    await wait(duration);
    resolve();
  });
};
