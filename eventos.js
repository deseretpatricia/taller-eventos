const button = document.getElementById("botonSaludo");
const container = document.getElementById("container");

button.onclick = function () {
    alert("Hola!");
};

container.addEventListener("click", function () {
    alert("Hola! Soy el div");
});
