const quotes = [
    {
    quotes:"Be yourself; everyone else is already taken.",
    author:"Oscar Wilde",
    },{
    quotes:"The only way to do great work is to love what you do.",
    author:"Steve Jobs",
    },
    {
    quotes:"In the middle of difficulty lies opportunity.",
    author:"Albert Einstein",
    },
    {
    quotes:"Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author:"Winston Churchill",
    },
    {
    quotes:"The future belongs to those who believe in the beauty of their dreams.",
    author:"Eleanor Roosevelt",
    },
    {
    quotes:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela",
    },
    {
    quotes:"Believe you can and you're halfway there.",
    author:"Theodore Roosevelt",
    },
    {
    quotes:"The best way to predict the future is to create it.",
    author:"Peter Drucker",
    },
    {
    quotes:"Don't watch the clock; do what it does. Keep going.",
    author:"Sam Levenson",
    },
    {
    quotes:"Happiness is not something ready-made. It comes from your own actions.",
    author:"Dalai Lama",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotelength = quotes.length;
const randomFigure = Math.floor(Math.random()*quotelength);

const todaysQuote = quotes[randomFigure];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;