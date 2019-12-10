let button3Add = document.querySelector('#button3_add');
let count3Add = 0;
let assArr3Add = {};

button3Add.onclick = () => {

    assArr3Add = {};
    count3Add++
    assArr3Add.name = 'Product№ 3';
    assArr3Add.quantity = count3Add;
    assArr3Add.price = 30 * count3Add;

    assArr3Add = JSON.stringify(assArr3Add);

    localStorage.setItem('3', assArr3Add);

}

let button3Del = document.querySelector('#button3_del');

button3Del.onclick = () => {

    if (localStorage.getItem('3') == null) {

        return;

    } else {

        let assArr3Del = JSON.parse(localStorage[3]);
        let tmp;

        for (let key in assArr3Del) {

            tmp = assArr3Del[key];

        }

        if (tmp == 30) {

            localStorage.removeItem('3');

            count3Add--;

        } else {

            for (let key in assArr3Del) {

                if (key == 'name') {

                    continue;

                } else if (key == 'quantity') {

                    assArr3Del.quantity = assArr3Del[key] - 1;

                } else {

                    assArr3Del.price = assArr3Del[key] - 30;

                }

            }

            count3Add--;

            assArr3Del = JSON.stringify(assArr3Del);

            localStorage.setItem('3', assArr3Del);

        }


    }


}



