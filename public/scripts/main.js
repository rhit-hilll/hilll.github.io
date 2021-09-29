
//Preloads Images
var images = new Array();
function preloadImages(){
    for (i=0; i < preloadImages.arguments.length; i++){
         images[i] = new Image();
        images[i].src = preloadImages.arguments[i];
    }
}

preloadImages("avatar.jpg", "project1.png", "project2.png", "project3.png", "project4.png");

ScrollReveal().reveal('.reveal', { delay: 500 });
ScrollReveal().reveal('.email', { delay: 1000});