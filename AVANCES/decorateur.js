//Décorateurs de class => fonctions exécutées à chaque création instance de class
// Pour compiler tsc --experimentalDecorators decorateur.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var d1 = function (constructeur) { return console.log("Décorateur appelé."); };
var Cl2 = /** @class */ (function () {
    function Cl2(arg1, arg2) {
        this.arg1 = arg1;
        this.arg2 = arg2;
    }
    Cl2 = __decorate([
        d1
    ], Cl2);
    return Cl2;
}());
var g = new Cl2(1, 2);
