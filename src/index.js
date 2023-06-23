import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalc from './js/ageCalc.js';

function handleEarthAgeForm(event) {
    event.preventDefault();
    document.querySelector('#response').innerText = null;
    const earthAgeInput = document.querySelector('#earth-age-input').value;
    const age = new AgeCalc(earthAgeInput);
    const response = age.getMercuryAge();
    const pTag = document.createElement("p");
    pTag.append(`Your age on Mercury is: ${response}.`);
    document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
    document.querySelector("#earthAge-form").addEventListener("submit", handleEarthAgeForm);
});
