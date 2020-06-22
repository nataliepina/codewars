// solution 1
function isIntArray(arr) {
  if (arr.includes(NaN)) {
    return false;
  }

  return arr.every((i) => typeof i === "number");
}

// solution 2
let isIntArray = (arr) => !!arr && arr.every(Number.isInteger);
