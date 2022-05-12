const elBtn = document.getElementById("btn");
const elContainer = document.querySelector(".container");

elBtn.addEventListener("click", function () {
    const elTextNote = document.createElement("div");

    elTextNote.setAttribute("class", "text-note")
    elTextNote.textContent = "Ura Click Btn";

    elContainer.appendChild(elTextNote);

    setTimeout(() => {
        elTextNote.remove();
    }, 3000)
});