function longestSubStringWithKDistinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let windowEnd = windowStart; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    charFrequency[rightChar] =
      rightChar in charFrequency ? charFrequency[rightChar] + 1 : 1;

    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;

      if (charFrequency[leftChar] === 0) delete charFrequency[leftChar];

      windowStart++;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}
