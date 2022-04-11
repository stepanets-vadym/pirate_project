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