var myImage = document.querySelector('img');
var picHeader = document.querySelector('h3');


myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'seul.jpg') {
      myImage.setAttribute ('src','seo.jpg');
      picHeader.textContent = 'Seoyeon!';
    } else {
      myImage.setAttribute ('src','seul.jpg');
      picHeader.textContent = 'Seulgi!';
    }
}

/*
document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'This aint your site, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'This aint your site, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
*/