export function MergeSort(array) {
  const steps = [];
  const arr = [...array];

  function mergeSort(l, r) {
    if (l >= r) return;

    const mid = Math.floor((l + r) / 2);
    mergeSort(l, mid);
    mergeSort(mid + 1, r);
    merge(l, mid, r);
  }

  function merge(l, m, r) {
    const left = arr.slice(l, m + 1);
    const right = arr.slice(m + 1, r + 1);

    let i = 0, j = 0, k = l;

    while (i < left.length && j < right.length) {
      steps.push({ type: "compare", indices: [l + i, m + 1 + j] });

      if (left[i] <= right[j]) {
        arr[k] = left[i];
        steps.push({ type: "overwrite", index: k, value: left[i] });
        i++;
      } else {
        arr[k] = right[j];
        steps.push({ type: "overwrite", index: k, value: right[j] });
        j++;
      }
      k++;
    }

    while (i < left.length) {
      arr[k] = left[i];
      steps.push({ type: "overwrite", index: k, value: left[i] });
      i++; k++;
    }

    while (j < right.length) {
      arr[k] = right[j];
      steps.push({ type: "overwrite", index: k, value: right[j] });
      j++; k++;
    }
  }

  mergeSort(0, arr.length - 1);
  return steps;
}