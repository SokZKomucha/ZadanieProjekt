function rwd(width) {
    if (width < 960) document.getElementById("style").href = "/sub-css-narrow";
    else document.getElementById("style").href = "/sub-css";
}

// Use width after resizing
window.addEventListener("resize", () => {
    rwd(window.outerWidth);
}) 

// Use initial width
rwd(window.outerWidth);