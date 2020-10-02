let foo: Array<number> = [1, 2];

let a: {
  prop1: string;
  prop2: number;
};

// Déclaration
interface IFooBar {
  foo: string;
  bar: number;
}

let bar: IFooBar = { foo: "Foo", bar: 2 };
//let wrongBar: IFooBar = { foo: 1, bar: 2 };

// Déclaration
class FOoBAr {
  constructor() {}
  FOo = "Blah";
  BAr = 21;
}

//Création d' une instance
let BAr = new FOoBAr();
console.log(BAr.BAr); //21
