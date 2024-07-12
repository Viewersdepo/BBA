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
let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showNextItem() {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.add('active');
}

setInterval(showNextItem, 3000); // Change slide every 3 seconds

// Optional: Initial active class for the first item
items[0].classList.add('active');
