const USERNAME = "bilali";
const PASSWORD = "tridhu@143";

const photos = [

"photos/1.jpg",
"photos/2.jpg",
"photos/3.jpg",
"photos/4.jpg",
"photos/5.jpg",
"photos/6.jpg",
"photos/7.jpg",
"photos/8.jpg",
"photos/9.jpg",
"photos/10.jpg",
"photos/11.jpg",
"photos/12.jpg",
"photos/13.jpg",
"photos/14.jpg",
"photos/15.jpg",
"photos/16.jpg",
"photos/17.jpg"
];

function login(){

const user=document.getElementById("username").value;
const pass=document.getElementById("password").value;

if(user===USERNAME && pass===PASSWORD){

document.getElementById("loginPage").style.opacity=0;

setTimeout(()=>{

document.getElementById("loginPage").style.display="none";
document.getElementById("mainPage").style.display="block";

const music = document.getElementById("birthdayMusic");
music.volume = 0.5;
music.play();

startPhotos();

},1000);

}
else{

const popup=document.getElementById("popup");

popup.style.opacity=1;

setTimeout(()=>{

popup.style.opacity=0;

},2500);

}

}

function random(min,max){

return Math.random()*(max-min)+min;

}

function createPhoto(){

const img=document.createElement("img");

img.src=photos[Math.floor(Math.random()*photos.length)];

img.className="photo";

// img.style.left=random(5,80)+"%";
// img.style.top=random(5,70)+"%";

    // start
let x;
let y;

do {

    x = random(5,90);
    y = random(5,85);

} while (
    x > 35 && x < 65 &&
    y > 30 && y < 65
);

img.style.left = x + "%";
img.style.top = y + "%";

    // end

const move=Math.random()<0.5?-350:350;

img.style.setProperty("--moveX",move+"px");

img.style.setProperty("--rotate",random(-18,18)+"deg");

document.getElementById("photoContainer").appendChild(img);

setTimeout(()=>{

img.remove();

},8000);

}

function startPhotos(){

setInterval(createPhoto,1200);

}

function togglePassword(){

    const password=document.getElementById("password");

    const icon=document.getElementById("togglePassword");

    if(password.type==="password"){

        password.type="text";
        icon.textContent="🙈";

    }else{

        password.type="password";
        icon.textContent="👁";

    }

}
