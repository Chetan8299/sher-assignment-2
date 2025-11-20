const inner = document.querySelector(".inner");
const percentage = document.querySelector("#percentage");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    btn.style.pointerEvents = "none";
    btn.innerHTML = "Downloading";
    btn.style.opacity = 0.6;
    let grow = 0;

    let intTime = 50 + Math.trunc(Math.random() * 50);

    let int = setInterval(() => {
        inner.style.width = ++grow + "%";
        percentage.innerHTML = grow + "%";
    }, intTime);

    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = "Downloaded";
        console.log(`file downloaded in ${intTime / 10} seconds`);
    }, intTime * 100);
});
