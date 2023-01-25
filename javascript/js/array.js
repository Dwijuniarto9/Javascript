let coba = function () {
    return "coba function";
}

let buah = [
    "apel",
    "mangga",
    "jeruk",
    10,
    coba(),
    (test = () => "hasil retur arrow function"),
    function nama() {
        return "wikwok";
    },
];

console.log(buah);

console.log(buah[0]);

for (let i in buah) {
    console.log(buah[i]);
}

console.log(buah[5]());

console.log(buah[6]());