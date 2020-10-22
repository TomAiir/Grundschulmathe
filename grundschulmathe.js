alert('Grundschulmathe: Addition')


const RandomNumber = (max) => Math.floor(Math.random() * max) + 1;


function askAditionTask(mathFn, operatorLiteral) {
    const summand1 = RandomNumber(20);
    const summand2 = RandomNumber(20);

    const resultAdition = mathFn(summand1, summand2);

    const userInput = parseInt(
        prompt(`Bitte geben Sie die Lösung aus  ${summand1} ${operatorLiteral} ${summand2} ein.`),
        10
    );



    if (userInput === resultAdition) {
        pointsAdition++;

        alert('Richtig ' + pointsAdition + '/5');
    }
    else {
        alert('Leider falsch ' + pointsAdition + '/5');
    }
}

var i = 0;
var pointsAdition = 0;

for (i = 0; i < 5; i++) {

    askAditionTask((a, b) => { return a + b }, '+');

}

alert('Sie haben ' + pointsAdition + ' von 5 möglichen Punkten erreicht.')

var pointsSubtraction = 0;

if (pointsAdition >= 4) {
    alert('Sie haben Level 2 erreicht: Subtraktion')
    for (i = 0; i < 5; i++) {
        var subtracter1 = RandomNumber(20);
        var subtracter2 = RandomNumber(20);
        let resultSubtraction;
        let question;
        if (subtracter1 >= subtracter2) {
            resultSubtraction = subtracter1 - subtracter2
            question = `Bitte geben Sie die Lösung aus ${subtracter1} - ${subtracter2} ein.`
        }
        else {
            resultSubtraction = subtracter2 - subtracter1
            question = `Bitte geben Sie die Lösung aus ${subtracter2} - ${subtracter1} ein.`
        }

        var userInput = prompt(question);


        if (userInput == resultSubtraction) {
            pointsSubtraction++;

        }


        if (userInput == resultSubtraction) {
            alert('Richtig ' + pointsSubtraction + '/5')
        }
        else {
            alert('Leider falsch ' + pointsSubtraction + '/5')
        }
    }
}

alert('Sie haben ' + pointsSubtraction + ' von 5 möglichen Punkten erreicht.')

