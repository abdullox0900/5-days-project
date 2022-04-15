const elCursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function (e) {
    elCursor.style.left = e.pageX + "px";
    elCursor.style.top = e.pageY + "px";
    elCursor.setAttribute("data-fromTop", (elCursor.offsetTop - scrollY));
    // console.log(e);
});

window.addEventListener("scroll", function () {
    const fromTop = elCursor.getAttribute("data-fromTop");
    elCursor.style.top = scrollY + parseInt(fromTop) + "px"
});

window.addEventListener("click", function () {
    if (elCursor.classList.contains("click")) {
        elCursor.classList.remove("click");
        void elCursor.offsetWidth
        elCursor.classList.add("click");
    } else {
        elCursor.classList.add("click");
    }
});
