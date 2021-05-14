/**
 *  Easing functions have been found and used from
 *  https://easings.net/
 */
export const easings = {
  outCirc: `cubic-bezier(0, 0.55, 0.45, 1)`,
  inCirc: `cubic-bezier(0.55, 0, 1, 0.45)`,
  inOutCirc: `cubic-bezier(0.85, 0, 0.15, 1)`,
  inSine: `cubic-bezier(0.12, 0, 0.39, 0)`,
  outSine: `cubic-bezier(0.61, 1, 0.88, 1)`,
  inOutSine: `cubic-bezier(0.37, 0, 0.63, 1)`,
  inCubic: `cubic-bezier(0.32, 0, 0.67, 0)`,
  outCubic: `cubic-bezier(0.33, 1, 0.68, 1)`,
  inOutCubic: `cubic-bezier(0.65, 0, 0.35, 1)`,
  inQuint: `cubic-bezier(0.64, 0, 0.78, 0)`,
  outQuint: `cubic-bezier(0.22, 1, 0.36, 1)`,
  inOutQuint: `cubic-bezier(0.83, 0, 0.17, 1)`,
  inQuad: `cubic-bezier(0.11, 0, 0.5, 0)`,
  outQuad: `cubic-bezier(0.5, 1, 0.89, 1)`,
  inOutQuad: `cubic-bezier(0.45, 0, 0.55, 1)`,
  inQuart: `cubic-bezier(0.5, 0, 0.75, 0)`,
  outQuart: `cubic-bezier(0.25, 1, 0.5, 1)`,
  inOutQuart: `cubic-bezier(0.76, 0, 0.24, 1)`,
  inExpo: `cubic-bezier(0.7, 0, 0.84, 0)`,
  outExpo: `cubic-bezier(0.16, 1, 0.3, 1)`,
  inOutExpo: `cubic-bezier(0.87, 0, 0.13, 1)`,
  inBack: `cubic-bezier(0.36, 0, 0.66, -0.56)`,
  outBack: `cubic-bezier(0.34, 1.56, 0.64, 1)`,
  inOutBack: `cubic-bezier(0.68, -0.6, 0.32, 1.6)`
};
export const transitions = {
  easeOutCirc : `transform 600ms ${easings.outCirc}`,
  easeInCirc: `transform 600ms ${easings.inCirc}`,
  easeInOutCirc : `transform 600ms ${easings.inOutCirc}`,
  easeInSine: `transform 600ms ${easings.inSine}`,
  easeOutSine: `transform 600ms ${easings.outSine}`,
  easeInOutSine: `transform 600ms ${easings.inOutSine}`,
  easeInCubic: `transform 600ms ${easings.inCubic}`,
  easeOutCubic: `transform 600ms ${easings.outCubic}`,
  easeInOutCubic: `transform 600ms ${easings.inOutCubic}`,
  easeInQuint: `transform 600ms ${easings.inQuint}`,
  easeOutQuint: `transform 600ms ${easings.outQuint}`,
  easeInOutQuint: `transform 600ms ${easings.inOutQuint}`,
  easeInQuad: `transform 600ms ${easings.inQuad}`,
  easeOutQuad: `transform 600ms ${easings.outQuad}`,
  easeInOutQuad: `transform 600ms ${easings.inOutQuad}`,
  easeInQuart: `transform 600ms ${easings.inQuart}`,
  easeOutQuart: `transform 600ms ${easings.outQuart}`,
  easeInOutQuart: `transform 600ms ${easings.inOutQuart}`,
  easeInExpo: `transform 600ms ${easings.inExpo}`,
  easeOutExpo: `transform 600ms ${easings.outExpo}`,
  easeInOutExpo: `transform 600ms ${easings.inOutExpo}`,
  easeInBack: `transform 600ms ${easings.inBack}`,
  easeOutBack: `transform 600ms ${easings.outBack}`,
  easeInOutBack: `transform 600ms ${easings.inOutBack}`,
};

export const customTransition = (property, duration, timingFunction = easings.inSine, delay = '0ms') => {
  return `${property} ${duration} ${timingFunction} ${delay}`;
};