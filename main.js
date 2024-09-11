// Wait until the page is fully loaded
window.onload = function() {
    // Hide the loader after the page is loaded
    document.getElementById('loader').classList.add('hidden');
};

// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
});