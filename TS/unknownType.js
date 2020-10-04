var x; // Bcp plus sécurisé que any
var y;
y.length;
//x.length => ne fonctionne pas en l'état
var z = y;
//let Zz: string = x; => ne fonctionne pas en l'état
if ("string" === typeof X) {
    x.length;
    var Zz = x;
}
