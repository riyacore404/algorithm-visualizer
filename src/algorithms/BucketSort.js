export function BucketSort(array) {
  const steps = [];
  const arr = [...array];

  const n = arr.length;
  if (n === 0) return steps;

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const bucketCount = Math.floor(Math.sqrt(n)) || 1;
  const buckets = Array.from({ length: bucketCount }, () => []);

  for (let i = 0; i < n; i++) {
    const idx = Math.floor(((arr[i] - min) / (max - min + 1)) * bucketCount);
    buckets[idx].push(arr[i]);
    steps.push({ type: "bucket-add", bucket: idx, value: arr[i], index: i });
    steps.push({ type: "highlight", indices: [i] });
  }

  let offset = 0;
  for (let b = 0; b < bucketCount; b++) {
    const bucket = buckets[b];
    for (let i = 1; i < bucket.length; i++) {
      let key = bucket[i];
      let j = i - 1;
      while (j >= 0 && bucket[j] > key) {
        bucket[j + 1] = bucket[j];
        steps.push({
          type: "bucket-swap",
          bucket: b,
          indices: [j + 1, j],
        });
        j--;
      }
      bucket[j + 1] = key;
    }
  }

  let arrIndex = 0;
  for (let b = 0; b < bucketCount; b++) {
    const bucket = buckets[b];
    for (let val of bucket) {
      arr[arrIndex] = val;
      steps.push({ type: "overwrite", index: arrIndex, value: val });
      arrIndex++;
    }
  }

  return steps;
}
