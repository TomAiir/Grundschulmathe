alert('Grundschulmathe')


const RandomNumber = (max) => Math.floor(Math.random() * max) + 1;


function askAdditionTask(mathFn, operatorLiteral) {
    const number1 = RandomNumber(20);
    const number2 = RandomNumber(20);

    const result = mathFn(number1 , number2);

    const userInput = parseInt(
        prompt(`Bitte geben Sie die Lösung aus  ${number1} ${operatorLiteral} ${number2} ein.`),
        10
    );


    
    if (userInput === result) {
        points++;

        alert('Richtig ' + points + '/5');
    }
    else {
        alert('Leider falsch ' + points + '/5');
    }
}

var i = 0;
var points = 0;

for (i = 0; i < 5; i++) {

    askAdditionTask((a,b) => {return a+b}, '+');

}



