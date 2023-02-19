const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.style.color="blue";
}

function handleMouseEnter() {
    h1.innerText="Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText="Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundcolor="tomato";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no WIFI");
}

function handleWindowOnline() {
    alert("ALL GOOOD");
}



h1.addEventListener("click",handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("online",handleWindowOnline);
window.addEventListener("offline",handleWindowOffline);