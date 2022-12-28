const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

// first, we will create song list
const songList = [
	{
		path: "./audio/IU.mp3",
		songName: "IU",
	},
	{
		path: "./audio/SoSo.mp3",
		songName: "So So",
	},
	{
		path: "./audio/TikTok.mp3",
		songName: "Tik Tok",
	},
	{
		path: "./audio/WhyBe.mp3",
		songName: "Why Be",
	},
];

let song_playing = false;

// play song
function playSong() {
	song_playing = true;
	audio.play();
	playPause.classList.add('active');
	// change icon
	playPause.innerHTML = "<ion-icon name='pause-outline'></ion-icon>"
}
// pause song
function pauseSong() {
	song_playing = false;
	audio.pause();
	playPause.classList.remove('active');
	// change icon
	playPause.innerHTML = "<ion-icon name='play-outline'></ion-icon>"
}

// play of pause song on click
playPause.addEventListener("click", () => (song_playing ? pauseSong() :playSong()));

// load song
function loadSong(songList) {
	title.textContent = songList.songName;
	audio.src = songList.path;
}

// current song
let i = 0;

// on load - select first song from list
loadSong(songList[i]);

// previous song
function prevSong() {
	i--;
	if (i < 0) {
		i = songList.length - 1;
	}
	loadSong(songList[i]);
	// 재생 중일 때 playSong()을 넣어주면서 이전 버튼을 클릭하면 바로 노래가 재생된다.
	// 일시정지일 때는 재생되지않는다.
	if(song_playing == true) {
		playSong()
	}
}
prev.addEventListener("click", prevSong);

// next song
function nextSong() {
	i++;
	if (i > songList.length - 1) {
		i = 0;
	}
	loadSong(songList[i]);
	// 재생 중일 때 playSong()을 넣어주면서 이전 버튼을 클릭하면 바로 노래가 재생된다.
	// 일시정지일 때는 재생되지않는다.
	if(song_playing == true) {
		playSong()
	}
}
next.addEventListener("click", nextSong);