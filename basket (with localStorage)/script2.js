let button2 = document.querySelector('#button2');
let count2 = 0;
let assArr2 = {};

button2.onclick = () => {

    assArr2 = {};
    count2++
    assArr2.name = 'Product№ 2';
    assArr2.quantity = count2;
    assArr2.зкшсу = 20 * count2;

    assArr2 = JSON.stringify(assArr2);

    localStorage.setItem('2', assArr2);

}