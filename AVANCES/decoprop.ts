//Décorateurs de propriétés

let d02 = (constructeur) => console.log("Décorateur appelé.");
let d03: PropertyDecorator = (prototype, name) => {
  console.log(prototype);
  console.log(name);
};

@d02
class Cl3<T> {
  constructor(public arg1: T, public arg2: T) {}
  @d03
  prop01: string = "foo";
}

let X = new Cl3(1, 2);

// Jouer le sript transpilé dans la conssole d'un navigateur permet de visualiser son action
// d3 est instancié avant d2.
