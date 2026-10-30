// Mobile Navigation Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
 
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
 
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Toggle navigation"
        );
 
        menuToggle.textContent = isOpen ? "×" : "☰";
    });
 
    // Close navigation after clicking a menu item
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
 
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Toggle navigation");
 
            menuToggle.textContent = "☰";
        });
    });
}
 
 
// Dynamic Copyright Year
const yearElement = document.getElementById("year");
 
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
 
 
// Active Navigation Link on Scroll
const sections = document.querySelectorAll("main section[id]");
const pageNavLinks = document.querySelectorAll(".nav-links a");
 
if (
    "IntersectionObserver" in window &&
    sections.length &&
    pageNavLinks.length
) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    pageNavLinks.forEach((link) => {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === `#${entry.target.id}`
                        );
                    });
                }
            });
        },
        {
            rootMargin: "-25% 0px -65% 0px"
        }
    );
 
    sections.forEach((section) => {
        observer.observe(section);
    });
}
