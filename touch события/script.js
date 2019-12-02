// Task 1 Создайте блок. Добавьте на него событие touchstart. Выведите на экран слово touch если событие сработает.

let block1 = document.querySelector('#block1');
let out1 = document.querySelector('#out1');

block1.addEventListener('touchstart', touch1);

function touch1() {

    out1.textContent += 'touch';

}

// Task 2 Создайте блок. Добавьте на него событие touchstart. Выведите на экран число срабатываний события.

let block2 = document.querySelector('#block2');
let out2 = document.querySelector('#out2');
let count2 = 0;

block2.addEventListener('touchstart', touch2);

function touch2() {

    count2++
    out2.textContent = count2;

}

// Task 3 Создайте 2-а блока. Добавьте на них событие touchstart. Выведите на экран номер блока на котором сработало событие.

let block3_1 = document.querySelector('#block3_1');
let block3_2 = document.querySelector('#block3_2');
let out3_2 = document.querySelector('#out3_2');

block3_1.addEventListener('touchstart', touch3_1);
block3_2.addEventListener('touchstart', touch3_2);

function touch3_1() {

    out3_2.textContent = '3_1';

}

function touch3_2() {

    out3_2.textContent = '3_2';

}

// Task 4 Создайте блок и кнопку. При нажатии кнопки - добавляйте событие ontouchstart на блок. При событии происходит вывод текста touch на экран.



let block4 = document.querySelector('#block4');
let out4 = document.querySelector('#out4');
let button4 = document.querySelector('#button4');

button4.onclick = () => {

    block4.ontouchstart = () => {

        out4.textContent += 'touch';

    }

}

// Task 5 Дана кнопка. При ее нажатии очищайте событие ontouchstart на блоке из предыдущего задания.

let button5 = document.querySelector('#button5');

button5.onclick = () => {

    block4.ontouchstart = () => {

        return false;

    }

}

// Task 12 Мини проект. Добавьте touch события так, чтобы при клике на маленькой картинке она появлялась в большом блоке. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен. В текстовое поле выводится текст из атрибута data-text изображения. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива img12 = [1.png, 2.png, 3.png, 4.png, 5.png]

let block12 = document.querySelectorAll('.block12');

let img12 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

let block12Big = document.querySelector('#block12_big');

let name12 = document.querySelector('#name12');

let imgNewBig = document.createElement('img');
imgNewBig.setAttribute('src', img12[0]);
imgNewBig.setAttribute('data-text', change12(img12[0]));
name12.textContent = imgNewBig.getAttribute('data-text');
imgNewBig.style.width = '100px';
imgNewBig.style.height = '100px';
block12Big.append(imgNewBig);

for (let i = 0; i < block12.length; i++) {

    for (let k = 0; k < img12.length; k++) {

        if (i == k) {

            let imgNew = document.createElement('img');
            imgNew.setAttribute('src', img12[i]);
            imgNew.setAttribute('data-text', i + 1);
            block12[i].append(imgNew);

            imgNew.ontouchstart = () => {

                imgNewBig.removeAttribute('src');
                imgNewBig.setAttribute('src', img12[i]);
                imgNewBig.removeAttribute('data-text');
                imgNewBig.setAttribute('data-text', change12(img12[i]));
                name12.textContent = imgNewBig.getAttribute('data-text');

            }

        }

    }

}

let buttonPrev12 = document.querySelector('#button12_1');
let buttonNext12 = document.querySelector('#button12_2');

buttonNext12.ontouchstart = () => {

    let tmp12 = imgNewBig.getAttribute('src');

    for (let i = 0; i < img12.length; i++) {

        if (img12[i] == tmp12 && i < img12.length - 1) {

            imgNewBig.removeAttribute('src');
            imgNewBig.setAttribute('src', img12[i + 1]);
            imgNewBig.setAttribute('data-text', change12(img12[i + 1]));
            name12.textContent = imgNewBig.getAttribute('data-text');

        } else if (img12[i] == tmp12 && i == img12.length - 1) {

            imgNewBig.removeAttribute('src');
            imgNewBig.setAttribute('src', img12[0]);
            imgNewBig.setAttribute('data-text', change12(img12[0]));
            name12.textContent = imgNewBig.getAttribute('data-text');

        }


    }

}


buttonPrev12.ontouchstart = () => {

    let tmp12 = imgNewBig.getAttribute('src');

    for (let i = img12.length - 1; i >= 0; i--) {

        if (img12[i] == tmp12 && i > 0) {

            imgNewBig.removeAttribute('src');
            imgNewBig.setAttribute('src', img12[i - 1]);
            imgNewBig.setAttribute('data-text', change12(img12[i - 1]));
            name12.textContent = imgNewBig.getAttribute('data-text');

        } else if (img12[i] == tmp12 && i == 0) {

            imgNewBig.removeAttribute('src');
            imgNewBig.setAttribute('src', img12[img12.length - 1]);
            imgNewBig.setAttribute('data-text', change12(img12[img12.length - 1]));
            name12.textContent = imgNewBig.getAttribute('data-text');

        }


    }

}

function change12(a) {

    if (a == '1.jpg') {

        return 'One';

    } else if (a == '2.jpg') {

        return 'Two';

    } else if (a == '3.jpg') {

        return 'Three';

    } else if (a == '4.jpg') {

        return 'Four';

    } else {

        return 'Five';

    }

}











