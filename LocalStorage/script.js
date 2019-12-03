// Task 1 Создайте функцию которая записывает в LS ключ 5 со значением 11. Запускается ф-я по кнопкуе b-1.

let button1 = document.querySelector('#button1');

t1();

function t1() {

    button1.onclick = () => {

        localStorage.setItem('5', 11);

    }

}

// Task 2 Создайте функцию которая записывает в LS массив [7,6,5]. Запускается ф-я по кнопкуе b-2.

let button2 = document.querySelector('#button2');

let arr2 = [7, 6, 5];

t2();

function t2() {

    button2.onclick = () => {

        localStorage.setItem('arr2', JSON.stringify(arr2));

    }

}

// Task 3 При нажатии кнопки выведите из LS сохранненный массив из предыдущей задачи. Выведите на экран в формате ключб двоеточие пробел значение перенос строки.

let button3 = document.querySelector('#button3');
let out3 = document.querySelector('#out3');

t3();

function t3() {

    button3.onclick = () => {

        let tmp = localStorage.getItem('arr2');

        tmp = JSON.parse(tmp);

        for (let key in tmp) {

            out3.innerHTML += key + ': ' + tmp[key] + '<br>';

        }


    }

}

// Task 4 Создайте функцию которая записывает в LS массив  {hello: world, hi:mahai}. Запускается ф-я по кнопке.

let button4 = document.querySelector('#button4');

let arr4 = {

    hello: 'world',

    hi: 'mahai'

};

t4();

function t4() {

    button4.onclick = () => {

        localStorage.setItem('arr4', JSON.stringify(arr4));

    }

}

// Task 5 При нажатии кнопки выведите из LS сохранненный массив из предыдущей задачи. Выведите на экран в формате ключ, двоеточие пробел значение перенос строки.



let button5 = document.querySelector('#button5');
let out5 = document.querySelector('#out5');

t5();

function t5() {

    button5.onclick = () => {

        let tmp = localStorage.getItem('arr4');

        tmp = JSON.parse(tmp);

        for (let key in tmp) {

            out5.innerHTML += key + ': ' + tmp[key] + '<br>';

        }


    }

}

// Task 6 Создайте функцию которая очищает весь LS. Запуск по кнопке

let button6 = document.querySelector('#button6');

t6();

function t6() {

    button6.onclick = () => {

        localStorage.clear();

    }

}