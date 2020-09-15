"use strict";

export default class Loader {
    constructor() {
        this.loader = document.getElementById('loader');
    }

    show(show) {
        if (show) {
            this.loader.classList.remove("hide");
        } else {
            setTimeout(() => {
                this.loader.classList.add("hide");

            }, 3000)
        }
    }
}