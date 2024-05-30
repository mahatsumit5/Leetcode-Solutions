function compose(functions) {
    return function (x) {
        for (let i = functions.length; i > 0; i--) {
            const fn = functions[i - 1];
        }
    };
}
const fn = compose([(x) => x + 1, (x) => 2 * x]);
console.log("a");
//# sourceMappingURL=index.js.map