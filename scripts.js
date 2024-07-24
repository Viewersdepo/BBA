// Function to update the year in the footer
function updateYear() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Call the function to update the year when the page loads
updateYear();


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
