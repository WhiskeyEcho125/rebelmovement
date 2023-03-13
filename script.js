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
    console.log(currentHeight);
    if (currentHeight >= (height * 2)) {
        lastHeight = height * 2 + 1;
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('navbar-gold');
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('navbar-white');
        linkOne === null || linkOne === void 0 ? void 0 : linkOne.classList.add('navbar__links--red');
        linkOne === null || linkOne === void 0 ? void 0 : linkOne.classList.remove('navbar__links--black');
        linkTwo === null || linkTwo === void 0 ? void 0 : linkTwo.classList.add('navbar__links--red');
        linkTwo === null || linkTwo === void 0 ? void 0 : linkTwo.classList.remove('navbar__links--black');
        linkThree === null || linkThree === void 0 ? void 0 : linkThree.classList.add('navbar__links--red');
        linkThree === null || linkThree === void 0 ? void 0 : linkThree.classList.remove('navbar__links--black');
    }
    else if (currentHeight >= height && currentHeight < (height * 2)) {
        if (currentHeight > lastHeight) {
            navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('navbar-white');
            navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('navbar');
            linkOne === null || linkOne === void 0 ? void 0 : linkOne.classList.add('navbar__links--black');
            linkOne === null || linkOne === void 0 ? void 0 : linkOne.classList.remove('navbar__links');
            linkTwo === null || linkTwo === void 0 ? void 0 : linkTwo.classList.add('navbar__links--black');
            linkTwo === null || linkTwo === void 0 ? void 0 : linkTwo.classList.remove('navbar__links');
            linkThree === null || linkThree === void 0 ? void 0 : linkThree.classList.add('navbar__links--black');
            linkThree === null || linkThree === void 0 ? void 0 : linkThree.classList.remove('navbar__links');
        }
        else if (currentHeight < lastHeight) {
            navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('navbar-white--from-gold');
            navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('navbar-gold');
            linkOne === null || linkOne === void 0 ? void 0 : linkOne.classList.add('navbar__links--black');
            linkOne === null || linkOne === void 0 ? void 0 : linkOne.classList.remove('navbar__links--red');
            linkTwo === null || linkTwo === void 0 ? void 0 : linkTwo.classList.add('navbar__links--black');
            linkTwo === null || linkTwo === void 0 ? void 0 : linkTwo.classList.remove('navbar__links--red');
            linkThree === null || linkThree === void 0 ? void 0 : linkThree.classList.add('navbar__links--black');
            linkThree === null || linkThree === void 0 ? void 0 : linkThree.classList.remove('navbar__links--red');
        }
    }
    else if (currentHeight < height) {
        lastHeight = 0;
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('navbar');
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('navbar-white');
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('navbar-white--from-gold');
        linkOne === null || linkOne === void 0 ? void 0 : linkOne.classList.add('navbar__links');
        linkOne === null || linkOne === void 0 ? void 0 : linkOne.classList.remove('navbar__links--black');
        linkTwo === null || linkTwo === void 0 ? void 0 : linkTwo.classList.add('navbar__links');
        linkTwo === null || linkTwo === void 0 ? void 0 : linkTwo.classList.remove('navbar__links--black');
        linkThree === null || linkThree === void 0 ? void 0 : linkThree.classList.add('navbar__links');
        linkThree === null || linkThree === void 0 ? void 0 : linkThree.classList.remove('navbar__links--black');
    }
};
