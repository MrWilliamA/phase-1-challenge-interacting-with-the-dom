
let seconds = 0;


const timer = document.getElementById('counter');

let counterFunc = setInterval(function() { 
    seconds += 1;
    timer.innerText = seconds;
}, 1000);

const decrease = document.getElementById('minus').addEventListener("click", minusFunc);

function minusFunc() {
seconds -= 10;
}
const increase = document.getElementById('plus').addEventListener("click", plusFunc);

function plusFunc() {
seconds += 10;
}

const like = document.getElementById('heart').addEventListener("click", likeFunc);

let likes = 0;
let timerCurrent = 0;

function likeFunc() {

    let timerCurrent = document.getElementById('counter').innerText;
    let restart = document.getElementById('counter').innerText;

    if(restart != timerCurrent) {

        console.log("dsasd");
    }

    likes += 1;
    
    const currentTime = document.getElementById('counter').innerText;

   
    let numOfLikes = `${currentTime} has been liked ${likes} times`;

    const list = document.createElement('li');
    
    list.innerText = numOfLikes;
    
    document.querySelector('.likes').appendChild(list);

    }


     const pause = document.getElementById('pause');
    pause.addEventListener('click', pause => {
        const button = document.querySelectorAll('button').forEach(btn => { 
            
            if(btn.id != "pause" ) {
            btn.setAttribute("disabled", "true");
            console.log(btn)
        } else {
            btn.innerHTML = "Play";
            btn.className = "play";
        }
        });


        // pause = document.getElementById('pause').disable = false;
    });