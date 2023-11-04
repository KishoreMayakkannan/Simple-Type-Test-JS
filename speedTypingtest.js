let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

let counter = 0;
spinner.classList.toggle("d-none");

function startCounter() {
    counter += 1;
    timer.textContent = counter;

}

let countervalue = setInterval(startCounter, 1000);

function getQuote() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            let quote = jsonData.content;
            quoteDisplay.textContent = quote;
        });
}

getQuote();
startCounter();
resetBtn.onclick = function() {
    spinner.classList.remove("d-none");
    getQuote();
    startCounter();
    counter = 0;
    result.textContent = "";
    quoteInput.textContent = "";
}
submitBtn.onclick = function() {
    if (quoteInput.value === quoteDisplay.textContent) {
        clearInterval(countervalue);
        result.textContent = "You Typed in " + counter + "seconds";
    } else {
        result.textContent = "you typed incorrect sentence";
    }
}