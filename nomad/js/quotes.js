const quotes = [
    {
        quote: "하나둘셋",
        author : "이효성"
    },
    {
        quote: "123",
        author : "이효성"
    },
    {
        quote: "ㅁㄴㅇㄹ",
        author : "이효성"
    },
    {
        quote: "ㅁㄴㅇㄹ",
        author : "이효성"
    },
]

const quote = document.querySelector("#quoteaaa span:first-child")
const author = document.querySelector("#quoteaaa span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author