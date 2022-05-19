// Burger

const burger = document.querySelector('.vad-header__burger');
if (burger) {
  const navigation = document.querySelector('.navigation');
  burger.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    navigation.classList.toggle('_active');
  });
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById('header').style.padding = '16px 10px';
  } else {
    document.getElementById('header').style.padding = '40px 10px';
  }
}

// document.getElementById('js-reversal-card-1').addEventListener('click', () => {
//   document.getElementById('js-reversal-card-1').classList.toggle('reversal');
// });
document.getElementById('js-reversal-card-2').addEventListener('click', () => {
  document.getElementById('js-reversal-card-2').classList.toggle('reversal');
});
// document.getElementById('js-reversal-card-3').addEventListener('click', () => {
//   document.getElementById('js-reversal-card-3').classList.toggle('reversal');
// });
document.getElementById('js-reversal-card-4').addEventListener('click', () => {
  document.getElementById('js-reversal-card-4').classList.toggle('reversal');
});