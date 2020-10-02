var testTypeError = function (humain) {
    return console.log(humain.name.toUpperCase());
};
var h1 = {
    name: "fooBar1"
};
var h2 = {
    name: "fooBar2"
};
testTypeError(h1);
console.log("h1: executed");
testTypeError(h2);
console.log("h2: executed");
