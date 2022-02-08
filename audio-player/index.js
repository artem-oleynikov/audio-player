const audio = document.querySelector('audio');
const bgImg = document.querySelector('.background-img');
const bgPlayer = document.querySelector('.background-player');
const soundPanel = document.querySelector('.sound-panel');
const playPauseBtn = document.querySelector('.play');
const NextBtn = document.querySelector('.forward');
const PrevBtn = document.querySelector('.backward');
const nameArtist = document.querySelector('.name-artist');
const songName = document.querySelector('.name-song');


//Создание флага
let isPlay = false;


function playAudio() {
    playPauseBtn.classList.remove('pause');
    playPauseBtn.src = "./assets/svg/pause.png";
    bgPlayer.style = 'transform: scale(1.2)';
    soundPanel.style = 'transform: scale(1.2)';
    audio.duration = 0;
    if(!isPlay) {
        isPlay = true;
        audio.play();
} else stopAudio();


}

function stopAudio() {
    playPauseBtn.classList.add('pause');
    playPauseBtn.src = "./assets/svg/play.png";
    bgPlayer.style = 'transform: scale(1)';
    soundPanel.style = 'transform: scale(1)';
    audio.pause();
    isPlay = false;
    
}


playPauseBtn.addEventListener('click',playAudio);




let playNum = 0;

const playList = ['beyonce', 'dontstartnow','twocolors' ];
const artist = ['Beyonce', 'Dua Lipa','Two colors' ];
const song = ['Don`t Hurt Yourself','Don`t start now','Lovefool'];


function playNext() {

playNum++;
if(playNum > playList.length - 1) {
    playNum = 0;
}else {
    playNum = playNum;
}
audio.src = `./assets/audio/${playList[playNum]}.mp3`;
bgImg.src = `./assets/img/${playList[playNum]}.png`;
bgPlayer.src = `./assets/img/${playList[playNum]}.png`;
nameArtist.innerHTML = artist[playNum];
songName.innerHTML = song[playNum];
playPauseBtn.classList.remove('pause');
playPauseBtn.src = "./assets/svg/pause.png";
audio.play();
  }
  

NextBtn.addEventListener('click', playNext);



function playPrev() {
    playNum--;
if(playNum < 0) {
    playNum = playList.length - 1;
}else {
    playNum = playNum;
}
audio.src = `./assets/audio/${playList[playNum]}.mp3`;
bgImg.src = `./assets/img/${playList[playNum]}.png`;
bgPlayer.src = `./assets/img/${playList[playNum]}.png`;
nameArtist.innerHTML = artist[playNum];
songName.innerHTML = song[playNum];
playPauseBtn.classList.remove('pause');
playPauseBtn.src = "./assets/svg/pause.png";
audio.play();
}


PrevBtn.addEventListener('click', playPrev);


