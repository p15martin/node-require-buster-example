module.exports = {
    nodeRequire: require,
    baseUrl: "com/experiencecraftsmanship/busted",
    "packages": [
        {
            name: "math",
            location: "math",
            main: "Math"
        },
        {
            name: "add",
            location: "algorithm",
            main: "Add"
        }
     ]
};