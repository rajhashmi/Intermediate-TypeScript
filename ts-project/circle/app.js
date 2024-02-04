function getRandomColor() {
    var hue = Math.floor(Math.random() * 361);
    var saturation = 100;
    var lightness = 50;
    return "hsl(".concat(hue, ", ").concat(saturation, "%, ").concat(lightness, "%)");
}
function getRandomSize(min, max) {
    return Math.random() * (max - min) + min;
}
function createCircle() {
    var circle = document.createElement('div');
    var size = getRandomSize(10, 200);
    circle.classList.add("circle");
    circle.style.width = "".concat(size, "px");
    circle.style.height = "".concat(size, "px");
    circle.style.backgroundColor = getRandomColor();
    return circle;
}
var currentCircle = createCircle();
document.body.appendChild(currentCircle);
document.addEventListener("mousemove", function (e) {
    currentCircle.style.left = "".concat(e.clientX - currentCircle.offsetWidth / 2, "px");
    currentCircle.style.top = "".concat(e.clientY - currentCircle.offsetHeight / 2, "px");
});
document.body.addEventListener('click', function (e) {
    currentCircle = createCircle();
    currentCircle.style.left = "".concat(e.clientX - parseFloat(currentCircle.style.width) / 2, "px");
    currentCircle.style.top = "".concat(e.clientY - parseFloat(currentCircle.style.height) / 2, "px");
    document.body.appendChild(currentCircle);
});
