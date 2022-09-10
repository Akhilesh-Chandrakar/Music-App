console.log("Welcome to MY Music");
let songindex=0;
let audioelement=new Audio('song/1.mp3');
let masterplay=document.getElementById('masterplay');
let progress=document.getElementById('progress');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songname:"Arcade", filepath:"song/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"kaise hua", filepath:"song/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"tu itni khubsurat hai", filepath:"song/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"salam-e-ishq", filepath:"song/3.mp3",coverpath:"covers/4.jpg"},
    {songname:"speed waves", filepath:"song/1.mp3",coverpath:"covers/5.jpg"},
    {songname:"gangester", filepath:"song/2.mp3",coverpath:"covers/6.jpg"},
    {songname:"tu meri hi sahab hai", filepath:"song/3.mp3",coverpath:"covers/7.jfif"},
    {songname:"ven paca", filepath:"song/1.mp3",coverpath:"covers/8.jfif"},
    {songname:"give me some sunshine", filepath:"song/2.mp3",coverpath:"covers/9.jpg"},
    {songname:"itna shona ", filepath:"song/1.mp3",coverpath:"covers/10.jfif"},
]
// for apperance of images and songs 
songItems.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
    
});

//handle play/pause click
masterplay.addEventListener('click', ()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterplay.classList.remove('fa-solid fa-circle-play');
        masterplay.classList.add('fa-solid fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
    audioelement.pause();
        masterplay.classList.remove('fa-solid fa-circle-pause');
        masterplay.classList.add('fa-solid fa-circle-play');
        gif.style.opacity=0;
    }
})

//listen to events
audioelement.addEventListener('timeupdate',()=>{

//update seekbar time update in console
prog=parseInt((audioelement.currentTime/audioelement.duration)*100);
console.log(prog);
progress.value=prog;

})
progress.addEventListener('change',()=>{
    audioelement.currentTime=progress.value*audioelement.duration/100;
})
const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.target.classList.remove('fa-circle-pause');
            element.target.classList.add('fa-circle-play');
        })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    songindex=parseInt(e.target.id);
    audioelement.src='song/${songindex+1}.mp3';
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
})
