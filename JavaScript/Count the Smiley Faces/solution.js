// Solution with Regex

function countSmileys(arr) {
  const matches = arr.join("").match(/[:;][-~]?[D)]/g);
  return matches ? matches.length : 0;
}

// Solution with Object Lookup

function countSmileys(arr) {
  const validSmileys = {
    ":)": true,
    ";)": true,
    ":D": true,
    ";D": true,
    ":-D": true,
    ":~D": true,
    ":-)": true,
    ":~)": true,
    ";~D": true,
    ";~)": true,
    ";-D": true,
    ";-)": true,
  };
  return arr.filter((chars) => validSmileys[chars]).length;
}
