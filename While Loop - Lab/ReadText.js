function readText(input) {

    let word = input[0];
    let indexCounter = 0;
    while (!(word === "Stop")) {
        console.log(word);
        indexCounter++;
        word = input[indexCounter];
    }
}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);