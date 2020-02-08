// Close Login screen

var getStartedModal = document.getElementById('get-started-modal');
var loginModal = document.getElementById('id01');
var reportModal = document.getElementById('modal-sample-credit-report');

var container = document.querySelector("#middle-topnav");
var matches = container.querySelectorAll("div.middle-topnav > a");


window.onclick = function(event) {
  if (event.target == getStartedModal || event.target == loginModal || event.target == reportModal) {
    getStartedModal.style.display = "none";
    loginModal.style.display = "none";
    reportModal.style.display = "none";
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("topnav-id").style.padding = "0px 10px";
    document.getElementById("topnav-id").style.background = "rgba(72,72,72, 0.9)";
  } else {
    document.getElementById("topnav-id").style.padding = "20px 10px";
    document.getElementById("topnav-id").style.background = "rgba(255,255,255, 0)";
  }
}

// Show/Hide Mobile Nav when clicked

function openNav() {
  document.getElementById("overlay-id").style.height = "100%";
}

function closeNav() {
  document.getElementById("overlay-id").style.height = "0%";
}
