// Croisement des types => Union: |
let a = (value1: string | Array<any>) => console.log(value1.length);

// Unions des types => croisement: &
interface Int1 {
  prop1: any;
  prop2: any;
}

interface Int2 {
  prop3: any;
}

let b: Int1 & Int2 = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
};

// Croisement des types => Union: |
let C: Int1 | Int2 = {
  prop1: 1,
  prop2: 2,
  //prop3: 3,
};

//Types génériques
let d: <T>(v: T) => T[] = (value) => [value];

interface Int3<T> {
  prop4: T;
  prop5: T[];
}

let e: Int3<number> = {
  prop4: 5,
  prop5: [42],
};

class Cl1<T> {
  constructor(public arg1: T, public arg2: T) {}

  toArray: () => T[] = () => [this.arg1, this.arg2];
}

let f = new Cl1(<number>1, 2);
f.toArray;
