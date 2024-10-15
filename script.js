console.log("welcom")
let music = new Audio("music/music1.mp3")
let AudioTurn = new Audio("music/music2.mp3")
let gameover = new Audio("music/music3.mp3")
let Turn = "X"
let isgameover= false;

// function to change the turn
 const changeTurn=()=>{
return Turn === "X"?"0":"X"

 }
// Function to check win
const checkWin = ()=>{
  let boxtexts = document.getElementsByClassName('boxtext');
  let wins=[
    [0,1,2,5,5,0],
    [3,4,5,5,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
  ]
wins.forEach (e=>{
  if((boxtexts[e[0]]?.innerText===boxtexts[e[1]]?.innerText) &&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) &&(boxtexts[e[0]].innerText!=="")){
    document.querySelector('.Info').innerText=boxtexts[e[0]]?.innerText  +  "Won"
    isgameover=true
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style .width="200px";
  //   document.querySelector(".line").style.width="20vw";
  //   document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[4]}deg)`
   }

})
}


// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
  let boxtext = element.querySelector('.boxtext')
  element.addEventListener('click',()=>{
    if(boxtext.innerText ===''){
      boxtext.innerText=Turn;
     Turn= changeTurn();
      AudioTurn.play();
      checkWin();
      if(!isgameover){
      document.getElementsByClassName("Info")[0].innerText="Turn for" + Turn;
    }
    }
  })
})

// Add onclick listener to reset button
reset.addEventListener('click',()=>{
  boxtexte=document.querySelectorAll('.boxtext');
  Array.from(boxtexte).forEach(element=>{
    element.innerText=""
  });
  Turn = "X";
  isgameover=false
    document.getElementsByClassName("Info")[0].innerText="Turn for" + Turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style .width="0px"
})