let button1 = document.querySelector('#button1');
let count1 = 0;
let assArr1 = {};

button1.onclick = () => {

    assArr1 = {};
    count1++
    assArr1.name = 'Product№ 1';
    assArr1.quantity = count1;
    assArr1.price = 10 * count1;

    assArr1 = JSON.stringify(assArr1);

    localStorage.setItem('1', assArr1);

}