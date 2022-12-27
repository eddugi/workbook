const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 45;
const len = lists.length-1;
let i = 0;

for(let el of lists) {
    let pic = el.querySelector(".pic");
    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    pic.style.backgroundImage = `url(/mediaPlayer/img/member${i+1}.jpg)`;
    i++
}

for(let el of lists) {
    let play = el.querySelector("play")
    let pause = el.querySelector("pause")
    let load = el.querySelector("load")

    play.addEventListener("click", e => {
        e.curretTarget.closet("article").querySelector(".pic").classList.add("on");
        e.curretTarget.closet("article").querySelector("audio").play();
    })

    pause.addEventListener("click", e => {
        e.curretTarget.closet("article").querySelector(".pic").classList.remove("on");
        e.curretTarget.closet("article").querySelector("audio").pause();
    })

    load.addEventListener("click", e => {
        e.curretTarget.closet("article").querySelector(".pic").classList.add("on");
        e.curretTarget.closet("article").querySelector("audio").load();
        e.curretTarget.closet("article").querySelector("audio").play();
    })
    
}

