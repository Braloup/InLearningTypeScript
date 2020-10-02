var foo = [1, 2];
var a;
var bar = { foo: "Foo", bar: 2 };
//let wrongBar: IFooBar = { foo: 1, bar: 2 };
// Déclaration
var FOoBAr = /** @class */ (function () {
    function FOoBAr() {
        this.FOo = "Blah";
        this.BAr = 21;
    }
    return FOoBAr;
}());
//Création d' une instance
var BAr = new FOoBAr();
console.log(BAr.BAr); //21
var FOOBAR = /** @class */ (function () {
    function FOOBAR(arg1, arg2) {
        this.FOO = arg1;
        this.BAR = arg2;
    }
    return FOOBAR;
}());
