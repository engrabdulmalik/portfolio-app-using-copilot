// Function to toggle the navigation menu's visibility
function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
}

// Add event listener to the hamburger icon
document.querySelector("nav::before").addEventListener("click", toggleMenu);

// Function to implement smooth scrolling behavior
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);
  window.scrollTo({
    top: targetSection.offsetTop,
    behavior: "smooth",
  });
}

// Add event listeners to navigation links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", smoothScroll);
});
