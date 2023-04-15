function findAveragesOfSubarrays(K, arr) {
  const result = [];

  for (let i = 0; i < arr.length - K + 1; i++) {
    let sum = 0;

    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }

    result.push(sum / K);
  }

  return result;
}
