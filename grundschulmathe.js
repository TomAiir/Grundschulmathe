alert('Grundschulmathe: Addition')


const RandomNumber = (max) => Math.floor(Math.random() * max) + 1;


function askAdditionTask(mathFn, operatorLiteral) {
    const summand1 = RandomNumber(20);
    const summand2 = RandomNumber(20);

    const resultAddition = mathFn(summand1, summand2);

    const userInput = parseInt(
        prompt(`Bitte geben Sie die Lösung aus  ${summand1} ${operatorLiteral} ${summand2} ein.`),
        10
    );



    if (userInput === resultAddition) {
        pointsAddition++;

        alert('Richtig ' + pointsAddition + '/5');
    }
    else {
        alert('Leider falsch ' + pointsAddition + '/5');
    }
}

var i = 0;
var pointsAddition = 0;

for (i = 0; i < 5; i++) {

    askAdditionTask((a, b) => { return a + b }, '+');

}

alert('Sie haben ' + pointsAddition + ' von 5 möglichen Punkten erreicht.')

var pointsSubtraction = 0;

if (pointsAddition >= 4) {
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
    alert('Sie haben ' + pointsSubtraction + ' von 5 möglichen Punkten erreicht.')
}



var pointsMultiplication = 0;

if (pointsSubtraction >= 4) {
    alert('Sie haben Level 3 erreicht: Multiplikation')
    for (i = 0; i < 5; i++) {
        var multiplier1 = RandomNumber(10);
        var multiplier2 = RandomNumber(10);
        
        
        resultMultiplication = multiplier1 * multiplier2;
            
        

            const userInput = parseInt(
                prompt(`Bitte geben Sie die Lösung aus  ${multiplier1} * ${multiplier2} ein.`),
                10
            );


        if (userInput === resultMultiplication) {
            pointsMultiplication++;

        }


        if (userInput === resultMultiplication) {
            alert('Richtig ' + pointsMultiplication + '/5')
        }
        else {
            alert('Leider falsch ' + pointsMultiplication + '/5')
        }
    }
    alert('Sie haben ' + pointsMultiplication + ' von 5 möglichen Punkten erreicht.')
}


var pointsDivison = 0;

if (pointsMultiplication >= 4) {
    alert('Sie haben Level 4 erreicht: Division')
    for (i = 0; i < 5; i++) {
        var dividend2 = RandomNumber(10, 1);
        var dividend1 = (RandomNumber(10, 1)* dividend2);
        let resultDivision;
        let question;
        if (dividend1 >= dividend2) {
            resultDivision = dividend1 / dividend2
            question = `Bitte geben Sie die Lösung aus ${dividend1} / ${dividend2} ein.`
        }
        else {
            resultDivision = dividend2 / dividend1
            question = `Bitte geben Sie die Lösung aus ${dividend2} / ${dividend1} ein.`
        }

        var userInput = prompt(question);


        if (userInput == resultDivision) {
            pointsDivison++;

        }


        if (userInput == resultDivision) {
            alert('Richtig ' + pointsDivison + '/5')
        }
        else {
            alert('Leider falsch ' + pointsDivison + '/5')
        }
    }

    var overallPoints = (pointsAddition + pointsSubtraction + pointsMultiplication + pointsDivison);

    alert('Sie haben ' + pointsDivison + ' von 5 möglichen Punkten erreicht.')

    
    alert('Sie haben insgesamt ' + (overallPoints) + ' von 20 möglichen Punkten erreicht.')

    if (pointsDivison >= 4) {
        alert('Glückwunsch! Sie haben bestanden. ')
    }
    else {
        alert('Schade! Sie haben leider nicht bestanden. ')
    }
}
