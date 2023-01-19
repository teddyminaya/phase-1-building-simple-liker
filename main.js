// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {hearts()});

function hearts(){
  const likeButton = document.querySelectorAll("span.like.glyph")
  
  likeButton.forEach(likeListener)

function likeListener(eachButton){
  eachButton.addEventListener("click", (e) => {
    mimicServerCall()
    .then((response) => {
      if (e.target.innerText === EMPTY_HEART) {
        e.target.innerText = FULL_HEART
        e.target.classList.add("activated-heart")
    }
    else if (e.target.innerText === FULL_HEART) {
      e.target.innerText === FULL_HEART
      e.target.classList.remove("activated-heart")
    }
    })
  .catch(function(){
    const errorMessage = document.getElementById("modal")
    console.log(errorMessage)
    errorMessage.className = "" 
  setTimeout(() => {errorMessage.className = "hidden"}, 3000)})
  })
}};

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
