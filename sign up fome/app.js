
let signupBtn = document.getElementById("signinBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";  
    title.innerHTML = "sign in";
    signinBtn.classList.add("disable")
    signinBtn.classList.remove("disable")
}