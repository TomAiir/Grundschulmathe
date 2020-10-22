alert('Grundschulmathe')



for (i = 0; i < 10; i++) {
const RandomNumber = () => Math.floor(Math.random()*20) + 1;  


    const number1 = RandomNumber()
    const number2 = RandomNumber()


    const result = number1 + number2;

    const userInput = prompt('Bitte geben Sie die Lösung aus ' + number1 + ' + ' + number2 + ' ein.' );

    

    if (userInput == result) {
        alert('Richtig ')
    }
    else {
        alert('Leider falsch ')
    }
}
