var lastScrollTop = 0;
    navbar = document.getElementById("navbar");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && document.getElementById("burger").className === "burger") {
        navbar.style.top = "-80px";

    } else {
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})
function quit() {
    document.getElementById("burger").click()
}
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}


navSlide();

$(".link").on("click", function(e) {
    console.log(this.hash);
    if (this.hash !== '') {
        e.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        },800);
    }
});

const sections = document.querySelectorAll("section");
const NavList = document.querySelectorAll("nav ul li");
window.addEventListener("scroll", ()=>{
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset > sectionTop - sectionHeight /2) {
            current = section.getAttribute('id');
        }
    })
    NavList.forEach(li => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add('active');
            
        }
    })
})
