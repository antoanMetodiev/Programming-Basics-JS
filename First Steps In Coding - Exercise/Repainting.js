function repainting(input) {
    let nylon = Number(input[0]) * 1.50;
    let paint = Number(input[1]) * 14.50;
    let thinner = Number(input[2]) * 5;
    let hours = Number(input[3]);
    paint += paint * 0.10;
    nylon += 2 * 1.50;
    let allSum = (nylon + paint + thinner) + 0.40;
    let sumForWorkers = (allSum * 0.30) * hours;
    allSum += sumForWorkers;
    console.log(allSum);
}

repainting(["10 ",
"11 ",
"4 ",
"8 "]);