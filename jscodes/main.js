const toggleCollapse = document.querySelector('.toggle-collapse span');
const nav = document.querySelector('.nav');
const responsive={
  320:{
    items:1
  },
  560:{
    items:2
  },
  768:{
    items:3
  }
}
// onclick event on toggle Collapse span tag
toggleCollapse.onclick= () => {
nav.classList.toggle("collapse");
}

//owl crousel for famous books
$(document).ready(function () {
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout: 3000,   //to move the carousel auutomatically every three sec
    dots:false,
    nav:true, 
    responsive:responsive
});

//click to scroll to the top
$('.move-up span').click(function(){
  $('html,body').animate({
    scrollTop:0
  },1500);
})

  AOS.init();

//aos
});