import { clamp } from '../animations/utils';

export const AnimationEasing = ({
  frame,
  start = 0,
  duration = 1,
  easing,
}: {
  frame: number;
  start: number;
  duration: number;
  easing: (t: number) => number;
}) => {
  const animationProgress = clamp(
    (frame - (start ?? 0)) / (duration ?? 1),
    0,
    1
  );

  return easing(animationProgress);
};
