const iplTeams2026 = [
    {
        shortName: "CSK",
        fullName: "Chennai Super Kings",
        primaryColor: "#F9CD05",
        secondaryColor: "#1F3158",
        captain: "Ruturaj Gaikwad",
        trophies: 5,
    },
    {
        shortName: "MI",
        fullName: "Mumbai Indians",
        primaryColor: "#004BA0",
        secondaryColor: "#D1AB3E",
        captain: "Hardik Pandya",
        trophies: 5,
    },
    {
        shortName: "RCB",
        fullName: "Royal Challengers Bengaluru",
        primaryColor: "#DA291C",
        secondaryColor: "#000000",
        captain: "Faf du Plessis",
        trophies: 0,
    },
    {
        shortName: "KKR",
        fullName: "Kolkata Knight Riders",
        primaryColor: "#3A225D",
        secondaryColor: "#D4AF37",
        captain: "Shreyas Iyer",
        trophies: 3,
    },
    {
        shortName: "RR",
        fullName: "Rajasthan Royals",
        primaryColor: "#EA1A85",
        secondaryColor: "#004BA0",
        captain: "Sanju Samson",
        trophies: 1,
    },
    {
        shortName: "DC",
        fullName: "Delhi Capitals",
        primaryColor: "#004C93",
        secondaryColor: "#E31837",
        captain: "Rishabh Pant",
        trophies: 0,
    },
    {
        shortName: "SRH",
        fullName: "Sunrisers Hyderabad",
        primaryColor: "#FF822A",
        secondaryColor: "#000000",
        captain: "Pat Cummins",
        trophies: 1,
    },
    {
        shortName: "PBKS",
        fullName: "Punjab Kings",
        primaryColor: "#ED1B24",
        secondaryColor: "#A7A9AC",
        captain: "Shikhar Dhawan",
        trophies: 0,
    },
    {
        shortName: "GT",
        fullName: "Gujarat Titans",
        primaryColor: "#1B2133",
        secondaryColor: "#AFAFAF",
        captain: "Shubman Gill",
        trophies: 1,
    },
    {
        shortName: "LSG",
        fullName: "Lucknow Super Giants",
        primaryColor: "#003DA5",
        secondaryColor: "#F58220",
        captain: "KL Rahul",
        trophies: 0,
    },
];

const btn = document.querySelector("button");
const main = document.querySelector("main");
const card = document.getElementById("card");
const smallName = document.getElementById("short-name");
const longName = document.getElementById("long-name");
const captainName = document.getElementById("captain");
const trophy = document.getElementById("trophy");

btn.addEventListener("click", () => {
    const num = Math.floor(Math.random() * iplTeams2026.length);
    const {
        shortName,
        fullName,
        primaryColor,
        secondaryColor,
        captain,
        trophies,
    } = iplTeams2026[num];
    console.log(shortName);
    smallName.innerHTML = shortName;
    longName.innerHTML = fullName;
    captainName.innerHTML = captain;
    trophy.innerHTML = `Trophies: ${trophies}`;

    main.style.backgroundColor = secondaryColor;
    card.style.backgroundColor = primaryColor;
});
