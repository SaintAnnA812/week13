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

    //удаление поля имени
    let yes = document.querySelector('#yes');
    yes.addEventListener('change', () => {
        console.log(yes);
        if (yes.hasAttribute(checked) == false) {

            let usernameInput = document.getElementById('username-input');
            usernameInput.setAttribute('style', 'display: none;');
        }
    }
    )

    //подстановка имени пользователя
    username.addEventListener('change', () => {
        if (username.value == "") {
            chat.value.innerHTML = 'Name';
            console.log(chat);
        }
    }
    )

    //замена аватара
    /*comments.addEventListener('change', () => {
        if (comments.value != "") {
            avatar.src = imgSrc.value;

        }
        else {



        }
    }

    )*/

}
