let term = '';
console.log("Made with love by Prince")
let totalsong = [
    
]


let defaultsong=[
    
{song: 'Sooraj Dooba Hain (From "Roy")', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/2d/11/b9/2d11b994-b4fa-19eb-953d-70b472165e95/8903431566911_cover.jpg/100x100bb.jpg', audio: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0b/c0/8c/0bc08c58-274a-67d6-cab5-e5c72d1f1f34/mzaf_2846157791679155895.plus.aac.p.m4a'}
,
{song: 'Mast Magan (From "2 States)', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/28/4a/41/284a41a8-2141-2d04-51c7-8daef8f16d00/8903431615541_cover.jpg/100x100bb.jpg', audio: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/24/c7/36/24c736c8-8d63-e313-31f9-dfb549c046e3/mzaf_3592883741768558734.plus.aac.p.m4a'}
, 
{song: 'Gerua', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f5/13/34/f51334f2-5e97-d82b-8fff-c935106d6450/mzm.joekxfas.jpg/100x100bb.jpg', audio: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/f5/74/c5/f574c51e-7cbf-4ff3-fc5f-404cbd9bae50/mzaf_12220913612769375461.plus.aac.p.m4a'}
, 
{song: 'Samjhawan', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/c7/75/e0/c775e0e3-797a-0a52-c2df-8784c0fb2a21/886444676540.jpg/100x100bb.jpg', audio: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/4d/77/b8/4d77b863-1f6a-9b33-11b8-4b4f31f17db2/mzaf_13093273124638510784.plus.aac.p.m4a'}
, 
{song: 'Sooraj Dooba Hain (From "Roy")', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/78/48/4e/78484e74-5f55-aace-829b-b3b17540f906/8903431648433_cover.jpg/100x100bb.jpg', audio: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/83/80/45/83804587-813d-25ef-2ed3-62cb9edb6221/mzaf_6278637584353094413.plus.aac.p.m4a'}
, 

{song: 'Janam Janam', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f5/13/34/f51334f2-5e97-d82b-8fff-c935106d6450/mzm.joekxfas.jpg/100x100bb.jpg', audio: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/0d/55/22/0d552241-3dc5-88c8-9912-aeb00056a0b1/mzaf_3746055420904322653.plus.aac.p.m4a'}
, 
{song: 'Bekhayali (Arijit Singh Version)', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f6/70/84/f6708434-0123-ff36-0ac3-7401e8cf0f94/8902894360807_cover.jpg/100x100bb.jpg', audio: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8f/4b/06/8f4b061d-f196-b330-84a4-200931566648/mzaf_5126103461070847350.plus.aac.p.m4a'}
,
{song: 'Cosmos', img: 'https://is1-ssl.mzstatic.com/image/thumb/Video123/v4/10/1e/d4/101ed4c1-d958-7adf-e2af-a76a1f4e0f54/pr_source.jpg/100x100bb.jpg', audio: 'https://video-ssl.itunes.apple.com/itunes-assets/Video116/v4/98/09/61/980961b6-74de-b666-9863-ee7d9ebe1cb1/mzvf_2652702372589770135.640x354.h264lc.U.p.m4v'}
, 
{song: 'Channa Mereya', img: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/68/f3/c6/68f3c645-1b25-3d44-af6f-ebe4aea3df08/886446201597.jpg/100x100bb.jpg', audio: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/5c/c2/c9/5cc2c932-e065-e99d-8721-e0eac4e31872/mzaf_17529033236526534532.plus.aac.p.m4a'}
,{ 
    audio: 
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/64/1f/29/641f29a3-b7f7-53e8-d491-7b609cb2df9c/mzaf_14950875121270388946.plus.aac.p.m4a",
img: 
"https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f5/13/34/f51334f2-5e97-d82b-8fff-c935106d6450/mzm.joekxfas.jpg/100x100bb.jpg",
song: "Tukur Tukur"
}
]

let currsong={value:0};
const play = document.getElementById('play-icon');
const songs = document.getElementById('songs');
const child = songs.children;
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const playsong = document.getElementById('play-song');
const playaudio = document.getElementById('play-audio'),
// audioSource = document.createElement('source'),
playimg = document.getElementById('play-img');
var defaultsongs=true;
let loader=document.getElementById("loader");
let spotify=[
    {topic:"Spotify Playlists",data:[
{song: "Today's Top Hits", img: './img/img1.jfif', subheading:'Peggu Gou is on top of the Hottest 50! '}
,
{song: 'RapCaviar', img: './img/img2.jfif', subheading:'New Songs from &nbsp; Quavo, Polo G and Li...'}
, 
{song: 'All Out 2010', img: './img/img3.jfif', subheading:"The biggest songs of the 2010s."}
,{ 
song: "Rock Classic",img: "./img/img4.jfif",subheading:"Rock legends & epic songs that continue t..."
},
{song: "Chill Hits", img: './img/img5.jfif', subheading:'Kick back to the best new and recent chill...'}

    ]
    },
    {topic:"Focus",data:[
        {song: "Peaceful Plane", img: './img/img6.jfif', subheading:'Peaceful plano to help you slow down... '}
        ,
        {song: 'Deep Focus', img: './img/img7.jfif', subheading:'keep calm and focus with amblent and...'}
        , 
        {song: 'Instrumental Study', img: './img/img8.jfif', subheading:"Focus with soft study music in the..."}
        ,{ 
        song: "Focus Flow",img: "./img/img9.jfif",subheading:"Uptempo Instrumental hip hop beats."
        },
        {song: "Beats to think to", img: './img/img10.jfif', subheading:'Focus with deep techno and tech...'}
        
            ]
    },
    {topic:"Sound of India",data:[
        {song: "The Sound of Mu...", img: './img/img11.jfif', subheading:'The songs that define, unite and distinguish... '}
        ,
        {song: 'The Sound of Del...', img: './img/img12.jfif', subheading:'The songs that define, unite and distinguish...'}
        , 
        {song: 'The Sound of Ben...', img: './img/img13.jfif', subheading:"The songs that define, unite and distinguish..."}
        ,{ 
        song: "The Sound of Ch...",img: "./img/img14.jfif",subheading:"The songs that define, unite and distinguish..."
        },
        {song: "The Sound of Hy...", img: './img/img15.jfif', subheading:'The songs that define, unite and distinguish...'}
        
            ]
    },
    {topic:"Prince Playlists",data:[
        {song: "Songs of Lord Shiva", img: './img/img16.jfif', subheading:'Compilation by Various Artists... '}
        ,
        {song: 'Ganpati Bappa Moreya', img: './img/img17.jfif', subheading:'Sweet songs of devotion to praise...'}
        , 
        {song: 'Mata Ka Darbaar', img: './img/img18.jfif', subheading:"Worship the Goddess &nbsp; of love and devotion..."}
        ,{ 
        song: "Shri Rama Jai Rama",img: "./img/img19.jfif",subheading:"Jai Sita Ramayya!"
        },
        {song: "Lord Hanuman Devotional Songs", img: './img/img20.jfif', subheading:'Album by Kumar Vishu...'}
        
            ]
    },

]
let prevPlayesSong=[

];
let a=0;
function start(){
        defaultsongs=true;
        while (songs.firstChild) {
            songs.removeChild(songs.firstChild);
        }
    spotify.map( topic => {
    const div = document.createElement("div");
    div.innerHTML=`<div style="font-size:1.7rem;">${topic.topic}</div>`
    div.setAttribute('id','spotify')
    // div.style.marginTop="5rem";
    
    songs.appendChild(div);
    topic.data.map(data => 
    {
    const article = document.createElement("article"),
    artists = document.createElement("p"),
    song = document.createElement("h4"),
    img = document.createElement("img");

    song.style.marginTop = "0.7rem";

    article.classList.add("top-list");
    article.classList.add("mainSong");
    artists.innerHTML = data.subheading;
    song.innerHTML = data.song;
    img.src = data.img;

    article.appendChild(img);
    article.appendChild(song);
    article.appendChild(artists);
    // prince kosta is great person
    songs.appendChild(article);
    songs.style.justifyContent = "space-evenly";
})
}
)
for(let i=0;i<child.length;i++){
    child[i].addEventListener('click', event => {
        // defaultsongs=true;
        if(child[i].childNodes[1].innerText)term=child[i].childNodes[1].innerText;
        loader.style.display="unset";
        searchBtnClicked=true;
        updateTerm();
    
})}
a=prevPlayesSong.length-1;
}
start();
playimg.style.height = "3.8rem";
playimg.style.width = "3.8rem";
next.style.marginLeft="-1.1rem"
next.style.marginRight="1rem"
prev.style.marginLeft="0.7rem"
prev.style.marginRight="0.7rem"
playaudio.style.width = "70%";
playaudio.style.height = "0.2rem";
playaudio.style.height = "2rem";
playaudio.style.outline = "none";
// play.style.gap="1.7rem"
play.style.cssText = "padding:1rem ;";

const audio = document.getElementsByTagName("audio");
let n=defaultsong.length;
let searchBtnClicked=false,first=true;
let m=0;
function playNextSong(tempSong,curr){
    curr.value = curr.value + 1;
    a=prevPlayesSong.length-1;
    let k = curr.value;
    console.log(k);
    k = k % tempSong.length;
    curr.value=k;
    first=true;
    if (tempSong[k].song.length >= 15)
    playsong.innerHTML = tempSong[k].song.substring(0, 15) + "...";
else playsong.innerHTML = tempSong[k].song;
playaudio.src = tempSong[k].audio;
// audioSource.src = totalsong[k].audio;
playimg.src = tempSong[k].img;

for (let i = 0; i < audio.length; i++) {
    if (audio[k] != audio[i]) audio[i].pause();
    
    // currsong+=1;
}
prevPlayesSong.push({song:tempSong[k].song,img:tempSong[k].img,audio:tempSong[k].audio});
    m++;
    a=prevPlayesSong.length-1;
    playaudio.play();
}
var prevBtnPressed=false;
function playPrevSong(){
    let k=prevPlayesSong.length-1;
    if(first){
        k=prevPlayesSong.length-1;
    }
    else {
        k=a-1;
        if(k<=0){
            k=0;
        }
        a-=1;
    }
    prevBtnPressed=true;
    first=false;
        if (prevPlayesSong[k].song.length >= 15)
    playsong.innerHTML = prevPlayesSong[k].song.substring(0, 15) + "...";
else playsong.innerHTML = prevPlayesSong[k].song;
playaudio.src = prevPlayesSong[k].audio;
// audioSource.src = totalsong[k].audio;
playimg.src = prevPlayesSong[k].img;

for (let i = 0; i < audio.length; i++) {
    if (audio[k] != audio[i]) audio[i].pause();
    
    // currsong+=1;
}
playaudio.play();

}
prev.addEventListener("click",() => {
    if(prevPlayesSong.length>=1){
        playPrevSong();
    }
    else{
        
    }
})
let currsongD={value:0};
next.addEventListener("click",() => {
    if (searchBtnClicked){
        currsong.value=0;
        playNextSong(totalsong,currsongD);
    }
    else{
        
         playNextSong(defaultsong,currsong);
    }
  },
  true
  );

playaudio.addEventListener('ended',() => {
    if (searchBtnClicked){
        currsong.value=0;
        playNextSong(totalsong,currsongD);
    }
    else playNextSong(defaultsong,currsong);
});
let emojies=[
    "Hindi Songs","Romantic Hindi Songs","Most Liked Songs","Sad Hindi Songs","Bhajan"
]
const funemoji= ()=> {
    const emoji_container=document.getElementById("emoji-container");
    const cut=document.getElementById("cross");
    const emoji=document.getElementsByClassName("emoji");
    emoji_container.style.display="flex";
    for(let i=0;i<emoji.length;i++){
        emoji[i].addEventListener('click',()=>{
            term=emojies[i];
            defaultsongs=true;
            emoji_container.style.display="none";
            loader.style.display="unset";
            updateTerm();
        })
    }
    cut.addEventListener('click',()=>{
        emoji_container.style.display="none";
    })

}
const emojiPicker=document.getElementById("emoimg");
emojiPicker.addEventListener('click',funemoji);
emojiPicker.addEventListener('mouseenter',() =>{
    const emojiexplainer=document.getElementById("emoji-explainer");
    emojiexplainer.style.display="unset"
})
emojiPicker.addEventListener("mouseleave",() =>{
    const emojiexplainer=document.getElementById("emoji-explainer");
    emojiexplainer.style.display="none"
})
document.getElementById("cross1").addEventListener("click",()=>{

    document.getElementById("emojiPicker").style.display="none"
})

const updateTerm = () => {
    if(defaultsongs!=true)term = document.getElementById('searchTerm').value;
    if (!term || term === '') {
        alert('Please enter a seach term');
    } else {
        const url = `https://itunes.apple.com/search?term=${term}`;
        term=term.toUpperCase();
        const songContainer = document.getElementById('songs');
        while (songContainer.firstChild) {
            songContainer.removeChild(songContainer.firstChild);
        }
        
        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {

                const artists = data.results;
                if(defaultsongs==true){
                    const mainHeading = document.createElement("div");
                mainHeading.innerHTML=`<div style="font-size:1.7rem;">${term}</div>`
                songContainer.appendChild(mainHeading)
                mainHeading.setAttribute("id",'spotify')
            }
                    // div.style.marginTop="5rem";
                    if(prevBtnPressed){
                        if(prevPlayesSong.length-1!=a){
                            console.log(prevPlayesSong.length);
                            prevPlayesSong.splice(a+1);
                            console.log(prevPlayesSong.length);
                        }
                    }
                    prevBtnPressed=false;
                    totalsong=[
                        
                    ]
                return artists.map(result => {
                    const article = document.createElement('article'),
                    artists = document.createElement('p'),
                    song = document.createElement('h4'),
                    img = document.createElement('img'),
                    audio = document.createElement('audio'),
                    audioSource = document.createElement('source')

                    song.style.marginTop="0.7rem";
                    
                    article.classList.add("top-list");
                    article.classList.add("temp");
                    if(result.artistName.length<20)artists.innerHTML = result.artistName;
                    else artists.innerText= result.artistName.substring(0,19)+"..."
                    // if(result.trackName.length<35)
                    song.innerHTML = result.trackName;
                    // else song.innerText= result.trackName.substring(0,34)+"..."
                    img.src = result.artworkUrl100;
                    audioSource.src = result.previewUrl;
                    audio.controls = true;
                    
                    
                    article.appendChild(img);
                    article.appendChild(song);
                    article.appendChild(artists);
                    
                    article.appendChild(audio);
                    audio.appendChild(audioSource);
                    // prince kosta is great person 
                    
                    songContainer.appendChild(article);
                    const main=document.getElementById("songs");
                    main.style.display="flex";
                    main.style.flex="wrap !important";
                    songContainer.style.display="flex";
                    songContainer.style.flex="wrap";
                    songContainer.style.justifyContent="space-evenly";
                    
                    totalsong.push({song:result.trackName,img:result.artworkUrl100,audio:result.previewUrl});
                })
                
            })
            .then(() => {
                for(let i=0;i<child.length;i++){
                    child[i].addEventListener('click', event => {
                        // while (play.firstChild) {
                            //     play.removeChild(play.firstChild);
                            // }
                        currsongD.value=i;

                        console.log(i);
                        // const audio = document.getElementsByTagName('audio');
                        // play.innerHTML="";
                        if(child[i].children[1].innerHTML.length>=15)playsong.innerHTML = child[i].children[1].innerHTML.substring(0,15)+ "...";
                        else playsong.innerHTML = child[i].children[1].innerHTML
                        let cacheBuster=Date.now();
                        playaudio.src = child[i].childNodes[3].childNodes[0].getAttribute('src')+"?timestamp="+cacheBuster;
                        playaudio.controls = true;
                        // const icon1 = document.createElement('i');
                        console.log(playsong.innerText)
                        playimg.src = child[i].childNodes[0].getAttribute('src')
                        // const icon2 = document.createElement('i');
                        // try{
                        //     playaudio.play();
                        // }
                        // catch (error){
                        //     alert("Song is not Available")
                        //     console.log("Na Ho Payenga: ",error)

                        // }
                        let temp=false;
                        fetch(playaudio.src)
                        .then(response => {
                            if(response.ok){
                                prevPlayesSong.push({
                                    song:playsong.innerText,
                                    img:playimg.src,
                                    audio:playaudio.src
                                })
                                playaudio.play();
                            }
                            else{
                                alert("Audio is not Available");
                            }
                        })
                        
                        a=prevPlayesSong.length-1;
                        playimg.style.height="3.8rem"
                        playimg.style.aspectRatio="1:1"
                        
                        playaudio.style.width='70%';
                        playaudio.style.height='0.2rem'
                        playaudio.style.height='2rem';
                        playaudio.style.outline='none';
                        // play.style.gap="1.7rem"
                        play.style.cssText="padding:1rem ;"
                    }, true)
                }
                
                document.addEventListener('play', event => {
                    // const audio = document.getElementsByTagName('audio');
                    
                    for (let i = 0; i < audio.length; i++) {
                        if (audio[i] != event.target) {
                            audio[i].pause();
                        }
                    }
                }, true)
                // icon2.addEventListener('click',() =>{
                    //     playNextSong(totalsong);
                    // },true)
                })
                .then( ()=>{
                    if(child.length===0){
                        
                        window.alert("Enter full name or songs not found")
                        searchBtnClicked=false;
                        start();
                        
                    }
                    loader.style.display="none";

                })
                    
                }
            }

            
            const searchBtn = document.getElementById('searchTermBtn');
            const smallSearch=document.getElementById('search');
            smallSearch.addEventListener('click',()=>{
                const searchTerm=document.getElementById('searchTerm')
                searchTerm.style.border="0.2rem solid white"
                setTimeout(()=>{
                    searchTerm.style.border="0.1rem solid #3c3c3c"
                },2000)

            })
            // function smallSearchClicked(){
            // }
            searchBtn.addEventListener('click', () =>{
                searchBtnClicked=true;
                defaultsongs=false;
                loader.style.display="unset";
                 updateTerm();
                })
            
            const heading =document.createElement('h4')
            heading.innerText=document.getElementById('searchTerm').value;
            songs.appendChild(heading);
// let arry = Array.from(songs);

