const maxSubArrayOfSizeK = require('./index');

test('maxSubArrayOfSizeK exists', () => {
  expect(typeof maxSubArrayOfSizeK).toEqual('function');
});

test('returns the maximum sum of the subarray of size "3"', () => {
  const arr = [2, 1, 5, 1, 3, 2];
  const K = 3;
  const answer = 9;

  const result = maxSubArrayOfSizeK(K, arr);

  expect(result).toEqual(answer);
});

test('returns the maximum sum of the subarray of size "2"', () => {
  const arr = [2, 3, 4, 1, 5];
  const K = 2;
  const answer = 7;

  const result = maxSubArrayOfSizeK(K, arr);

  expect(result).toEqual(answer);
});
