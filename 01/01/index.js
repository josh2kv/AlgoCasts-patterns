/**
 * The Average of All Contiguous Subarrays
 *
 * Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
 */

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

module.exports = findAveragesOfSubarrays;
