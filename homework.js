function clickMe() {

    let username = document.getElementById("username");
    console.log(username);
    let a = username.value.trim(username);
    console.log(a);
    let usname = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    console.log(usname);
    let chat = document.getElementById("chat");
    chat.innerHTML = usname;


    let comments = document.getElementById("comments");
    let clean = comments.value.replace(/(xxx|viagra)/gi, "***");
    let cleanComment = document.querySelector("#clean-comment");
    cleanComment.innerHTML = clean;


    let date = document.querySelector('#date');

    let today = new Date();
    let now = today.toLocaleString();
    date.innerHTML = now;


    let yes = document.querySelector('#yes');

    yes.addEventListener('change', () => {
        if (yes.hasAttribute('checked') == false) {
            let usernameInput = document.getElementById('username-input');
            usernameInput.setAttribute('style', 'display: none;');
        }
    }

    )



    let imgSrc = document.getElementById("avatar");
    document.querySelector("#avatar-img").src = imgSrc.value;

}
