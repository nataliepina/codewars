const validate = (password) => (/^(?=._[A-Z])(?=._[a-z])(?=.\*[0-9])\w{6,}\$/.test(password));
