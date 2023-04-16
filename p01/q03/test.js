const smallestSubArrayWithGivenSum = require('./index');

const SAMPLES = [
  {
    INPUT: [7, [2, 1, 5, 2, 3, 2]],
    OUTPUT: 2,
  },
  {
    INPUT: [7, [2, 1, 5, 2, 8]],
    OUTPUT: 1,
  },
  {
    INPUT: [8, [3, 4, 1, 1, 6]],
    OUTPUT: 3,
  },
];

test('function exists', () => {
  expect(typeof smallestSubArrayWithGivenSum).toEqual('function');
});

test('sample 1', () => {
  const result = smallestSubArrayWithGivenSum(
    SAMPLES[0].INPUT[0],
    SAMPLES[0].INPUT[1]
  );

  expect(result).toEqual(SAMPLES[0].OUTPUT);
});

test('sample 2', () => {
  const result = smallestSubArrayWithGivenSum(
    SAMPLES[1].INPUT[0],
    SAMPLES[1].INPUT[1]
  );

  expect(result).toEqual(SAMPLES[1].OUTPUT);
});

test('sample 3', () => {
  const result = smallestSubArrayWithGivenSum(
    SAMPLES[2].INPUT[0],
    SAMPLES[2].INPUT[1]
  );

  expect(result).toEqual(SAMPLES[2].OUTPUT);
});
