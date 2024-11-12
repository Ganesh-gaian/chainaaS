export const vwToPx = (vw: number) => {
  if (typeof window !== 'undefined') {
    return (window.innerWidth * vw) / 100;
  }
  return 0;
};
