const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a single character: ", (input) => {
  let char = input.toLowerCase(); // convert to lowercase to handle capital letters too

  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    console.log("It is vowel");
  } else {
    console.log("It is consonant");
  }

  readline.close();
});
<h3>maryam</h3>;
