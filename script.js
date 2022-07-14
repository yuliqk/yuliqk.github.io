var settingsbtn = document.getElementById('settings')
var settingsdiv = document.getElementById('settingsdiv')
var closebtn = document.getElementById('close')
var muzikresmi = document.getElementById('müzikresmi')
var dondur = document.getElementById('dondur')
var alan = document.getElementById('alan')
var audio = document.getElementById('audio')
let sarki = document.getElementById('sarki')
let sarkici = document.getElementById('sarkici')
let ileri = document.getElementById('ileri')
let geri = document.getElementById('geri')

let muziksirasi = 0

let muzikler = [
  {
    name : 'Gibi',
    artist : 'Hidra',
    music : '/esyalar/gibi.mp3',
    image : '/esyalar/gibi.jpg',
  },
  {
    name : 'Bu Benim Hayatım',
    artist : 'No.1',
    music : '/esyalar/bubenimhayatim.m4a',
    image : '/esyalar/bbh.jpg',
  },
  {
    name : 'Hikayem Bitmedi',
    artist : 'Can Bonomo',
    music : '/esyalar/hikayembitmedi.m4a',
    image : '/esyalar/hikayembitmedi.jpg',
  },
]
loadtrack(muziksirasi)

function loadtrack(muziksirasi) {
  sarki.innerText = muzikler[muziksirasi].name
  sarkici.innerText = muzikler[muziksirasi].artist
  audio.src = muzikler[muziksirasi].music
  muzikresmi.src = muzikler[muziksirasi].image

}
settingsbtn.onclick = () => {
    settingsdiv.style.display = 'flex'
    closebtn.style.display = 'flex'
    settingsbtn.style.display = 'none'
    alan.style.display = 'none'
}

closebtn.onclick = () => {
  settingsdiv.style.display = 'none'
  closebtn.style.display = 'none'
  settingsbtn.style.display = 'flex'
  alan.style.display = 'flex'
  
}

audio.onplay = () => {
  muzikresmi.className = 'startroute'
  muzikresmi.style.animationPlayState = 'running'
}
audio.onpause = () => {
  muzikresmi.style.animationPlayState = 'paused'
}
audio.addEventListener('ended',bitti)

function bitti() {
  if (muziksirasi < muzikler.length - 1) {
    muziksirasi +=1
  }
  else{
    muziksirasi=0
  }
  loadtrack(muziksirasi)
}
ileri.onclick=()=>{
  if (muziksirasi < muzikler.length - 1) {
    muziksirasi += 1
  }
  loadtrack(muziksirasi)
}
geri.onclick = () => {
  if (muziksirasi > 0) {
    muziksirasi -= 1
  }
  loadtrack(muziksirasi)
}

setInterval(function (){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    document.body.style.background = Color1;
} ,3000)

