"use strict";




//TABBAR FJERNES VED ANIMATION OG LOGIN OG SIGNUP
function hashTabbar(id) {
    let array = [
        "loader", "login", "signup"
    ];

    for (const navn of array) {
        if (navn === id) {
            return true

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


            // KOPIER HER MAJA 
            //gå til forrige side funktion

            function goBack() {
                window.history.back();
            }

//SLUTTER HER MAJA