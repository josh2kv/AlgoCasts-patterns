/**
 * The Average of All Contiguous Subarrays
 *
 * Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
 */

function find_averages_of_subarrays(K, arr) {
  const result = [];

  for (let i = 0; i < arr.length - K + 1; i++) {
    let sum = 0.0;

    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }

    result.push(sum / K);
  }

  return result;
}

module.exports = find_averages_of_subarrays;
