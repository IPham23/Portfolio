 var tablink, tabcontent;
 
 var tablinks = document.getElementsByClassName("tab-links")
 var tabcontents = document.getElementsByClassName("tab-contents")

 function opentab(event, tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
 }
 
/** for skills expand */
var skillslist, skillsexpand;
 
var skillslists = document.getElementsByClassName("skills-lists")
var skillsexpands = document.getElementsByClassName("skills-expands")

function openlist(event, skillname){
  // Remove "active-expand" class from all skills expands
   for(skillsexpand of skillsexpands){
      skillsexpand.classList.remove("active-expand");
    }
  // Remove "active-skill" class from all skills lists
   for(skillslist of skillslists){
      skillslist.classList.remove("active-skill");
      skillslist.style.fontWeight = "normal";  // Set font weight back to normal for all skills lists
    }
  // Add "active-skill" class to the clicked skills list item
   event.currentTarget.classList.add("active-skill");
   event.currentTarget.style.fontWeight = "bold";
   
  // Add "active-expand" class to the corresponding skills expand
   var selectedExpand = document.getElementById(skillname);
   if (selectedExpand){
    selectedExpand.classList.add("active-expand");
   }

}




 /** for side Menu */
var menu = document.getElementById("sidemenu");

function openmenu(){
    menu.style.right = "0";
}
function closemenu(){
    menu.style.right = "-200px";
}



/** script for contact send email */
const scriptURL = 'https://script.google.com/macros/s/AKfycbw3ZtXdml7Y8QJf3HNamoZ5wlHnq-L5T1Xoj4pPrfNWQGHYyI4_ULTU9rL7HaQMWHlJ/exec';
const form = document.forms['submit-to-google-sheet'];
const successMessage = document.getElementById('success-message');


form.addEventListener('submit', e => {
  e.preventDefault();

  // Show loading message while submitting
  successMessage.innerHTML = 'Submitting...';

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // Hide loading message and show success message
      successMessage.innerHTML = 'Success! Form submitted.';
      console.log('Success!', response);
      alert('Form successfully submitted! Thank you for sending a message.');

      // Automatically remove the success message after 5 seconds
      setTimeout(() => {
        successMessage.innerHTML = '';
      }, 5000);
      // Clear the form fields after success
      form.reset();
    })
    .catch(error => {
      // Show error message
      successMessage.innerHTML = 'Error submitting form. Please try again later.';
      console.error('Error!', error.message);
      alert('Form not submitted. Kindly send a direct email.');

      // Automatically remove the error message after 5 seconds
      setTimeout(() => {
        successMessage.innerHTML = '';
      }, 5000);
    });
});







 /** script for particles */

  particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 1200
        }
      },
      "color": {
        "value": "#0F4C75"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#8ecae6",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


