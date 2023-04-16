function maxSubArrayOfSizeK(k, arr) {
  let windowSum = 0;
  let windowStart = 0;
  let maxSum = 0;

  for (let windowEnd = windowStart; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);

      windowSum -= arr[windowStart];
      windowStart++;
    }
  }

  return maxSum;
}
