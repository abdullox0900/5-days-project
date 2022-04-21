const elClock = document.querySelector(".clock");
const elButton = document.querySelectorAll(".format button");
const elInterval = setInterval(generateTime, 1000)

function generateTime() {
    const format = elClock.getAttribute("data-format");
    const date = new Date;
    let hour = date.getHours();
    let timeStatus = "";
    const min = date.getMinutes();
    const sec = date.getSeconds();

    if (format === "12") {
        timeStatus = (hour >= 12) ? "PM" : "AM";
        hour = (hour > 12) ? hour % 12 : hour;
    }
    elClock.innerHTML = `<h1>${hour} : ${min} : ${sec} ${timeStatus}</h1>`
}

elButton.forEach((button) => {
    button.addEventListener("click", () => {
        const format = button.getAttribute("data-format");
        elClock.setAttribute("data-format", format)
        generateTime();
    });
});
