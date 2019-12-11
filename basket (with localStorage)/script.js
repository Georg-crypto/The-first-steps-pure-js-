let content = document.querySelector('.content');

window.addEventListener('storage', function (e) {

    if (localStorage.length == 0) {

        let p = document.querySelectorAll('.p');

        for (let i = 0; i < p.length; i++) {

            p[i].remove();

        }

        let newP = document.createElement('p');
        newP.setAttribute('class', 'p');
        newP.innerHTML = 'Your basket:' + '<br>' + 'empty';
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

        let p = document.querySelectorAll('.p');

        for (let i = 0; i < p.length; i++) {

            p[i].remove();

        }

        let countQuantity = '';
        let countPrice = '';

        for (let i = 0; i < mainArr.length; i++) {

            let newP = document.createElement('p');

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

            content.append(newP);

        }


        if (countQuantity == 1) {

            let newP = document.createElement('p');
            newP.setAttribute('class', 'p');
            newP.innerHTML += '<hr>' + '<br>' + 'Total ' + '(' + countQuantity + ' item): ' + countPrice + ' USD';
            content.append(newP);

        } else {

            let newP = document.createElement('p');
            newP.setAttribute('class', 'p');
            newP.innerHTML += '<hr>' + '<br>' + 'Total ' + '(' + countQuantity + ' items): ' + countPrice + ' USD';
            content.append(newP);

        }

    }


});





