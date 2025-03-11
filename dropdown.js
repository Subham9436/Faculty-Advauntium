let closeDropdownTimer;

function toggleDropdown(event) {
    event.stopPropagation(); // Prevent the click from closing the dropdown
    const dropdownContent = document.getElementById("dropdownContent");
    
    if (dropdownContent.classList.contains('show')) {
        // If it's already shown, clear the timer and hide it
        clearTimeout(closeDropdownTimer);
        dropdownContent.classList.remove('show');
    } else {
        // Show the dropdown and clear any existing timer
        clearTimeout(closeDropdownTimer);
        dropdownContent.classList.add('show');
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    const dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.classList.contains('show') && !event.target.matches('.dropbtn') && !dropdownContent.contains(event.target)) {
        // Set a timer to close the dropdown after a delay
        closeDropdownTimer = setTimeout(() => {
            dropdownContent.classList.remove('show');
        }, 300); // Adjust the delay time (in milliseconds) as needed
    }
};