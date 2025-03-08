
function toggleBox(boxNumber) {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.display = 'none'); // Hide all boxes

    let box = document.getElementById("box" + boxNumber);
    box.style.display = "block"; // Show the selected box
}
