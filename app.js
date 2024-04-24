

const buttons = document.querySelectorAll("#btn");
const menuBackdrop = document.querySelector("#menuBackdrop");
const menuBackdropParent = document.querySelector("#menuBackdropParent");
const heroImage = document.querySelector("#heroImage")
const slideOverMenu = document.querySelector("#slideOverMenu");
const images = ["./assets/haircut_img_1.jpeg","./assets/haircut_img_2.jpeg","./assets/haircut_img_3.jpeg","./assets/haircut_img_4.jpeg"]
const bookmark = document.querySelector('.bookmark')

buttons.forEach(function(button){
    button.addEventListener('click', function(){
        // Toggle the 'hidden' class for the menu backdrop and slide-over menu
        menuBackdrop.classList.toggle('hidden');
        menuBackdropParent.classList.toggle('hidden');
        slideOverMenu.classList.toggle('hidden');
    });
});

bookmark.addEventListener('click',function(){
    menuBackdrop.classList.toggle('hidden');
    menuBackdropParent.classList.toggle('hidden');
    slideOverMenu.classList.toggle('hidden');
})

window.addEventListener('load', function(){
    
    console.log(heroImage.src);
    randomImage = Math.floor(Math.random()* images.length)
    console.log(randomImage)
    heroImage.src = images[randomImage]
})