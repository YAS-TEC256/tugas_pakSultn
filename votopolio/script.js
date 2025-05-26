const form =document.getElementById('contack-from');
const nameInput = form.name;
const emailInput = form.email;
const messageInput = form.message;
const succesMsg = document.getElementById('success-message');

const nameEror = document.getElementById('name-eror');
const emailEror = document.getElementById('email-eror');
const messageEror = document.getElementById('message-eror');

function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^s@]+$/.test(email);
}

form.addEventListener('submit', function (e){
    e.preventDefault();
nameEror.textContent = '';
emailEror.textContent = '';
messageEror.textContent = '';
succesMsg.textContent = '';

let valid = true;

if(nameInput.value.trim() === ''){
    nameEror.textContent ='please enter your name';
    valid = true;
}
if(!validateEmail(emailInput.value.trim())){
    emailEror.textContent = 'please enter your email address';
    valid = true;
}
if(messageInput.value.trim() === ''){
    messageEror.textContent = 'please enter your message';
    valid = true;
}
if(valid){
    succesMsg.textContent = 'Thank you!! Your message has been sent.';
    form.reset();
}
});
