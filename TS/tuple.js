// tuples
var a;
var t; // LE point d'intérogation rend le typage optionnel.
//function rest(arg1: string, arg2: number, arg3: string) { }
//LA fonction ci dessus peut s'écrire comme ci dessous.
function rest() {
    var tuple = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tuple[_i] = arguments[_i];
    }
}
