const waterButton = document.getElementById("waterButton");
const sunButton = document.getElementById("sunButton");
const plant = document.getElementById("plant");

waterButton.addEventListener("click", function() {
    plant.textContent = "🌿";
});

sunButton.addEventListener("click", function() {
    plant.textContent = "🌳";
});