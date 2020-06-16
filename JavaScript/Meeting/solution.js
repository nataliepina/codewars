const meeting = (s) =>
  "(" +
  s
    .toUpperCase()
    .split(";")
    .map((name) => name.split(":").reverse().join(", "))
    .sort()
    .join(")(") +
  ")";
