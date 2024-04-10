let buttons = document.querySelector("button");
console.log(buttons);

let body = document.querySelector("body");
let nav = document.querySelector("nav");
let footer = document.querySelector("footer");
let currMode = "light";

buttons.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "black";
        // document.body.style.backgroundColor = "black";
        body.classList.add("dark");
        body.classList.remove("hidden");
        body.classList.remove("light");
        nav.classList.add("dark");
        nav.classList.remove("light-nav");
        footer.classList.add("dark");
        footer.classList.remove("light-footer");

    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        nav.classList.add("light-nav");
        nav.classList.remove("dark");
        footer.classList.add("light-footer");
        footer.classList.remove("dark");
    }
});


