const yearElement = document.getElementById('year');
if(yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

document.querySelectorAll('.view-projects').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'projects.html';
    });
});

const currentPath = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if(link.getAttribute("href") === currentPath || (currentPath === "" && link.getAttribute("href") ==="index.html")) {
        link.classList.add("active");
    }
});


