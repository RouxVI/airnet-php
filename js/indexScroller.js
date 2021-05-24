//---------------------------------------------------------------------------------------------------//
// Text roller
//---------------------------------------------------------------------------------------------------//
var currentIndex = 0;
var currentQuote, lastQuote;
allQuotes = document.querySelectorAll("#scroll_holder h3");

setInterval(function () {
    if (lastQuote != undefined)
        lastQuote.removeAttribute("toHiding");

    currentQuote = allQuotes[currentIndex];
    lastQuote = allQuotes[(currentIndex - 1 + allQuotes.length) % allQuotes.length];

    lastQuote.setAttribute("toHiding", "");
    lastQuote.removeAttribute("isRendered");
    currentQuote.setAttribute("isRendered", "");

    currentIndex = (currentIndex + 1) % allQuotes.length;
}, 4000);
