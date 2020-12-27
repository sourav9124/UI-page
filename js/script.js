const form = document.getElementByName('form');
const fname = document.getElementByName('fname');
const lname = document.getElementByName('lname');
const email = document.getElementByName('email');
const select = document.getElementByName('select');
const message = document.getElementByName('message');



form.addEventListener('click', e => {
  e.preventDefault();
  console.log(fname+lname+email+select+message);
  
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const selectValue = select.value.trim();
  const messageValue = message.value.trim();

  var letters = /^[A-Za-z]+$/;
  console.log(messageValue)
  
  if(fnameValue=="")
  {
    document.getElementById('fname_error').innerHTML="Please fill the  first name field ! ";
  }

  if(lnameValue=="")
  {
    document.getElementById('lname_error').innerHTML="Please fill the  last name field ! ";
  }
  if(emailValue=="")
  {
    document.getElementById('email_error').innerHTML="Please fill the email field !";
  }
  if(selectValue=="")
  {
    document.getElementById('select_error').innerHTML="Please select any one !";
  }
  if(messageValue=="")
  {
    document.getElementById('message_error').innerHTML="Please add a message ! ";
  }

  if(!(fnameValue.match(letters)) && nameValue!="")
  {
    document.getElementById('fname_error').innerHTML=" first name field should contain only alphabets ! ";
  }

  if(!(lnameValue.match(letters)) && nameValue!="")
  {
    document.getElementById('lname_error').innerHTML=" last name field should contain only alphabets ! ";
  }

  if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailValue)) && emailValue!="")
  {
    document.getElementById('email_error').innerHTML="Please enter a valid email address !";
  }
  
  
}