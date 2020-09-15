"use strict";







// append movies to the DOM



// hobby api link: https://gist.githubusercontent.com/carlelieser/884584d06b2d9429f321ec192f6dc7b5/raw/0888b5449ecda4787001b74811e645d0a74b8132/hobbies.json

function hashTabbar(id) {
    let array = [
        "loader", "login", "signin"
    ];

    for (const navn of array) {
        if (navn === id) {
            return true
        }
    }

    return false
}

// show and hide tabbar
function hideTabbar(hide) {
    let tabbar = document.querySelector('#tabbar');
    if (hide) {
        tabbar.classList.add("hide");
    } else {
        tabbar.classList.remove("hide");
    }
}