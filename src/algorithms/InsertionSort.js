export function InsertionSort(arr) {
  const steps = [];
  const a = [...arr];
  const size = a.length;

  for (let i = 1; i < size; i++) {
    let j = i;

    while (j > 0) {
      steps.push({ type: "compare", indices: [j - 1, j] });

      if (a[j] < a[j - 1]) {
        steps.push({ type: "swap", indices: [j - 1, j] });
        [a[j], a[j - 1]] = [a[j - 1], a[j]];
      } else {
        break;
      }
      j--;
    }
  }

  return steps;
}
