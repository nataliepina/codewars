function streetFighterSelection(fighters, position, moves) {
  const boundY = fighters.length - 1;
  const boundX = fighters[0].length - 1;

  let [y, x] = position;

  const controls = {
    right: () => (x === boundX ? (x = 0) : x++),
    left: () => (x ? x-- : (x = boundX)),
    up: () => (y ? y-- : y),
    down: () => (y < boundY ? y++ : y),
  };

  return moves.map((move) => {
    controls[move]();
    return fighters[y][x];
  });
}

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];

moves = ["up", "left", "right", "left", "left"];

streetFighterSelection(fighters, [0, 0], moves); // ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
