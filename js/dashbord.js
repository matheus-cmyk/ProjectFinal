document.addEventListener("DOMContentLoaded", function() {
    // Destacar o link ativo na navegação
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.href.includes(current)) {
                link.classList.add("active");
            }
        });
    });
});
