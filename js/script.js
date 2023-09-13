/*-------------------------------------------------Events page flip card js----------------------------------------------------*/

// When mouse over the three flip card, the detailed message of this event will display
const flipCard = document.querySelectorAll(".flip-card");
const hiddenContent = document.querySelectorAll(".hidden-album-content");

for (let i = 0; i < flipCard.length ; i++){ 
  flipCard[i].addEventListener('mouseover', function() {
      hiddenContent[i].style.display = 'block';
  })

  flipCard[i].addEventListener('mouseout', function() {
      hiddenContent[i].style.display = 'none';
  })
}

/*-------------------------------------------Our Team page staff detailed messages---------------------------------------------*/

//When users press the "Read bio" button, the personal information of the staff will display.
//When press again, the information block will be closed.
const readButton = document.querySelectorAll(".staff-summary .expand-button");
const staffContent = document.querySelectorAll(".staff-summary .staff-text");

for (let i=0; i < readButton.length ; i++) {
    readButton[i].addEventListener("click", function(){
        if (staffContent[i].style.display == "block") {
          staffContent[i].style.display = "none";
        } else {
          staffContent[i].style.display = "block";
        }

    })
}

/*------------------------------------------Navigation bar responsive hamburger button-----------------------------------------*/

/* When the screen is scaled down to a specific length, the hamburger button will display and users can find
   navigation buttons when they press the hamburger button. */
const hanburgerBtn = document.querySelector('.hamburger-btn');
const navBarMenu = document.querySelector('.main-menu .nav-menu');

document.querySelector('.hamburger-btn').onclick = function() {
  this.classList.toggle("active");
  navBarMenu.classList.toggle("active");
}

/*-------------------------------------------Pop up messages in the Programs page----------------------------------------------*/

//If users want to explore more messages about any program, they can press the Explore button, and the message will pop up.
const model = document.querySelectorAll(".pop-up-content");
const btn = document.querySelectorAll(".explore-programs-more .btn");
const span = document.querySelectorAll(".pop-up-header .close")

for (let i=0; i < model.length ; i++) {
    btn[i].onclick = function() {
        model[i].style.display = "flex";
    }

    span[i].onclick = function() {
        model[i].style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == model[i]) {
            model[i].style.display = "none";
        }
    }
}

/*-------------------------------------The bank card which can flip in Donate Money page---------------------------------------*/

/** Operations of the card in Donate Money page */
document.querySelector('.money-donate-right .card-number-input').oninput = () =>{
  document.querySelector('.money-donate-right .money-card-number-box').innerText = 
  document.querySelector('.money-donate-right .card-number-input').value;
}

document.querySelector('.money-donate-right .card-holder-input').oninput = () =>{
  document.querySelector('.money-donate-right .card-holer-name').innerText = 
  document.querySelector('.money-donate-right .card-holder-input').value;
}

document.querySelector('.money-donate-right .month-input').oninput = () =>{
  document.querySelector('.money-donate-right .exp-month').innerText = 
  document.querySelector('.money-donate-right .month-input').value;
}

document.querySelector('.money-donate-right .year-input').oninput = () =>{
  document.querySelector('.money-donate-right .exp-year').innerText = 
  document.querySelector('.money-donate-right .year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
  document.querySelector('.money-donate-right .card-front').style.transform = 'perspective(1000px) rotateY(-180deg)';
  document.querySelector('.money-donate-right .card-back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
  document.querySelector('.money-donate-right .card-front').style.transform = 'perspective(1000px) rotateY(0deg)';
  document.querySelector('.money-donate-right .card-back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
  document.querySelector('.money-donate-right .cvv-box').innerText = 
  document.querySelector('.cvv-input').value;
}

/*-------------------------------------Make sure the messages saved in Donate Money page---------------------------------------*/

/**Donate Money page save messages prompt */
document.querySelector('.money-donate-right .submit-btn').onclick = () =>{
  moneysaveprompt();
}

function moneysaveprompt() {
  let text;
  const saveButton = document.querySelector('.money-donate-right .submit-btn');
  var cardNum = document.querySelector('.money-donate-right .card-number-input').value;
  var holderName = document.querySelector('.money-donate-right .card-holder-input').value;
  var month = document.querySelector('.money-donate-right .month-input').value;
  var year = document.querySelector('.money-donate-right .year-input').value;
  var cvv = document.querySelector('.cvv-input').value;
  var moneyNum = document.querySelector('.money-donate-left .money-to-donate').value;

  if(moneyNum.length == 0) {
    text = "Invalid money input!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateMoney.html#money-donate-right";
    }
  } else if(cardNum.length != 16) {
    text = "Invalid card number!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateMoney.html#money-donate-right";
    }
  } else if(holderName.length == 0) {
    text = "Invalid holder name!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateMoney.html#money-donate-right";
    }
  } else if(month.length != 2) {
    text = "Invalid month input!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateMoney.html#money-donate-right";
    }
  } else if(year.length != 4) {
    text = "Invalid year input!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateMoney.html#money-donate-right";
    }
  } else if(cvv.length < 3) {
    text = "Invalid cvv input!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateMoney.html#money-donate-right";
    }
  } else {
    if (confirm("Save your details?") == true) {
      text = "Save suscessful!";
      alert(text);
      saveButton.setAttribute('disabled', '');
      window.location = "donate.html";
      } else {
      text = "Your details are not saved!";
      alert(text);
      saveButton.setAttribute('disabled', '');
      window.location = "donateMoney.html";
      }
  }
  document.querySelector('.money-donate-right .submit-btn').onclick = () =>{
    moneysaveprompt();
  }
}

/*----------------------------------------Make sure the messages saved in CAntact Us page--------------------------------------*/

/* If users miss any important information, there will be a prompt, and after the user fill all the 
   information, there'll prompt a message to make sure if he/she wants to save. */
function contactSaveprompt() {

  const contactSaveButton = document.querySelector('#contact-form .submit');
  var contactName = document.querySelector('#contact-name').value;
  var contactEmail = document.querySelector('#contact-email').value;
  var contactMessage = document.querySelector('#contact-message').value;

  if(contactName.length == 0) {
      text = "Please input a valid name!"
      alert(text);
      if (confirm("Do you want to refill?") == true) {
        window.location = "contact.html";
      }
    } else if(contactEmail.length == 0 || contactEmail.includes("@") == false) {
      text = "Please input a valid email address!"
      alert(text);
      if (confirm("Do you want to refill?") == true) {
        window.location = "contact.html";
      }
    } else if(contactMessage.length == 0) {
      text = "Please input some words to send!"
      alert(text);
      if (confirm("Do you want to refill?") == true) {
        window.location = "contact.html";
      }
    } else {
      if (confirm("Send your messages to our offical email?") == true) {
          text = "Your messages have been sent suscessfully!";
          alert(text);
          window.location = "index.html";
          } else {
          text = "Your messages will not be sent.";
          alert(text);
          window.location = "index.html";
          }
  }
  document.querySelector('#contact-form .submit').onclick = () =>{
      contactSaveprompt();
  }
}

/*-------------------------------------Make sure the messages saved in Donate Instruments page---------------------------------*/

function instrumentSaveprompt() {
  let text;
  const instrumentSaveButton = document.querySelector('.indtruments-donate-right .submit-btn');
  var  dayToPick = document.querySelector('.instruments-donate-right .instruments-pick-day').value;
  var instrumentHolderName = document.querySelector('.instruments-donate-right .instruments-holder-name').value;
  var instrumentHolderEmail = document.querySelector('.instruments-donate-right .instruments-holder-email').value;
  var instrumentHolderPhone = document.querySelector('.instruments-donate-right .instruments-holder-phone').value;
  var instrumentHolderAddress = document.querySelector('.instruments-donate-right .instruments-holder-address').value;
  var  pickCountry = document.querySelector('.instruments-donate-right .country-select').value;
  var instrumentsToDonate = document.querySelector('.instruments-donate-left .instruments-to-donate').value;

  if(instrumentsToDonate.length == 0) {
    text = "Please input the instruments you want to donate!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateInstruments.html#instruments-donate-section";
    } else {
      instrumentSaveButton.setAttribute('disabled', '');
      window.location = "donateInstruments.html";
    }
  } else if(instrumentHolderName.length == 0) {
    text = "Please enter a valid name!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateInstruments.html#instruments-donate-section";
  } else {
    instrumentSaveButton.setAttribute('disabled', '');
    window.location = "donateInstruments.html";
  }
 } else if(instrumentHolderEmail.length == 0 || instrumentHolderEmail.includes("@") == false) {
    text = "Please enter a valid email address!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateInstruments.html#instruments-donate-section";
    } else {
      instrumentSaveButton.setAttribute('disabled', '');
      window.location = "donateInstruments.html";
    }
  } else if(instrumentHolderPhone.length < 6 || instrumentHolderPhone.length > 14) {
    text = "Please enter a valid phone number!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateInstruments.html#instruments-donate-section";
    } else {
      instrumentSaveButton.setAttribute('disabled', '');
      window.location = "donateInstruments.html";
    }
  } else if(instrumentHolderAddress.length == 0) {
    text = "Please enter a valid address!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateInstruments.html#instruments-donate-section";
    } else {
      instrumentSaveButton.setAttribute('disabled', '');
      window.location = "donateInstruments.html";
    }
  } else if(dayToPick.length == 0) {
    text = "Please an appropriate day!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateInstruments.html#instruments-donate-section";
    } else {
      instrumentSaveButton.setAttribute('disabled', '');
      window.location = "donateInstruments.html";
    }
  } else if(pickCountry.length == 0) {
    text = "Please your country!"
    alert(text);
    if (confirm("Do you want to refill?") == true) {
      window.location = "donateInstruments.html#instruments-donate-section";
    } else {
      instrumentSaveButton.setAttribute('disabled', '');
      window.location = "donateInstruments.html";
    }
  } else {
    if (confirm("Save your details?") == true) {
      text = "Save suscessful!";
      alert(text);
      instrumentSaveButton.setAttribute('disabled', '');
      window.location = "donate.html";
      } else {
      text = "Your details are not saved!";
      alert(text);
      instrumentSaveButton.setAttribute('disabled', '');
      window.location = "donateInstruments.html";
      }
  }
  document.querySelector('.instruments-donate-right .submit-btn').onclick = () =>{
    instrumentSaveprompt();
  }
}



