let accesseurs = {
  get prop01() {
    console.log("prop 01");
  },
  set prop02(value) {
    console.log("prop 02");
  },
};

console.log("test");

let aa = accesseurs.prop01;
accesseurs.prop02 = "foo";
