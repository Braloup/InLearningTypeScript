// Croisement des types => Union: |
var a = function (value1) { return console.log(value1.length); };
var b = {
    prop1: 1,
    prop2: 2,
    prop3: 3
};
// Croisement des types => Union: |
var C = {
    prop1: 1,
    prop2: 2
};
//Types génériques
var d = function (value) { return [value]; };
var e = {
    prop4: 5,
    prop5: [42]
};
var Cl1 = /** @class */ (function () {
    function Cl1(arg1, arg2) {
        var _this = this;
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.toArray = function () { return [_this.arg1, _this.arg2]; };
    }
    return Cl1;
}());
var f = new Cl1(1, 2);
f.toArray;
