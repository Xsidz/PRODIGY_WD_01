window.onscroll = function() {myFunction()};

function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    }
}