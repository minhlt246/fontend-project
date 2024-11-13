//Get the button:
var mybutton = document.getElementById("backtop");
var scroll = document.getElementsByClassName("content")
// var linemenu = document.getElementById("menu");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
  // scrollmenu()
  // if ($(window).width() > 769) {
  //
  // }
};

$(scroll).scroll(function() {
  if ($(scroll).scrollTop() > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

function scrollFunction() {

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollmenu() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    linemenu.classList.remove("invisible")

  } else {
    linemenu.classList.add("invisible")
  }
}

// When the user clicks on the button, scroll to the top of the document
function backtotop() {
  $('.content').animate({scrollTop:0}, '300');
}

$(document).ready(function(){

//play/pause on double click on the video
  $('video').on('click', function (e) {
    if (this.paused) {
      this.play();
    }else{
      this.pause();
    }
  });

//play/pause of the video when the modal opens/closes.
  $('.open-box').on('show.bs.modal', function() { //show modal event for an element which has class 'modal'
    var id = $(this).attr('id'); //saves in the var the ID value of the opened modal
    var video = document.getElementById(id).querySelectorAll("video"); //Find the element 'video' inside of the modal defined by the ID previosly saved

    $(video)[0].play(); //plays what we saved on 'video' variable
  });

  $('.open-box').on('hidden.bs.modal', function() { //show modal event for an element which has class 'modal'
    var id = $(this).attr('id');//saves in the var the ID value of the closed modal
    var video = document.getElementById(id).querySelectorAll("video");//Find the element 'video' inside of the modal defined by the ID previosly saved

    $(video)[0].pause(); //pauses the video
    $(video)[0].currentTime = 0; //rests the video to 0 for have it from the beging when the user opens the modal again
  });

});

//active-link
jQuery(function ($) {
  var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
  $('.menu li a').each(function () {
    if (this.href === path) {
      $(this).addClass('active');
    }
  });
});

// slider
$(document).ready(function () {
  $('.responsive').slick({
    // dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 1,
        // centerMode: true,

      }
    }, {
      breakpoint: 835,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,

      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,

      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }, {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    }]
  });
});

// Function to simulate typing effect for each element with the class .typed-text
function typeEffect(element, text, speed) {
  var index = 0;
  var typing = setInterval(function() {
    // Append the next character to the element
    $(element).append(text[index++]);

    // If reached the end of the text, clear the interval
    if (index === text.length) {
      clearInterval(typing);
    }
  }, speed);
}

// Function to delay and then start typing effect for each element
function startTyping() {
  var speed = 30; // Speed of typing in milliseconds
  var delay = 500; // Delay between each line in milliseconds

  // Iterate over each element with the class .typed-text
  $('.typed-text').each(function(index) {
    var text = $(this).data('text'); // Get the text from the data-text attribute

    // Delay before starting typing effect for each line
    setTimeout(function() {
      typeEffect(this, text, speed); // Call the typeEffect function for each element
    }.bind(this), index * delay); // Apply delay based on index of the element
  });
}

// Call the startTyping function to begin the typing effect
startTyping();

//click to copy
$(document).ready(function() {
  $(".copy-button").click(function() {
    let copyText = $($(this).data('copyid')).text()
    copyToClipboard(copyText);
  });
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
  }
});

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


//
// const progress = document.querySelector('.progress-1');
//
// progress.addEventListener('input', function() {
//   const value = this.value;
//   this.style.background = `linear-gradient(to right, #001A3E 0%, #001A3E ${value}%, #fff ${value}%, white 100%)`
// })

function countdown(timeInSeconds) {
    var timer = timeInSeconds, hours, minutes, seconds;
    var intervalId = setInterval(function () {

        hours = parseInt((timer / 3600) % 24, 10);
        minutes = parseInt((timer / 60) % 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // console.log(hours + ":" + minutes + ":" + seconds);

        if (--timer < 0) {
            clearInterval(intervalId);
            // console.log("Countdown Finished.");
        }
    }, 1000);
}

countdown(5000); // Count down from 5000 seconds

$(document).ready(function() {
  // Select all buttons with the class "replace-space"
  $(".replace-space").each(function() {
    // Get the text content of the button
    var buttonText = $(this).text();

    // Replace spaces with &nbsp;
    var newText = buttonText.replace(/ /g, "&nbsp;");

    // Set the new HTML content of the button
    $(this).html(newText);
  });
});


$.fn.extend({
  treed: function (o) {

    var openedClass = 'glyphicon-minus-sign';
    var closedClass = 'glyphicon-plus-sign';

    if (typeof o != 'undefined'){
      if (typeof o.openedClass != 'undefined'){
        openedClass = o.openedClass;
      }
      if (typeof o.closedClass != 'undefined'){
        closedClass = o.closedClass;
      }
    };

    //initialize each of the top levels
    var tree = $(this);
    tree.addClass("tree");
    tree.find('li').has("ul").each(function () {
      var branch = $(this); //li with children ul
      branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
      branch.addClass('branch');
      branch.on('click', function (e) {
        if (this == e.target) {
          var icon = $(this).children('i:first');
          icon.toggleClass(openedClass + " " + closedClass);
          $(this).children().children().toggle();
        }
      })
      branch.children().children().toggle();
    });
    //fire event from the dynamically added icon
    tree.find('.branch .indicator').each(function(){
      $(this).on('click', function () {
        $(this).closest('li').click();
      });
    });
    //fire event to open branch if the li contains an anchor instead of text
    tree.find('.branch>a').each(function () {
      $(this).on('click', function (e) {
        $(this).closest('li').click();
        e.preventDefault();
      });
    });
    //fire event to open branch if the li contains a button instead of text
    tree.find('.branch>button').each(function () {
      $(this).on('click', function (e) {
        $(this).closest('li').click();
        e.preventDefault();
      });
    });
  }
});

//Initialization of treeviews
$('#tree1').treed();

// script.js
document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");
  const ratingDisplay = document.getElementById("rating-display");

  stars.forEach((star) => {
    star.addEventListener("click", function () {
      const rating = this.getAttribute("data-value");
      updateRating(rating);
    });

    star.addEventListener("mouseover", function () {
      highlightStars(this.getAttribute("data-value"));
    });

    star.addEventListener("mouseout", function () {
      resetStars();
    });
  });

  function updateRating(rating) {
    stars.forEach((star) => {
      star.classList.remove("selected");
      if (star.getAttribute("data-value") <= rating) {
        star.classList.add("selected");
      }
    });
    ratingDisplay.innerText = `Rating: ${rating}`;
  }

  function highlightStars(rating) {
    stars.forEach((star) => {
      star.style.color = star.getAttribute("data-value") <= rating ? "gold" : "lightgray";
    });
  }

  function resetStars() {
    stars.forEach((star) => {
      star.style.color = star.classList.contains("selected") ? "gold" : "lightgray";
    });
  }
});


