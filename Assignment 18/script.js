let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = [
    "I love coding",
    "JS is Love",
    "I am proud Sheryians",
    "Harsh bhaiya ki Jai",
    "Sarthak bhaiya OP",
];

btn.addEventListener("click", () => {
    let div = document.createElement("div");

    let ele = Math.floor(Math.random() * arr.length);
    let x = Math.floor(Math.random() * 80);
    let y = Math.floor(Math.random() * 80);
    let rotate = Math.floor(Math.random() * 360);
    let scale = Math.floor(Math.random() * 3) + 1;

    div.innerHTML = arr[ele];

    div.style.position = "absolute";
    div.style.left = x + "%";
    div.style.top = y + "%";
    div.style.rotate = rotate + "deg";
    div.style.scale = scale;

    main.appendChild(div);
});
