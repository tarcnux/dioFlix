console.log("Netflix Front Clone - Digital Innovation One");

//Carrossel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//Controles Janela Modal
//https://www.w3schools.com/howto/howto_css_modals.asp

// Get the modal
//var modal = document.getElementById("myModal");
let modal = document.querySelector("#myModal");

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");
let btn = document.querySelector('#myBtn');

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
let span = document.querySelector('.close');

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block"; 
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
