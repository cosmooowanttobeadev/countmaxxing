const decreasBtn = document.getElementById("decreasBtn");
const resetBtn = document.getElementById("resetBtn");
const increaceBtn = document.getElementById("increaceBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaceBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
};
decreasBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
};
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
};