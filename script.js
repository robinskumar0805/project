document.addEventListener("DOMContentLoaded", function() {
    const sectionLinks = document.querySelectorAll('.section-link');
    const sections = document.querySelectorAll('.section');
    
    sectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            sections.forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(target).style.display = 'block';
        });
    });
});
