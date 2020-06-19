const kebabize = (str) =>
  str
    .replace(/[0-9]/g, "")
    .split(/(?=[A-Z])/)
    .join("-")
    .toLowerCase();
