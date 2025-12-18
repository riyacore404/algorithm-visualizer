export function SelectionSort(arr) {
  const steps = [];
  const a = [...arr];
  const size = a.length;

  for (let i = 0; i < size - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < size; j++) {
      steps.push({ type: "compare", indices: [minIdx, j] });

      if (a[j] < a[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      steps.push({ type: "swap", indices: [i, minIdx] });
      [a[i], a[minIdx]] = [a[minIdx], a[i]];
    }
  }

  return steps;
}
