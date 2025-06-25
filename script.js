 console.log("Welcome to Spotify");
 //initialize the variables
 let songIndex = 0;
 let audioElement = new Audio('songs/1.mp3');
 let masterPlay = document.getElementById('masterPlay');
 let myProgressBar=document.getElementById('myProgressBar');
 let gif = document.getElementById('gif');
 let masterSongName = document.getElementById('masterSongName');
 let songItems = Array.from(document.getElementsByClassName('songitem'));
 let songs = [
    {songName: "Paradise ",filePath: "songs/1.mp3" ,coverPath: "1.jpeg"},
    {songName: "Janam Janam",filePath: "songs/2.mp3" ,coverPath: "2.jpg"},
    {songName: "Mahiii",filePath: "songs/3.mp3" ,coverPath: "3.jpg"},
     {songName: "Dil Dobba ",filePath: "songs/4.mp3" ,coverPath: "4.jpeg"},
    {songName: "Ringtone",filePath: "songs/5.mp3" ,coverPath: "5.jpeg"},
    {songName: "Sari Sari Raat ",filePath: "songs/6.mp3" ,coverPath: "6.jpeg"},
    {songName: "Deewana kar rhe" ,filePath: "songs/7.mp3" ,coverPath: "7.jpeg"},
    {songName: "Ye tune kya kiya",filePath: "songs/8.mp3" ,coverPath: "8.jpeg"},
{songName: " Zara zara sa tu ",filePath: "songs/9.mp3" ,coverPath: "9.jpeg"},

 ]
 songItems.forEach((element, i)=> {
   if(songs[i]) {
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
   }
 });

 //audioElement.play();


 //handle play/ pause play

masterPlay.addEventListener('click' , ()=>{
   if(audioElement.paused || audioElement.currentTime <=0){
      audioElement.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity = 1;
   }
else{
   audioElement.pause();
      masterPlay.classList.remove('fa-pause-circle');
      masterPlay.classList.add('fa-play-circle');
  gif.style.opacity = 0;
}


 });
 //listen to events 
 audioElement.addEventListener('timeupdate' , () => {
   //update seelbar
 let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
myProgressBar.value = progress;
 });
 myProgressBar.addEventListener('change',() => {
   audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
 })

const makeAllPlays = () => {
   Array.from( document.getElementsByClassName('songitemplay')).forEach ((element) =>{
      element.classList.remove('fa-pause-circle')
   element.classList.add('fa-play-circle');
})
}

Array.from( document.getElementsByClassName('songitemplay')).forEach ((element) =>{
   element.addEventListener('click',(e) => {

makeAllPlays();

songIndex = parseInt(e.target.id);
e.target.classList.remove('fa-play-circle');
e.target.classList.add('fa-pause-circle');
audioElement.src = `songs/${songIndex+1}.mp3`;

masterSongName.innerText= songs[songIndex].songName;
audioElement.currentTime= 0;
audioElement.play();
      gif.style.opacity = 1;
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
   })

 })


 document.getElementById('next').addEventListener('click',()=>{

   if(songIndex >= songs.length - 1 ){
      songIndex=0
   }
   else{
   songIndex +=1;
   }
   
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText= songs[songIndex].songName;
audioElement.currentTime= 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})


document.getElementById('previous').addEventListener('click',()=>{

   if(songIndex<=0){
      songIndex=0
   }
   else{
   songIndex -=1;
   }
audioElement.src = `songs/${songIndex+1}.mp3`;
masterSongName.innerText= songs[songIndex].songName;
audioElement.currentTime= 0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');
})