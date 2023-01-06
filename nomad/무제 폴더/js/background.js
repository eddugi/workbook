const images = ["1.png", "2.png", "3.png"]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImgae = document.createElement('img');

bgImgae.src = `img/${chosenImage}`
document.body.appendChild(bgImgae)