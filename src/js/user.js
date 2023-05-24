
const storedUser = localStorage.getItem("data")
const user = JSON.parse(storedUser)
console.log(user.firstname)

document.addEventListener("DOMContentLoaded", function() {
  // Get the userName element
  const userNameElement = document.getElementById("userName");
  const profilenme = document.querySelector("profile__name")
  const profileemail = document.querySelector("profile__email")

  if (userNameElement) {
    userNameElement.innerHTML = user.firstname; 
    // profilenme.innerHTML = user.firstname,user.lastname
    
  }
  if (profileemail){
    profileemail.innerHTML = user.email

  }
});

function logOut(){
  localStorage.removeItem('data');
  window.location.href = 'index.html'

}