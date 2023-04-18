function fruitsIntoBaskets(fruits) {
  let windowStart = 0,
    maxLength = 0,
    fruitFrequency = {};

  for (let windowEnd = windowStart; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];

    fruitFrequency[rightFruit] =
      rightFruit in fruitFrequency ? fruitFrequency[rightFruit] + 1 : 1;

    while (Object.keys(fruitFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      fruitFrequency[leftFruit]--;

      if (fruitFrequency[leftFruit] === 0) delete fruitFrequency[leftFruit];

      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}
