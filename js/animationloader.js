"use strict";

class Loader {
    constructor() {
        this.loader = document.getElementById('loader');
    }

    show(show) {
        if (show) {
            this.loader.classList.remove("hide");
        } else {
            setTimeout(() => {
                this.loader.classList.add("hide");

            }, ) //husk 3400 her 
        }
    }
}

const loader = new Loader().show(false)
console.log(loader)