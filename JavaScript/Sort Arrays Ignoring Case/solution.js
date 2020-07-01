// input: names - unsorted strings
// output: case-agnostic sort

const sortme = (names) => {
  return names.sort((a, b) => {
    return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1;
  });
};
