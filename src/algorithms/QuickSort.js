export function QuickSort(array) {
  const steps = [];
  const arr = [...array];

  function partition(low, high) {
    const pivot = arr[high];
    let i = low;

    for (let j = low; j < high; j++) {
      steps.push({ type: "compare", indices: [j, high] });

      if (arr[j] < pivot) {
        steps.push({ type: "swap", indices: [i, j] });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    steps.push({ type: "swap", indices: [i, high] });
    [arr[i], arr[high]] = [arr[high], arr[i]];

    return i;
  }

  function quickSort(low, high) {
    if (low < high) {
      const pi = partition(low, high);
      quickSort(low, pi - 1);
      quickSort(pi + 1, high);
    }
  }

  quickSort(0, arr.length - 1);
  return steps;
}