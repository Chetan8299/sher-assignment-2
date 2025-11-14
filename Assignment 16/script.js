const h1 = document.querySelector("h1");
const inc = document.getElementById("inc");
const dec = document.getElementById("dec");

let a = 0;

inc.addEventListener("click", () => {
    a++;
    h1.innerHTML = a;
});

dec.addEventListener("click", () => {
    a--;
    h1.innerHTML = a;
});
