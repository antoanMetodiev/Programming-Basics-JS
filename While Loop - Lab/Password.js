function password(input) {
    let name = input[0];
    let password = input[1];

    let tryPassword = input[2];
    let isTrue = false;
    let indexCounter = 0;
    while (!(tryPassword === password)) {
        indexCounter++;
        tryPassword	= input[indexCounter];
    }
    if (isTrue || tryPassword === password) {
        console.log(`Welcome ${name}!`);
    }
}

password(["Gosho",
"secret",
"secret"]);
