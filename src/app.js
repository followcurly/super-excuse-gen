document.getElementById("ohshit").onclick = function() {
  let who = [
    "A ghost",
    "My imaginary friend",
    "A ninja",
    "The alien",
    "The time traveler",
    "A talking cat",
    "My evil twin",
    "The invisible man"
  ];
  let action = [
    "vaporized",
    "teleported",
    "enchanted",
    "bewitched",
    "exploded",
    "shrunk",
    "grew legs and ran away with",
    "turned into glitter"
  ];
  let what = [
    "my homework",
    "my phone",
    "the car",
    "my keys",
    "the remote",
    "my wallet",
    "my book",
    "my glasses",
    "my lunch",
    "my shoes"
  ];
  let when = [
    "before the class",
    "when I was abducted by aliens",
    "while I was time traveling",
    "during the zombie apocalypse",
    "while I was fighting ninjas",
    "during my magic show",
    "while I was invisible",
    "when I was in another dimension"
  ];

  let random1 = Math.floor(Math.random() * who.length);
  let random2 = Math.floor(Math.random() * action.length);
  let random3 = Math.floor(Math.random() * what.length);
  let random4 = Math.floor(Math.random() * when.length);

  let excuse =
    who[random1] +
    " " +
    action[random2] +
    " " +
    what[random3] +
    " " +
    when[random4];
  let excuseElement = document.querySelector("#excuse");

  excuseElement.innerHTML = excuse;
};
