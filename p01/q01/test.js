const fn01 = require('./index');

test('function exists', () => {
  expect(typeof fn01).toEqual('function');
});

test('function returns the average of all contiguous subarrays of size "5" in an array of "9" elements', () => {
  const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
  const K = 5;
  const answer = [2.2, 2.8, 2.4, 3.6, 2.8];

  const result = fn01(K, arr);

  expect(result).toEqual(answer);
});
