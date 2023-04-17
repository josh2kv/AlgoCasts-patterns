const fn = require('./index');

const SAMPLES = [
  {
    INPUT: ['araaci', 2],
    OUTPUT: 4,
  },
  {
    INPUT: ['araaci', 1],
    OUTPUT: 2,
  },
  {
    INPUT: ['cbbebi', 3],
    OUTPUT: 5,
  },
];

test('function exists', () => {
  expect(typeof fn).toEqual('function');
});

test('sample 1', () => {
  const result = fn(SAMPLES[0].INPUT[0], SAMPLES[0].INPUT[1]);

  expect(result).toEqual(SAMPLES[0].OUTPUT);
});

test('sample 2', () => {
  const result = fn(SAMPLES[1].INPUT[0], SAMPLES[1].INPUT[1]);

  expect(result).toEqual(SAMPLES[1].OUTPUT);
});

test('sample 3', () => {
  const result = fn(SAMPLES[2].INPUT[0], SAMPLES[2].INPUT[1]);

  expect(result).toEqual(SAMPLES[2].OUTPUT);
});
