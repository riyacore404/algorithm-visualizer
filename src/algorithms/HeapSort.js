export function HeapSort(array) {
  const steps = [];
  const arr = [...array];
  const n = arr.length;

  const heapify = (size, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < size) {
      steps.push({ type: "compare", indices: [largest, left] });
      if (arr[left] > arr[largest]) largest = left;
    }

    if (right < size) {
      steps.push({ type: "compare", indices: [largest, right] });
      if (arr[right] > arr[largest]) largest = right;
    }

    if (largest !== i) {
      steps.push({ type: "swap", indices: [i, largest] });
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(size, largest);
    }
  };

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(n, i);
  }

  // Extract elements
  for (let end = n - 1; end > 0; end--) {
    steps.push({ type: "swap", indices: [0, end] });
    [arr[0], arr[end]] = [arr[end], arr[0]];

    steps.push({ type: "heap-bound", index: end });
    heapify(end, 0);
  }

  steps.push({ type: "heap-bound-clear" });

  return steps;
}
