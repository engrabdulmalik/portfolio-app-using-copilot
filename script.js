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

// Function to filter projects by category
function filterProjects(category) {
  const projects = document.querySelectorAll("#projects article");
  projects.forEach((project) => {
    if (category === "all" || project.classList.contains(category)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

// Add event listeners to filter buttons
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const category = event.currentTarget.getAttribute("data-category");
    filterProjects(category);
  });
});

// Function to display images in a lightbox
function openLightbox(event) {
  const lightbox = document.createElement("div");
  lightbox.id = "lightbox";
  document.body.appendChild(lightbox);

  const img = document.createElement("img");
  img.src = event.currentTarget.src;
  lightbox.appendChild(img);

  lightbox.addEventListener("click", () => {
    lightbox.remove();
  });
}

// Add event listeners to project images
document.querySelectorAll("#projects img").forEach((img) => {
  img.addEventListener("click", openLightbox);
});
