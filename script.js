document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        let header = document.querySelector('nav');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    gsap.from('.navbar-brand img', { opacity: 0, y: -20, duration: 1, delay: 0.5 });
});
document.addEventListener('DOMContentLoaded', function() {
    let aboutUsSection = document.getElementById('aboutUs');
    gsap.from(aboutUsSection, { opacity: 0, y: 20, duration: 1, scrollTrigger: {
        trigger: aboutUsSection,
        start: "top bottom"
    } });
});
document.addEventListener('DOMContentLoaded', function() {
    let aboutUsSection = document.getElementById('courses');
    gsap.from(aboutUsSection, { opacity: 0, y: 20, duration: 1, scrollTrigger: {
        trigger: aboutUsSection,
        start: "top bottom"
    } });
});