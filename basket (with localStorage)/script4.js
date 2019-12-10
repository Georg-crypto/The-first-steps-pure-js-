let button4Add = document.querySelector('#button4_add');
let count4Add = 0;
let assArr4Add = {};

button4Add.onclick = () => {

    assArr4Add = {};
    count4Add++
    assArr4Add.name = 'Product№ 4';
    assArr4Add.quantity = count4Add;
    assArr4Add.price = 40 * count4Add;

    assArr4Add = JSON.stringify(assArr4Add);

    localStorage.setItem('4', assArr4Add);

}

let button4Del = document.querySelector('#button4_del');

button4Del.onclick = () => {

    if (localStorage.getItem('4') == null) {

        return;

    } else {

        let assArr4Del = JSON.parse(localStorage[4]);
        let tmp;

        for (let key in assArr4Del) {

            tmp = assArr4Del[key];

        }

        if (tmp == 40) {

            localStorage.removeItem('4');

            count4Add--;

        } else {

            for (let key in assArr4Del) {

                if (key == 'name') {

                    continue;

                } else if (key == 'quantity') {

                    assArr4Del.quantity = assArr4Del[key] - 1;

                } else {

                    assArr4Del.price = assArr4Del[key] - 40;

                }

            }

            count4Add--;

            assArr4Del = JSON.stringify(assArr4Del);

            localStorage.setItem('4', assArr4Del);

        }


    }


}



