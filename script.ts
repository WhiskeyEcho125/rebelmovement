var height = window.innerHeight;
var secondHeight = height * 2 - 100;
var lastHeight = 0;
console.log(height);
console.log(secondHeight);

window.onscroll = function () {
    var currentHeight = document.documentElement.scrollTop;
    var navbar = document.getElementById('navbar');
    var linkOne = document.getElementById('navbarLinkOne');
    var linkTwo = document.getElementById('navbarLinkTwo');
    var linkThree = document.getElementById('navbarLinkThree');
    var linkFour = document.getElementById('navbarLinkFour');

    console.log(currentHeight);
    
    if (currentHeight >= (height * 2)) {
        lastHeight = height * 2 + 1;
        navbar?.classList.add('navbar-gold'); navbar?.classList.remove('navbar-white');

        linkOne?.classList.add('navbar__links--red'); linkOne?.classList.remove('navbar__links--black');
        linkTwo?.classList.add('navbar__links--red'); linkTwo?.classList.remove('navbar__links--black');
        linkThree?.classList.add('navbar__links--red'); linkThree?.classList.remove('navbar__links--black');
        linkFour?.classList.add('navbar__links--red'); linkFour?.classList.remove('navbar__links--black');
    } else if (currentHeight >= height && currentHeight < (height * 2)) {
        if (currentHeight > lastHeight) {
            navbar?.classList.add('navbar-white'); navbar?.classList.remove('navbar');
    
            linkOne?.classList.add('navbar__links--black'); linkOne?.classList.remove('navbar__links');
            linkTwo?.classList.add('navbar__links--black'); linkTwo?.classList.remove('navbar__links');
            linkThree?.classList.add('navbar__links--black'); linkThree?.classList.remove('navbar__links');
            linkFour?.classList.add('navbar__links--black'); linkFour?.classList.remove('navbar__links');
        } else if (currentHeight < lastHeight) {
            navbar?.classList.add('navbar-white--from-gold'); navbar?.classList.remove('navbar-gold');
    
            linkOne?.classList.add('navbar__links--black'); linkOne?.classList.remove('navbar__links--red');
            linkTwo?.classList.add('navbar__links--black'); linkTwo?.classList.remove('navbar__links--red');
            linkThree?.classList.add('navbar__links--black'); linkThree?.classList.remove('navbar__links--red');
            linkFour?.classList.add('navbar__links--black'); linkFour?.classList.remove('navbar__links--red');
        }
    } else if (currentHeight < height) {        
        lastHeight = 0;
        navbar?.classList.add('navbar'); navbar?.classList.remove('navbar-white'); navbar?.classList.remove('navbar-white--from-gold');

        linkOne?.classList.add('navbar__links'); linkOne?.classList.remove('navbar__links--black');
        linkTwo?.classList.add('navbar__links'); linkTwo?.classList.remove('navbar__links--black');
        linkThree?.classList.add('navbar__links'); linkThree?.classList.remove('navbar__links--black');
        linkFour?.classList.add('navbar__links'); linkFour?.classList.remove('navbar__links--black');
    }
}