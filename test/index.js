//Даты

/*let now = new Date();
console.log(now);

let timestamp = new Date(24 * 3600 * 1000);
console.log(timestamp);

let date = new Date('2023-05-30');
console.log(date);

let num = new Date(2023, 4, 30);
console.log(num);

console.log(num.getFullYear());
console.log(num.getMonth() + 1);
console.log(num.getDay());

console.log(`${num.getDay()}. ${num.getMonth() + 1}. ${num.getFullYear()}`);


num.setFullYear(2023);
console.log(num);

let options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC'
};
console.log(new Date().toLocaleString('ru', options));

let diff = new Date() - date;//new Date() = Date.now()
console.log(diff / 1000 / 3600);*/

//Условия
function check() {
    let result = document.getElementById('test').value;

    if (result == "") {
        alert('Ваше поле не заполнено');
    }
}

function compare(a, b) {
    if (a > b) {
        console.log(a);
        return a;
    }
    else {
        return b;
    }
}

function compare3(a, b) {
    if (a > b && a > c) {
        console.log(a);
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else {
        return c;
    }
}

function checkAge(age) {
    if (age >= 18)
        alert('Всё ок');
    else
        alert('Вход запрещён');

    //тенантный оператор
    (age >= 18) ? alert('Всё ок') : alert('Вход запрещён');
}



function weekDayName(number) {

    let name = '';
    switch (number) {
        case 1: name = 'Понедельник'; break;
        case 2: name = 'Вторник'; break;
        case 3: name = 'Среда'; break;
        case 4: name = 'Четверг'; break;
        case 5: name = 'Пятница'; break;
        case 6: name = 'Суббота'; break;
        case 7: name = 'Воскресенье'; break;

        default: name = 'Такого дня недели не существует';
    }

    return name;
}

