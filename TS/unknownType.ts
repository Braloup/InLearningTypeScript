let x: unknown; // Bcp plus sécurisé que any
let y: any;

y.length;
//x.length => ne fonctionne pas en l'état

let z: string = y;
//let Zz: string = x; => ne fonctionne pas en l'état

if (isString(x)) {
  x.length;
  let z: string = x;
}

function isString(value: unknown): value is string {
  return "string" === typeof
}