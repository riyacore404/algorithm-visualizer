import { BubbleSort } from "./BubbleSort";
import { SelectionSort } from "./SelectionSort";
import { InsertionSort } from "./InsertionSort";

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
  selection: {
    name: "Selection Sort",
    fn: SelectionSort,
    time: { 
      best: "O(n²)", 
      average: "O(n²)", 
      worst: "O(n²)" 
    },
    space: "O(1)",
    stable: false,
    inPlace: true,
  },
  insertion: {
    name: "Insertion Sort",
    fn: InsertionSort,
    time: { 
      best: "O(n)", 
      average: "O(n²)", 
      worst: "O(n²)" 
    },
    space: "O(1)",
    stable: true,
    inPlace: true,
  },
};
