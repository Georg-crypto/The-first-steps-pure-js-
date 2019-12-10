let button5Add = document.querySelector('#button5_add');
let count5Add = 0;
let assArr5Add = {};

button5Add.onclick = () => {

    assArr5Add = {};
    count5Add++
    assArr5Add.name = 'Product№ 5';
    assArr5Add.quantity = count5Add;
    assArr5Add.price = 50 * count5Add;

    assArr5Add = JSON.stringify(assArr5Add);

    localStorage.setItem('5', assArr5Add);

}

let button5Del = document.querySelector('#button5_del');

button5Del.onclick = () => {

    if (localStorage.getItem('5') == null) {

        return;

    } else {

        let assArr5Del = JSON.parse(localStorage[5]);
        let tmp;

        for (let key in assArr5Del) {

            tmp = assArr5Del[key];

        }

        if (tmp == 50) {

            localStorage.removeItem('5');

            count5Add--;

        } else {

            for (let key in assArr5Del) {

                if (key == 'name') {

                    continue;

                } else if (key == 'quantity') {

                    assArr5Del.quantity = assArr5Del[key] - 1;

                } else {

                    assArr5Del.price = assArr5Del[key] - 50;

                }

            }

            count5Add--;

            assArr5Del = JSON.stringify(assArr5Del);

            localStorage.setItem('5', assArr5Del);

        }


    }


}



