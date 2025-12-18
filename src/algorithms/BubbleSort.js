export const BubbleSort = (arr) => {
  const steps = [];
  const a = [...arr];
  const size = a.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      // to compare successive indices
      steps.push({
        type: "compare",
        indices: [j, j + 1],
      });

      if (a[j] > a[j + 1]) {
        // swapping
        [a[j], a[j + 1]] = [a[j + 1], a[j]];

        // record swap step
        steps.push({
          type: "swap",
          indices: [j, j + 1],
        });
      }
    }
  }

  return steps;
};
