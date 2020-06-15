// Initial Solution

function abbreviate(string) {
  return string.replace(/[a-z]+/gi, function (word) {
    const length = word.length;
    return length < 4 ? word : word[0] + (length - 2) + word[length - 1];
  });
}

// Solution with Regex

function abbreviate(string) {
  return string.replace(/\w{4,}/g, function (word) {
    return word[0] + (word.length - 2) + word.slice(-1);
  });
}
