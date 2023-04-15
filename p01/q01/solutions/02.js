function findAveragesOfSubarrays(K, arr) {
  const result = [];
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = windowStart; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= K - 1) {
      result.push(windowSum / K);
      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return result;
}
