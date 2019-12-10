let button2Add = document.querySelector('#button2_add');
let count2Add = 0;
let assArr2Add = {};

button2Add.onclick = () => {

    assArr2Add = {};
    count2Add++
    assArr2Add.name = 'Product№ 2';
    assArr2Add.quantity = count2Add;
    assArr2Add.price = 20 * count2Add;

    assArr2Add = JSON.stringify(assArr2Add);

    localStorage.setItem('2', assArr2Add);

}

let button2Del = document.querySelector('#button2_del');

button2Del.onclick = () => {

    if (localStorage.getItem('2') == null) {

        return;

    } else {

        let assArr2Del = JSON.parse(localStorage[2]);
        let tmp;

        for (let key in assArr2Del) {

            tmp = assArr2Del[key];

        }

        if (tmp == 20) {

            localStorage.removeItem('2');

            count2Add--;

        } else {

            for (let key in assArr2Del) {

                if (key == 'name') {

                    continue;

                } else if (key == 'quantity') {

                    assArr2Del.quantity = assArr2Del[key] - 1;

                } else {

                    assArr2Del.price = assArr2Del[key] - 20;

                }

            }

            count2Add--;

            assArr2Del = JSON.stringify(assArr2Del);

            localStorage.setItem('2', assArr2Del);

        }


    }


}



