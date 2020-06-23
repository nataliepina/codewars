function decipherThis(str) {
  return str
    .split(" ")
    .map((word) => {
      return word
        .replace(/^\d+/, (char) => String.fromCharCode(char))
        .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2");
    })
    .join(" ");
}
