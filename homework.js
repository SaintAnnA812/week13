//удаление поля Имя
let yes = document.querySelector('#yes');
let no = document.querySelector('#no');
let usernameInput = document.getElementById('username-input');

yes.addEventListener('click', () => {
    usernameInput.style.display = 'block';
}
)
no.addEventListener('click', () => {
    usernameInput.style.display = 'none';
}
)


function clickMe() {

    let username = document.getElementById("username");

    let a = username.value.trim(username);

    let usname = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();

    let chat = document.getElementById("chat");
    chat.innerHTML = usname;


    let comments = document.getElementById("comments");
    let clean = comments.value.replace(/(xxx|viagra)/gi, "***");
    let cleanComment = document.querySelector("#clean-comment");
    cleanComment.innerHTML = clean;

    let imgSrc = document.getElementById("avatar");
    document.querySelector("#avatar-img").src = imgSrc.value;



    //добавление текущей даты
    let date = document.querySelector('#date');
    let today = new Date();
    let now = today.toLocaleString();
    date.innerHTML = now;

    //подстановка имени пользователя
    function changeMe() {
        let username = document.getElementById("username").value;
        let chat = document.getElementById("chat");

        if (username === "") {
            chat.innerHTML = 'Username';
        }

    }
    changeMe();


    function changeImg() {
        let comments = document.getElementById("comments").value;
        let emptyImg = document.getElementById('free-avatar0');


        if (comments === "") {
            let freeAvatar = document.getElementById('free-avatar');
            freeAvatar.src = './image/random1.png';
            let freeAvatar1 = document.getElementById('free-avatar1');
            freeAvatar1.src = './image/random2.png';
            let freeAvatar2 = document.getElementById('free-avatar2');
            freeAvatar2.src = './image/random3.png';
            let freeAvatar3 = document.getElementById('free-avatar3');
            freeAvatar3.src = './image/random4.png';
            let freeAvatar4 = document.getElementById('free-avatar4');
            freeAvatar4.src = './image/random5.png';
            let img = ['freeAvatar.src', 'freeAvatar1.src', 'freeAvatar2.src', 'freeAvatar3.src', 'freeAvatar4.src'];
            let randomImg = Math.floor(Math.random() * 5);

            emptyImg.src = './image/' + img[randomImg];
        }

    }
    changeImg();
}


clickMe();




//задание со звездочкой
function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return 'прямо сейчас';
    }
    console.log(formatDate(new Date(new Date - 1)));
    // "прямо сейчас"


    let sec = Math.floor(diff / 1000);

    if (sec < 60) {
        return sec + ' сек. назад';
    }
    console.log(formatDate(new Date(new Date - 30 * 1000)));// "30 сек. назад"

    let min = Math.floor(diff / 60000);
    if (min < 60) {
        return min + ' мин. назад';
    }

    console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"


    /* let d = date;
 
     d = [
         '0' + d.getDate(),
         '0' + (d.getMonth() + 1),
         '' + d.getFullYear(),
         '0' + d.getHours(),
         '0' + d.getMinutes()
     ].map(component => component.slice(-2));
 
     return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
 */


}


//console.log(formatDate(new Date(new Date - 86400 * 4 * 1000))); //вчерашняя дата

formatDate(date);