const validatePIN = (pin) => /^(\d{4}|\d{6})$/.test(pin);
// ^ - match the entire string at the start and $ - at the end
// \d - match any string that has at least {4} or {6} numbers (digits)
