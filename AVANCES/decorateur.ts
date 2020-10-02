//Décorateurs de class => fonctions exécutées à chaque création instance de class
// Pour compiler tsc --experimentalDecorators decorateur.ts

let d1 = (constructeur) => console.log("Décorateur appelé.");

@d1
class Cl2<T> {
  constructor(public arg1: T, public arg2: T) {}
}

let g = new Cl2(1, 2);

//But => ajout annotations et metadata
//Attacher une évaluation par fonction à une classe, méthode, accesseur, propriété ou paramètre
// Syntaxe @ + fonction évaluant l'expression

//Voir decoprop.ts => Décorateurs de propriétés
