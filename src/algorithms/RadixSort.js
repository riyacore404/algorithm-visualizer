export function RadixSort(array) {
  const steps = [];
  const arr = [...array];

  const getMax = (arr) => Math.max(...arr);

  const countingSort = (exp) => {
    const output = new Array(arr.length).fill(0);
    const count = new Array(10).fill(0);

    // Count occurrences
    for (let i = 0; i < arr.length; i++) {
      const digit = Math.floor(arr[i] / exp) % 10;
      count[digit]++;
      steps.push({ type: "highlight", indices: [i] });
    }

    // Cumulative count
    for (let i = 1; i < 10; i++) count[i] += count[i - 1];

    // Build output array
    for (let i = arr.length - 1; i >= 0; i--) {
      const digit = Math.floor(arr[i] / exp) % 10;
      output[count[digit] - 1] = arr[i];
      steps.push({ type: "overwrite", index: count[digit] - 1, value: arr[i] });
      count[digit]--;
    }

    // Copy back
    for (let i = 0; i < arr.length; i++) arr[i] = output[i];
  };

  const max = getMax(arr);
  let exp = 1;
  while (Math.floor(max / exp) > 0) {
    countingSort(exp);
    exp *= 10;
  }

  return steps;
}