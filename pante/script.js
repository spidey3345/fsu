const menuToggle = document.getElementById("menuToggle");
const navbarElements = document.getElementById("navbarElements");
const navLinks = document.getElementsByClassName("nav-link");

menuToggle.addEventListener("click", function () {
  navbarElements.classList.toggle("show");
});

//* Add active class to navbar element based on current URL or page
const currentURL = window.location.href;

for (let i = 0; i < navLinks.length; i++) {
  const linkURL = navLinks[i].href;

  if (currentURL === linkURL) {
    navLinks[i].classList.add("active");
    break;
  }
}

//* Popup Alert
document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.getElementById("popupContainer");
  const popupImage = document.querySelector(".popupContent img");

  popupContainer.style.display = "block";

  popupContainer.addEventListener("click", function (event) {
    if (!popupImage.contains(event.target)) {
      popupContainer.style.display = "none";
    }
  });

  document.addEventListener("click", function (event) {
    if (
      event.target !== popupContainer &&
      !popupContainer.contains(event.target)
    ) {
      popupContainer.style.display = "none";
    }
  });
});

const nav = document.getElementById("myNav");
window.onscroll = function () {
  const  scrollValue = window.scrollY;
    if (scrollValue >= 550) {
        nav.classList.add('nav-colored')
    }
    else {
      nav.classList.remove('nav-colored')
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


// // Get all the navigation links
// const navLinks = document.querySelectorAll('nav a');

// // Add an event listener to each link
// navLinks.forEach(link => {
//   link.addEventListener('click', (event) => {
//     event.preventDefault(); // Prevent default behavior of the anchor tag
//     const targetSectionId = link.getAttribute('href'); // Get the target section ID from the 'href' attribute

//     // Remove 'active' class from all links
//     navLinks.forEach(link => link.classList.remove('active'));

//     // Add 'active' class to the clicked link
//     link.classList.add('active');

//     // Scroll to the target section
//     document.querySelector(targetSectionId).scrollIntoView({
//       behavior: 'smooth'
//     });
//   });
// });