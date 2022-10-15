"use strict";

document.addEventListener("DOMContentLoaded", function () {

    let modal = document.querySelector(".modal");
    let email;

    let submit = document.getElementById("submit");
    submit.addEventListener("click", function () {
        email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        if (email && password){
            modal.style.display = "flex";
            document.querySelector("#user_mail").innerHTML = `Please confirm account creation for ${email}`;
        }
    })

    let cancel = document.getElementById("cancel");
    cancel.addEventListener("click", function(){
        modal.style.display = "none";
    });


    let confirm = document.getElementById("confirm");
    confirm.addEventListener("click", function(){
        modal.style.display = "none";
        document.querySelector("form").style.display = "none";
        document.querySelector(".greetings").style.display = "flex";
        document.getElementById("greetings").innerHTML = `Hello there, ${email}`;

    });


})
