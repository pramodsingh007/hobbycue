function showSignIn() {
  document.getElementById("signUp").style.display = "none";
  document.getElementById("signIn").style.display = "block";
}

function showSignUp() {
  document.getElementById("signIn").style.display = "none";
  document.getElementById("signUp").style.display = "block";
}

function backToTop(){
  window.scrollTo(0,0)
}

window.addEventListener('scroll',()=>{
  if(window.scrollY>300){
    document.getElementById('backBtn').style.display='block'
  }
  if(window.scrollY<300){
    document.getElementById('backBtn').style.display='none'
  }
})