let hamburger = document.getElementById("hamburger");
let closeIcon = document.getElementById("close-icon");
let navLinks = document.getElementById("menu-bar");
isOpen = false
hamburger.addEventListener("click", (e) => {


  if (hamburger.style.display = 'none') {
    navLinks.style.display = 'block'
    hamburger.style.display = 'none'
    
  } if(hamburger.style.display = 'block'){
      closeIcon.addEventListener("click", (e) => {
        navLinks.style.display = 'none'
        

    });
  }

});