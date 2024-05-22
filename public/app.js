const firebaseConfig = {
  apiKey: "AIzaSyClxdVCGLgjPw1YVWabnebz_xgHXMUZmyA",
  authDomain: "resinroombybisma.firebaseapp.com",
  databaseURL: "https://resinroombybisma-default-rtdb.firebaseio.com",
  projectId: "resinroombybisma",
  storageBucket: "resinroombybisma.appspot.com",
  messagingSenderId: "314949518691",
  appId: "1:314949518691:web:318b00945dccfdbbbe3f56"
};

// Initialize Firebase
  
var app = firebase.initializeApp(firebaseConfig);
  

function carts(){
    var topsalesthings=document.getElementById("top-sale-things");
    var accessories=document.getElementById("accessories");
    var plaques=document.getElementById("plaques");
    topsalesthings.className +="topSale"
    accessories.className +="accessories"
    plaques.className +="plaques"
}

// contact page information

function validation(){
    var username=document.getElementById("username").value ;
    var email=document.getElementById("email").value ;
    var mobileNo=document.getElementById("mobileNo").value;

    var emailCheck=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (emailCheck.test(email)) {
        document.getElementById("emailError").innerHTML = "";
      } else {
        document.getElementById("emailError").innerHTML = "** Invalid email";
        return false;
      }

    var contactInformation={
          username,
          email,
          mobileNo,
      }
      console.log(contactInformation)
      var key=Date.now().toString(25);
    firebase.database().ref(`users/${key}`).set(contactInformation)

}
// call data from database once method
function getData(){
  firebase.database().ref("users").once("value",function(data){
    console.log(data.val())
  })

}
getData();

// shop information
function seeMore(){
  window.location="./shop.html"
}




// search button
var searchBox=document.getElementById('search-box');
var searchIcon=document.getElementById('search-icon');
var closeIcon=document.getElementById('close-icon');
var search=document.getElementById('search-active')

searchIcon.addEventListener('click', function(){
  console.log(search.classList.contains('search-active'))
  if(search.classList.contains('search-active')){
    searchBox.value='';
  }
  else{
    search.classList.add('search-active');
    searchBox.focus();
  }
})
closeIcon.addEventListener('click', function(){
  search.classList.remove('search-active');
  searchBox.value='';
})

// cart option index page
// cart 1
function AyatPlaque(){
  var url = "./cart1.html";  // Replace with your actual URL

  // Parameters for the popup window
  var windowFeatures = "width=400,height=300,left=100,top=100";

  // Open the new window
  window.open(url, "AyatPlaqueWindow", windowFeatures);
}
// cart 2
function namedPlaque(){
  var url = "./cart2.html";  // Replace with your actual URL

  // Parameters for the popup window
  var windowFeatures = "width=400,height=300,left=100,top=100";

  // Open the new window
  window.open(url, "namedPlaqueWindow", windowFeatures);
}

// cart 3
function keyChain(){
  var url = "./cart3.html";  // Replace with your actual URL

  // Parameters for the popup window
  var windowFeatures = "width=400,height=300,left=100,top=100";

  // Open the new window
  window.open(url, "keyChainWindow", windowFeatures);
}

// addtocart
function addToCart(productName) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productName);
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location="./addCart.html"
}
