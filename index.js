/*
1. Lag en funksjon som tar i mot et tall, sjekker om tallet er
par eller oddetall, og returner enten "Odd" eller "Even"

f.eks:
console.log(oddOrEven(12))
--> skal vise "Even" i konsollen

2. Skriv en funksjon som tar i mot 2 parametre:

    - Et tall, som er et klokkeslett (0000 til 2359) og
    - Et navn, som er en string.
   
Funksjonen skal returne:

"Good night (navn)" hvis klokkeslettet er mellom 0000 og 0600
"Good morning (navn)" hvis klokkeslettet er mellom 0600 og 1200
"Good afternoon (navn)" hvis klokkeslettet er mellom 1200 og 1500
"Good day (navn)" hvis klokkeslettet er mellom 1500 og 1800
"Good evening (navn)" hvis klokkeslettet er mellom 1800 og 2359

f.eks:
console.log(greet(1251, "Gunnar"))
--> skal vise "Good afternoon Gunnar" i konsollen
*/

/* Checks whether a number sent to the function is even or odd, and then returns the answer as a string */
const oddOrEven = (number) => {
  return number % 2 === 0 ? "Even" : "Odd";
};

console.log("Odd or even?: " + oddOrEven(12));
console.log("Odd or even?: " + oddOrEven(123));

function greet(num, name) {
  console.log(num);
  if (num < 600) {
    return `Good night ${name}`;
  } else if (num < 1200) {
    return `Good morning ${name}`;
  } else if (num < 1500) {
    return `Good afternoon ${name}`;
  } else if (num < 1800) {
    return `Good day ${name}`;
  } else if (num < 2400) {
    return `Good evening ${name}`;
  } else {
    return "Not a valid input!";
  }
}

console.log(greet(0, "Gunnar"));

console.log(greet(599, "Marie"));
console.log(greet(600, "Marie"));

console.log(greet(1199, "Ole"));
console.log(greet(1200, "Ole"));

console.log(greet(1499, "Anne"));
console.log(greet(1500, "Anne"));

console.log(greet(1799, "Kristian"));
console.log(greet(1800, "Kristian"));

console.log(greet(2399, "Katrine"));
console.log(greet(2400, "Katrine"));

console.log(greet(1251, "Gunnar"));
