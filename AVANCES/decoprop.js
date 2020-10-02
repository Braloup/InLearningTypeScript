//Décorateurs de propriétés
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var d02 = function (constructeur) { return console.log("Décorateur appelé."); };
var d03 = function (prototype, name) {
    console.log(prototype);
    console.log(name);
};
var Cl3 = /** @class */ (function () {
    function Cl3(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.prop01 = "foo";
    }
    __decorate([
        d03
    ], Cl3.prototype, "prop01");
    Cl3 = __decorate([
        d02
    ], Cl3);
    return Cl3;
}());
var X = new Cl3(1, 2);
