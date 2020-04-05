'use strict'

const isNum = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const getRandomNum = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//debugger;
//console.log(getRandomNum(0,100));

const getCounter = function() {
    let counter = 1;
    return function() {
        return counter++;
    }
};

const gameRandom = function(attemps) {
    debugger;
    const randomNum = Number (getRandomNum(1, 100));
    //console.log('Загаданное число' + randomNum);

    const counter = getCounter();

    return (function checkNumber () {
        const count = counter();
        const leftAttemts = attemps - count;
        //console.log(count);
        const userNumber = prompt('Попробуй угадать число');
        if (isNum(userNumber)) {
            let repeat = false;
            if (count < attemps){
                console.log( count + ' ' + count);
                const num = +userNumber;
                if (num > randomNum) {
                    alert('Загаданное число меньше. ' + 'Осталось попыток ' + leftAttemts);
                    return checkNumber();
                }
                if (num < randomNum) {
                    alert('Загаданное число больше.'  + 'Осталось попыток ' + leftAttemts);
                    return checkNumber();
                }
                repeat = confirm('Вы молодец, угадали число! Хотите сыграть еще?');

            }
            else {
                repeat = confirm('Количество попыток закончилось. Хотите сыграть еще?'); 
            }
            if (repeat) gameRandom(attemps);
        }
        else {
            //if ((attemps - count - 1))    
            alert("Введите число!");
            checkNumber();
        }
        alert('Пока друг');
    }());
};

gameRandom(10);

