let homeSlider = document.querySelectorAll(".inner-content-image");
let index = 0;

function slider() {
  homeSlider[index].classList.add("ac");
  index = (index + 1) % homeSlider.length;
  homeSlider[index].classList.remove("ac");
  console.log("hello");
}

let id =  setInterval(slider , 2200);

let favButton = document.querySelectorAll(".fa-heart");

favButton.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("red");
  });
});

let cartButton = document.querySelectorAll(".b1");
const cartList = document.querySelectorAll(".in-box")


let count = 0;

for (let i = 0; i < cartButton.length; i++) {
  cartButton[i].addEventListener("click", function () {
    if (cartButton[i].innerHTML == "Remove from cart") {
      count--;
      cartList[i].classList.add('ac');
      cartButton[i].innerHTML = `Add to Cart <i class="fa-solid fa-circle-plus"></i>`;
    } else {
      cartList[i].classList.remove('ac');
      count++;
      cartButton[i].innerHTML = "Remove from cart";
    }
  });
}

let cartMain = document.getElementById('Cart-main');
let cart = document.getElementById('cart');

cart.addEventListener('click' , function(){
    if(count == 0){
        alert("Your Cart is Empty!");
    }
    cartMain.classList.toggle('ac');
})

let FaqList = document.querySelectorAll('.faq-list')
let FaqAns = document.querySelectorAll('.faq-ans')


for(let i = 0; i < FaqList.length; i++){
    FaqList[i].addEventListener('click' , function(){
        FaqAns[i].classList.toggle('ac');
    })
}
<<<<<<< HEAD




=======
>>>>>>> ec407ea (updated commit)
