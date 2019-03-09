$('.responsive').slick({
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: true,
  autoplaySpeed: 1000,
  autoplay: true,
  infinite: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        centerMode: true
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        centerMode: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        centerMode: true
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        centerMode: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

window.onscroll = function() {checkScroll()};

function checkScroll(){
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 200) {
        document.getElementsByTagName("aside")[0].className = "scroll-along";
    } else {
        document.getElementsByTagName("aside")[0].className = "";
    }
}



