// Burger

const burger = document.querySelector('.vad-header__burger');
if (burger){
  const navigation = document.querySelector('.navigation');
  burger.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    navigation.classList.toggle('_active');
  });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "16px 0";
  } else {
    document.getElementById("header").style.padding = "40px 0";
  }
}