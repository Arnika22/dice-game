document.getElementById("button").addEventListener("click",function(){
    sound()
    let img1=Math.floor(Math.random()*6)+1;
    let img2=Math.floor(Math.random()*6)+1;
    // console.log(img1,img2);
    document.getElementById("img1").src=`photo/${img1}.png`;
    document.getElementById("img2").src=`photo/${img2}.png`;
    
    if(img1>img2)
    {
    document.querySelector("h1").textContent="🎊Player 1 wins🎊";
    }
    else if(img1<img2)
    {  
        document.querySelector("h1").textContent="🎋Player 2 wins🎋";
    }
    else
    {
        document.querySelector("h1").textContent="🎈Oops! It's a DRAW🎈";
    
    }});
    
function sound (){
    let audio=new Audio("b.mp3");
    audio.play();
}                
  