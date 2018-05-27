var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/95.jpg') {
    myImage.setAttribute('src', 'images/night.jpg');
  } else {
    myImage.setAttribute('src', 'images/95.jpg');
  }
};

/*
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setFavoriteRestaurant() {
  var myRestaurant = prompt('好きな飲食店を入力してください。');
  localStorage.setItem('restaurant', myRestaurant);
  myHeading.textContent = 'はいプロ。世界一' + myRestaurant + 'が好き。';
}

if (!localStorage.getItem('restaurant')) {
  setFavoriteRestaurant();
} else {
  var storedRestaurant = localStorage.getItem('restaurant');
  myHeading.textContent = 'はいプロ。世界一' + storedRestaurant + 'が好き。';
}

myButton.onclick = setFavoriteRestaurant;
*/
