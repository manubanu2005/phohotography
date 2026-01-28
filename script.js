const images = document.querySelectorAll(".gallery-img");
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");

images.forEach (img => {
img.addEventListener("click", ()=> {
    overlayImg.src = img.src;
    overlay.classList.add("show")
});
});

overlay.addEventListener("click", ()=>{
    overlay.classList.remove("show");
    overlayImg.src = "";
});