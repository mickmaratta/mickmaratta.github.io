//SLIDING ANIMATIONS

//Cards sliding in from below
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
},
{
  threshold: 0.1,
});

cards.forEach(card => {
  observer.observe(card)
});

//Hiding scroll animation
const scrollDown = document.querySelector(".scroll-down");

window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 75){
        scrollDown.classList.add('hide');
        return;
    } else if (y<75) {
        scrollDown.classList.remove('hide');
    }

});