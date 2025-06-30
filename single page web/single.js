let image = document.querySelectorAll(".pics");
image.forEach(function (x) {
    x.addEventListener("click", function () {
        document.getElementById("cut").src = x.src;
        document.getElementById("ruppee").innerHTML = x.dataset.price;
        document.getElementById("name").innerHTML = x.dataset.name;
    })
})
let more = document.getElementById("more");
more.addEventListener("click", function () {
    let picss = document.getElementById("pic");
    picss.style.display = "flex";

})