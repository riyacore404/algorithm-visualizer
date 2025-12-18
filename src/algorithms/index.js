import { BubbleSort } from "./BubbleSort";
import { SelectionSort } from "./SelectionSort";
import { InsertionSort } from "./InsertionSort";
import { MergeSort } from "./MergeSort";
import { QuickSort } from "./QuickSort";
import { HeapSort } from "./HeapSort";
import { RadixSort } from "./RadixSort";
import { BucketSort } from "./BucketSort";

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
  merge: {
    name: "Merge Sort",
    fn: MergeSort,
    time: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)"
    },
    space: "O(n)",
    stable: true,
    inPlace: false
  },
  quick: {
    name: "Quick Sort",
    fn: QuickSort,
    time: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)"
    },
    space: "O(log n)",
    stable: false,
    inPlace: true
  },
  heap: {
    name: "Heap Sort",
    fn: HeapSort,
    time: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)"
    },
    space: "O(1)",
    stable: false,
    inPlace: true
  },
  radix: {
    name: "Radix Sort",
    fn: RadixSort,
    time: {
      best: "O(n * k)",
      average: "O(n * k)",
      worst: "O(n * k)"
    },
    space: "O(n + k)", 
    stable: true,      
    inPlace: false
  },
  bucket: {
    name: "Bucket Sort",
    fn: BucketSort,
    time: {
      best: "O(n * k)",
      average: "O(n * k)",
      worst: "O(n * k)"
    },
    space: "O(n + k)",
    stable: true,
    inPlace: false
  }
};
