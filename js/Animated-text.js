const quoteText = "The only way to do great work is to love what you do!";
const authorText = "– Steve Jobs";
let index = 0;

function typeWriter() {
    if (index < quoteText.length) {
        document.getElementById("animated-quote").innerHTML += quoteText.charAt(index);
        index++;
        setTimeout(typeWriter, 100); // Typing speed for main quote
    } else {
        // Show the author after a short delay
        setTimeout(() => {
            document.getElementById("quote-author").innerHTML = authorText;
            document.getElementById("quote-author").style.opacity = 1; // Fade in effect
        }, 500); // Delay before author name appears
    }
}

window.onload = typeWriter;
