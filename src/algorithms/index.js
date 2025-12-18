import { BubbleSort } from "./BubbleSort";

export const ALGORITHMS = {
  bubble: {
    name: "Bubble Sort",
    fn: BubbleSort,
    time: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)",
    },
    space: "O(1)",
    stable: true,
    inPlace: true,
  },
};
