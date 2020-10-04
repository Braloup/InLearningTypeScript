// tuples

let a: string[];
let t: [string, number, string?]; // LE point d'intérogation rend le typage optionnel.

//function rest(arg1: string, arg2: number, arg3: string) { }
//LA fonction ci dessus peut s'écrire comme ci dessous.

function rest(...tuple: [string, number, string]) {}
