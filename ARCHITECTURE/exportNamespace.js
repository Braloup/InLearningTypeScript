var space1;
(function (space1) {
    space1.a = "foo";
    function exportNamespace() {
        console.log("Export namespace");
    }
    space1.exportNamespace = exportNamespace;
})(space1 || (space1 = {}));
