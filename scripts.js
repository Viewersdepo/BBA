// Function to update the year in the footer
function updateYear() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Call the function to update the year when the page loads
updateYear();

// Function to toggle navigation menu on small screens
function toggleNav() {
    const navList = document.getElementById('nav-list');
    if (navList.style.display === "block") {
        navList.style.display = "none";
    } else {
        navList.style.display = "block";
    }
}
