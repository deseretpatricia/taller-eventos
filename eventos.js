const button = document.getElementById("botonSaludo");
const container = document.getElementById("container");

button.onclick = function () {
    event.stopPropagation();
    alert("Hola!");
};

container.addEventListener("click", function () {
    alert("Hola! Soy el div");
});
