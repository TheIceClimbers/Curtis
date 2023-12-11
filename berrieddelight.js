alert("imce clibers");
console.log("I hope you enjoy learning JavaScript!");

let person = {
  name: "AmongUsImposter",
  age: 69,
  favoriteColor: "Pink"
};

function printToConsole(input) {
  window.alert(person.name+ person.age+ person.favoriteColor);
  console.log(person);
}

function birthday() {
  person.age = person.age+1;
  window.alert(person.age);
}
