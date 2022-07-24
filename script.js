console.log("Welcome to Musify");

//Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));


let songs=[
    {songName: "Arabic Kuthu",filePath: "songs/1.mp3",coverPath: "cover/cover1.jpg"},
    {songName: "Enthemadil jimakki kammal",filePath: "songs/2.mp3",coverPath: "cover/cover2.jpg"},
    {songName: "Buttabomma",filePath: "songs/3.mp3",coverPath: "cover/cover3.jpg"},
    {songName: "Darshana-Hridayam",filePath: "songs/4.mp3",coverPath: "cover/cover4.jpg"},
    {songName: "Onakka muthiri - Hridayam",filePath: "songs/5.mp3",coverPath: "cover/cover5.jpg"},
    {songName: "Vaathi coming",filePath: "songs/6.mp3",coverPath: "cover/cover6.jpg"},
    {songName: "Excuses",filePath: "songs/7.mp3",coverPath: "cover/cover7.jpg"}, 
    {songName: "Jalebi Baby - Jason Darulo",filePath: "songs/8.mp3",coverPath: "cover/cover8.jpg"},
    {songName: "Jugnu - Badshah",filePath: "songs/9.mp3",coverPath: "cover/cover9.jpg"},
    {songName: "Nagada sang dhol - Ramleela",filePath: "songs/10.mp3",coverPath: "cover/cover10.jpg"}, 
    {songName: "Kunkumala - Brahmastra",filePath: "songs/11.mp3",coverPath: "cover/cover11.jpg"}, 
    {songName: "Kajra re",filePath: "songs/12.mp3",coverPath: "cover/cover12.jpg"}, 
]
songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});


//audioElement.play();

//Handle play/pause clicks
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;

})

const makeAllPlays=()=>{
    songItemPlay.forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
    
}

songItemPlay.forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('forward').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex].songName;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})



