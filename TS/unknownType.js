var x; // Bcp plus sécurisé que any
var y;
y.length;
//x.length => ne fonctionne pas en l'état
var z = y;
//let Zz: string = x; => ne fonctionne pas en l'état
if (isString(x)) {
    x.length;
    var z_1 = x;
}
function isString(value) {
    return "string" === typeof
}
