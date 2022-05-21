const minhaDiv = document.createElement("div");

document.body.appendChild(minhaDiv);

minhaDiv.innerText = "div4";
minhaDiv.id = "div-4";
minhaDiv.classList.add("quadrado", "orange");

setTimeout(() => {
    const div3 = document.getElementById("div-3");
    div3.classList.add("purple")
    div3.classList.remove("blue")
}, 2000)