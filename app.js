const displayAdvice = document.getElementById('display_string')
const generateBtn = document.getElementById('generate_button')
const adviceId = document.getElementById('advice_id')

function catchingString (string, id) {
    displayAdvice.textContent = string;
    adviceId.textContent = `Advice #${id}`;
}

generateBtn.addEventListener('click', ClickHandler)

function ClickHandler () {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json().then((data) => catchingString(data.slip.advice, data.slip.id)));
}



