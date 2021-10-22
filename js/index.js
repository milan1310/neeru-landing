AOS.init();

const cards = document.querySelectorAll(".cards__single");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));

//slider
$(document).ready(function () {
        $(".slider").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
        });
});

$(document).ready(function () {
  $(".slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});