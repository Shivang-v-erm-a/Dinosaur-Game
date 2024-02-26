scoreCont = document.querySelector(".score");
score = 0;
cross = true;

audio = new Audio("music.mp3");
audioGO = new Audio("gameover.mp3");
setTimeout(()=>{
    audio.play();
},100);

document.onkeydown = function(e){
    console.log("key Code is: ", e.keyCode);
    if(e.keyCode==38){
        dino = document.querySelector(".dino");
        dino.classList.add("animateDino");
        setTimeout(()=>{
            dino.classList.remove("animateDino");
        },700)
    }
    if(e.keyCode==39){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.keyCode==37){
        dino = document.querySelector(".dino");
        dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = (dinoX - 112) + "px";
    }
    
}

setInterval(()=>{
    dino = document.querySelector(".dino");
    gameOver = document.querySelector(".gameOver");
    obstacle = document.querySelector(".obstacle");

    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));

    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    console.log(offsetX, offsetY);

    if(offsetX<73 && offsetY<52){
        gameOver.style.visibility = "visible";
        obstacle.classList.remove("animateObstacle");
        audioGO.play();
        setTimeout(()=>{
            audio.pause();
            audioGO.pause();
        },1000);
        dino = document.querySelector(".dino");
        dino.classList.add("killDino");
    }
    else if(offsetX<145 && cross){
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(()=>{
            cross = true;
        },1000);
    }
},10);

function updateScore(score){
    scoreCont.innerHTML = `Your Score: ${score}`;
}