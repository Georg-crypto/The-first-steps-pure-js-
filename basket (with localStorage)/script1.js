let button1Add = document.querySelector('#button1_add');
let count1Add = 0;
let assArr1Add = {};

button1Add.onclick = () => {

    assArr1Add = {};
    count1Add++
    assArr1Add.name = 'Product№ 1';
    assArr1Add.quantity = count1Add;
    assArr1Add.price = 10 * count1Add;

    assArr1Add = JSON.stringify(assArr1Add);

    localStorage.setItem('1', assArr1Add);

}

let button1Del = document.querySelector('#button1_del');

button1Del.onclick = () => {

    if (localStorage.getItem('1') == null) {

        return;

    } else {

        let assArr1Del = JSON.parse(localStorage[1]);
        let tmp;

        for (let key in assArr1Del) {

            tmp = assArr1Del[key];

        }

        if (tmp == 10) {

            localStorage.removeItem('1');

            count1Add--;

        } else {

            for (let key in assArr1Del) {

                if (key == 'name') {

                    continue;

                } else if (key == 'quantity') {

                    assArr1Del.quantity = assArr1Del[key] - 1;

                } else {

                    assArr1Del.price = assArr1Del[key] - 10;

                }

            }

            count1Add--;

            assArr1Del = JSON.stringify(assArr1Del);

            localStorage.setItem('1', assArr1Del);

        }


    }


}



