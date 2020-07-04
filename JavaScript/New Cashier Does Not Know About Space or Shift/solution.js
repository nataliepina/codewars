function getOrder(input) {
  let menu = [
    "Burger",
    "Fries",
    "Chicken",
    "Pizza",
    "Sandwich",
    "Onionrings",
    "Milkshake",
    "Coke",
  ];
  let result = "";

  for (let i = 0; i < menu.length; i++) {
    while (input.includes(menu[i].toLowerCase())) {
      input = input.replace(menu[i].toLowerCase(), "");
      result += menu[i] + " ";
    }
  }

  result = result.slice(0, -1);

  return result;
}
