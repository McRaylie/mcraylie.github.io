let myImage = document.querySelector('img');

myImage.onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if( mySrc === 'images/new-world-order.jpg'){
        myImage.setAttribute('src', 'images/illuminati.jpg');
    } else {
        myImage.setAttribute('src', 'images/new-world-order.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'We\'ve been expecting you, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'We\'ve been expecting you, ' + storedName;
}

myButton.onclick = () => {
    setUserName();
}
