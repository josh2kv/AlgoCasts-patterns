function maxSubArrayOfSizeK(k, arr) {
  const sums = [];

  for (let i = 0; i < arr.length - k; i++) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }

    sums.push(sum);
  }

  return Math.max(...sums);
}
