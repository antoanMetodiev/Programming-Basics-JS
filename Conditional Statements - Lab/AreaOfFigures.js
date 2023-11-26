function areaOfFigures(input) {
    let figure = input[0];
    let firstSide;
    let secondSide;
    if  (figure === "square") {
       firstSide = Number(input[1])
       console.log((firstSide * firstSide).toFixed(3));
    } else if (figure === "rectangle") {
        firstSide = Number(input[1])
        secondSide = Number(input[2]);
        console.log((firstSide * secondSide).toFixed(3));
    } else if (figure === "circle") {
        firstSide = Number(input[1])
        console.log((Math.PI * (firstSide * firstSide)).toFixed(3));
    } else if (figure === "triangle") {
        firstSide = Number(input[1])
        secondSide = Number(input[2]);
        console.log(((firstSide * secondSide) / 2).toFixed(3));
    }
}

areaOfFigures(["triangle",
"4.5",
"20"]);
