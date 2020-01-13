var nav = document.getElementById('main-logo');

window.onscroll = function () {

    if (window.pageYOffset > 94) {

        nav.style.height = "20px";
        nav.style.width = "132px";

    }
    else {
        nav.style.height = "60px";
        nav.style.width = "396px";
    }

}
