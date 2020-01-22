const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".links");
    const navLinks = document.querySelectorAll(".links ul li");

    burger.addEventListener("click", ()=>{
        burger.classList.toggle("toggle");
        nav.classList.toggle("nav-active");

        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
            }
        });
    });
}

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

navSlide();