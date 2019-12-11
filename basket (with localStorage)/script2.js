let buttonAdd = document.querySelector('#button_add');
let countAdd = 0;
let assArrAdd = {};

buttonAdd.onclick = () => {

    assArrAdd = {};
    countAdd++
    assArrAdd.name = 'Product№ 2';
    assArrAdd.quantity = countAdd;
    assArrAdd.price = 20 * countAdd;

    let newP = document.createElement('p');
    newP.setAttribute('class', 'count_items');

    for (let key in assArrAdd) {

        if (key == 'name') {

            newP.innerHTML += assArrAdd[key];

        } else if (key == 'quantity' && assArrAdd[key] == 1) {

            newP.innerHTML += '(' + assArrAdd[key] + ' item): ';

        } else if (key == 'quantity' && assArrAdd[key] !== 1) {

            newP.innerHTML += '(' + assArrAdd[key] + ' items): ';

        } else {

            newP.innerHTML += assArrAdd[key] + ' USD';
        }

    }

    let content = document.querySelector('.content');

    let delP = document.querySelector('.count_items');

    if (delP) {

        delP.remove();

    }

    content.append(newP);

    assArrAdd = JSON.stringify(assArrAdd);

    localStorage.setItem('2', assArrAdd);

}

let buttonDel = document.querySelector('#button_del');

buttonDel.onclick = () => {

    let delP = document.querySelector('.count_items');

    if (localStorage.getItem('2') == null) {

        return;

    } else {

        let assArrDel = JSON.parse(localStorage[2]);
        let tmp;

        for (let key in assArrDel) {

            tmp = assArrDel[key];

        }

        if (tmp == 20) {

            delP.remove();

            localStorage.removeItem('2');

            countAdd--;

        } else {

            for (let key in assArrDel) {

                if (key == 'name') {

                    continue;

                } else if (key == 'quantity') {

                    assArrDel.quantity = assArrDel[key] - 1;

                } else {

                    assArrDel.price = assArrDel[key] - 20;

                }

            }

            countAdd--;

            let newP = document.createElement('p');
            newP.setAttribute('class', 'count_items');

            for (let key in assArrDel) {

                if (key == 'name') {

                    newP.innerHTML += assArrDel[key];

                } else if (key == 'quantity' && assArrDel[key] == 1) {

                    newP.innerHTML += '(' + assArrDel[key] + ' item): ';

                } else if (key == 'quantity' && assArrDel[key] !== 1) {

                    newP.innerHTML += '(' + assArrDel[key] + ' items): ';

                } else {

                    newP.innerHTML += assArrDel[key] + ' USD';
                }

            }

            let content = document.querySelector('.content');

            delP.remove();

            content.append(newP);

            assArrDel = JSON.stringify(assArrDel);

            localStorage.setItem('2', assArrDel);

        }


    }


}



