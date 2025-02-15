setTimeout(() => {
    document.getElementById("popup").classList.add("show");
}, 2000);

// Function to close the popup
function closePopup() {
    document.getElementById("popup").classList.remove("show");
}

// Function to open Google Form
function openForm() {
    window.open("https://forms.gle/VNjUQU3igurUxvp16", "_blank");
}