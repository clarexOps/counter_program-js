const countLabel = document.getElementById("count");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;

decreaseBtn.onclick = function () {
    count--
    countLabel.textContent = count;
}
