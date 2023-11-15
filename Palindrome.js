function palindrome(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return 'invalid value';
  }

  if (str.includes(' ')) return 'invalid value';
  const invert = [];
  const arr = str.split('');

  for (letter of arr) {
    invert.unshift(letter);
  }

  if (invert.join('') === arr.join('')) {
    return true;
  }

  return false;
}

console.log(palindrome('radar'));
