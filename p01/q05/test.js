const fn = require('./index');

const SAMPLES = [
  {
    INPUT: [['A', 'B', 'C', 'A', 'C']],
    OUTPUT: 3,
  },
  {
    INPUT: [['A', 'B', 'C', 'B', 'B', 'C']],
    OUTPUT: 5,
  },
];

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

test('sample 1', () => {
  const result = fn(SAMPLES[0].INPUT[0]);

  expect(result).toEqual(SAMPLES[0].OUTPUT);
});

test('sample 2', () => {
  const result = fn(SAMPLES[1].INPUT[0]);

  expect(result).toEqual(SAMPLES[1].OUTPUT);
});
