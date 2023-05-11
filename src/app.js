function sponsor() {
  let business = prompt("What is the name of your business?");
  let email = prompt("What is your email address?");
  if (business.length > 0 && email.length > 0) {
    alert("Thank You! We will be in touch!");
  }
}
function join() {
  let name = prompt("What is your full name?");
  let age = prompt("How old are you?");
  if (age > 30) {
    alert("Thank You! We will be in touch!");
  } else {
    alert("Sorry, you must be 30 years old or older to join.");
  }
}
let sponsorButton = document.querySelector(".sponsor-Team");
sponsorButton.addEventListener("click", sponsor);
let joinButton = document.querySelector(".join-Team");
joinButton.addEventListener("click", join);