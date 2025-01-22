function toggleDropdown(event) {
    event.stopPropagation(); // Prevent the click from closing the dropdown
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

// Close the dropdown if the user clicks outside of it
window.onmouseover = function(event) {
    const dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block" && !event.target.matches('.dropbtn')) {
        dropdownContent.style.display = "none";
    }
};

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}