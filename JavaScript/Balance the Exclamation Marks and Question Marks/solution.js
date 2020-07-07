function balance(left, right) {
  const weight = (s) =>
    [...s]
      .map((c) => (c === "!" ? 2 : c === "?" ? 3 : 0))
      .reduce((s, x) => s + x, 0);
  let difference = weight(left) - weight(right);
  return difference === 0 ? "Balance" : diff > 0 ? "Left" : "Right";
}
