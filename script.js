// script
//=====================================
// FOR BIMBO ❤️
// Created with love by Samuel
// =====================================

// --------------------
// Loading Screen
// --------------------

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },1000);

    },2500);

});

// --------------------
// Music
// --------------------

const music = document.getElementById("bgMusic");

const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click",()=>{

    if(playing){

        music.pause();

        musicBtn.innerHTML="<i class='fa-solid fa-music'></i>";

        playing=false;

    }

    else{

        music.play();

        musicBtn.innerHTML="<i class='fa-solid fa-volume-high'></i>";

        playing=true;

    }

});

// --------------------
// Begin Button
// --------------------

document.getElementById("beginBtn").addEventListener("click",()=>{

    document.querySelector(".story").scrollIntoView({

        behavior:"smooth"

    });

    music.play();

    playing=true;

});

// --------------------
// Fade Sections
// --------------------

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.2

});

document.querySelectorAll(".hidden").forEach(section=>{

observer.observe(section);

});

// --------------------
// Floating Hearts
// --------------------

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.fontSize=(15+Math.random()*20)+"px";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,500);

// --------------------
// Gallery Lightbox
// --------------------

const images=document.querySelectorAll(".photos img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

lightbox.style.position="fixed";

lightbox.style.left="0";

lightbox.style.top="0";

lightbox.style.width="100%";

lightbox.style.height="100%";

lightbox.style.background="rgba(0,0,0,.95)";

lightbox.style.display="none";

lightbox.style.justifyContent="center";

lightbox.style.alignItems="center";

lightbox.style.zIndex="99999";

document.body.appendChild(lightbox);

const bigImage=document.createElement("img");

bigImage.style.maxWidth="90%";

bigImage.style.maxHeight="90%";

bigImage.style.borderRadius="20px";

bigImage.style.boxShadow="0 0 40px black";

lightbox.appendChild(bigImage);

images.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

bigImage.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

// --------------------
// Typewriter Effect
// --------------------

const letter=document.querySelector(".letter");

const paragraphs=letter.querySelectorAll("p");

paragraphs.forEach(p=>{

const text=p.innerHTML;

p.innerHTML="";

let i=0;

function type(){

if(i<text.length){

p.innerHTML+=text.charAt(i);

i++;

setTimeout(type,20);

}

}

const watch=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

type();

watch.disconnect();

}

});

});

watch.observe(p);

});

// --------------------
// Ending Animation
// --------------------

document.getElementById("instagramBtn").addEventListener("click",()=>{

document.body.style.transition="1s";

document.body.style.background="#000";

document.body.innerHTML=`

<div style="

height:100vh;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

color:white;

font-family:Poppins;

text-align:center;

padding:30px;

">

<h1 style="

font-family:'Great Vibes';

font-size:80px;

color:#FFD369;

margin-bottom:30px;

">

One More Thing...

</h1>

<p style="font-size:28px;max-width:700px;line-height:1.8">

Open your Instagram.

There's one last surprise waiting for you.

❤️

</p>

</div>

`;

});

// --------------------
// Scroll Progress Bar
// --------------------

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="5px";

progress.style.background="#FFD369";

progress.style.width="0";

progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

progress.style.width=(scrollTop/height)*100+"%";

});

// --------------------
// Welcome Message
// --------------------

console.log("For Bimbo ❤️");

console.log("Made with love by Samuel.");

// ====================================
// END
// ====================================