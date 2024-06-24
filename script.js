let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header.head');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 125;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        let color = sec.getAttribute('data-color');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let matchingLink = document.querySelector('header nav a[href*=' + id + ']');
                if (matchingLink) { // Check if the element exists
                    matchingLink.classList.add('active');
                }
            });
            header.style.backgroundColor = color; // Change header background color
        }
    });
};