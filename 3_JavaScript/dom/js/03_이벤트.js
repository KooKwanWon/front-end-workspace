// window.addEventListener('DOMContentLoaded', function(){
    
//     const h1 = document.querySelector('h1');
//     console.log(h1);

// });


const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', function(){

    h1.style.backgroundColor = "skyblue";

});


const click1 = document.querySelector('.container img:nth-child(1)');
const click2 = document.querySelector('.container img:nth-child(2)');
const click3 = document.querySelector('.container img:nth-child(3)');
const click4 = document.querySelector('.container img:nth-child(4)');
const click5 = document.querySelector('.container img:nth-child(5)');

const clickall = document.querySelectorAll('.container img');

function removeHandler(e){
    console.log(e.target);
    
    if(e.target!==e.currentTarget){
    e.target.style.visibility = 'hidden';
    }
    
}

for (let i = 0; i < clickall.length; i++) {
   
    clickall[i].addEventListener('click', removeHandler);
    
}

