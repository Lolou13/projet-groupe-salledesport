
// CONSTANTE DU DOM
const nom = document.querySelector('#nomInput');
const prenom = document.querySelector('#prenomInput');
const form = document.querySelector('form');
let inputEmail= document.querySelector("input[type=email]");
// console.log(inputEmail);
let number = document.querySelector("input[type=tel]");
// console.log(number);
const sujet = document.querySelector('#sujet');
const textarea = document.querySelector('#exampleFormControlTextarea1');


// REGEX
const UserRegex = /^[a-zA-Z-]{3,23}$/;
const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@&#$%]).{8,23}$/;
const SujetRegex = /^[^<>{}$]{3,200}$/;
const MessageRegex = /^[^<>{}$]{24,}$/;
const EmailRegex = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
const PhoneNumberRegex = /^(?:\d{1,3})?\d{10,14}$/;

// envoyer un mail
let nomValid = false;
let prenomValid = false;
let emailValid = false;
let msgValid = false;
let sujetValid = false;
let telValid = false;

// regex + const du dom FORM


// fonction
function addClass(element, regex, value) {
    if (regex.test(value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
    } else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
    }
}

// regex label nom et prenom
nom.addEventListener('input', e=>addClass(nom, UserRegex, e.target.value));
prenom.addEventListener('input', e=>addClass(prenom, UserRegex, e.target.value));

// regex label sujet
sujet.addEventListener('input', e=>addClass(sujet, SujetRegex, e.target.value));

// regex textarea
textarea.addEventListener('input', e=>addClass(textarea, MessageRegex, e.target.value));

// regex label email
inputEmail.addEventListener('input', e=>addClass(inputEmail, EmailRegex, e.target.value));


// regex label telephone
number.addEventListener('input', e=>addClass(number, PhoneNumberRegex, e.target.value));






