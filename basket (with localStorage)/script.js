let content = document.querySelector('.content');

window.addEventListener('storage', function (e) {

    if (localStorage.length == 0) {

        let p = document.querySelector('.p');
        p.remove();
        let newP = document.createElement('p');
        newP.setAttribute('class', 'p');
        newP.innerHTML = 'You basket:' + '<br>' + 'empty';
        content.append(newP);

    } else {

        let mainArr = [];

        for (let key in localStorage) {

            if (!localStorage.hasOwnProperty(key)) {

                continue;

            } else {

                let tmp = JSON.parse(localStorage[key]);

                mainArr.push(tmp);

            }

        }

        let p = document.querySelector('.p');
        p.remove();

        let newP = document.createElement('p');
        let countQuantity = '';
        let countPrice = '';

        for (let i = 0; i < mainArr.length; i++) {

            newP.setAttribute('value', i + 1);
            newP.setAttribute('class', 'p');

            for (let key in mainArr[i]) {

                if (key == 'name') {

                    newP.innerHTML += mainArr[i][key];

                } else if (key == 'quantity' && mainArr[i][key] == 1) {

                    newP.innerHTML += '(' + mainArr[i][key] + ' item): ';

                    countQuantity += mainArr[i][key];
                    countQuantity = parseInt(countQuantity);


                } else if (key == 'quantity' && mainArr[i][key] !== 1) {

                    newP.innerHTML += '(' + mainArr[i][key] + ' items): ';

                    countQuantity += mainArr[i][key];
                    countQuantity = parseInt(countQuantity);

                } else {

                    newP.innerHTML += mainArr[i][key] + ' USD';

                    countPrice += mainArr[i][key];
                    countPrice = parseInt(countPrice);

                }

            }

            newP.innerHTML += '<br>';

        }

        if (countQuantity == 1) {

            newP.innerHTML += '<hr>' + '<br>' + 'Total ' + '(' + countQuantity + ' item): ' + countPrice + ' USD';

        } else {

            newP.innerHTML += '<hr>' + '<br>' + 'Total ' + '(' + countQuantity + ' items): ' + countPrice + ' USD';

        }


        content.append(newP);

    }



});



