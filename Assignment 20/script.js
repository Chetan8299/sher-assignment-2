const image = document.querySelector(".image");
const heart = document.querySelector("i");

image.addEventListener("dblclick", () => {
    heart.style.opacity = 1;
    heart.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

    setTimeout(() => {
        heart.style.transform = "translate(-50%, -400%) scale(1) rotate(0deg)";
    }, 1000);

    setTimeout(() => {
        heart.style.opacity = 0;
    }, 1200);

    setTimeout(() => {
        heart.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
    }, 1500);
});
