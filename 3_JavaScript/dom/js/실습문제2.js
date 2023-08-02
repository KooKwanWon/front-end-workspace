 window.onscroll = function() {myFunction()};
    function myFunction() {
      var winScroll = window.scrollY;
      var height = '1900';
      var scrolled = (winScroll / height) * 100;
     document.getElementById("myBar").style.width = scrolled + "%";
     console.log((winScroll / height) * 100);
    }


const bar1 = document.querySelector(".progress-bar");

function changebar1() {

    bar1.innerHTML = window.scrollY;
    
}

var i = 0;

function move() {
 
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      
    width = window.scrollY;
    elem.style.width = width + "%";
     
    //  console.log(window.scrollY);
    // console.log(this.document.body.offsetHeight);
    // console.log(this.window.innerHeight);
    
 }
}

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

let currentSection = section1;


window.addEventListener('wheel', function(event){
    if(event.deltaY > 0) {
        if(currentSection === section1){
            window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;
        }else if(currentSection === section2){
            window.scrollTo({top: section3.offsetTop, behavior: 'smooth'});
                currentSection = section3;
    }

    }else{
        if(currentSection === section3){
            window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;
        }else if(currentSection === section2){
            window.scrollTo({top: section1.offsetTop, behavior: 'smooth'});
                currentSection = section1;
        }
    }

} );




const nav = document.querySelector('nav');

let current;

function navHandler(e){
    if(current){
        current.style.backgroundColor = 'white';
        current.style.color = 'black';
    }

    if(e.target!==e.currentTarget){
    // console.log(e.target);
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'white';
    current = e.target;}
}

nav.addEventListener("click", navHandler);

window.addEventListener('scroll', function(){
    if((section1.getBoundingClientRect().top)===0){
        section1.children[0].classList.add('text-anmation');
    }else{
        section1.children[0].classList.remove('text-anmation');
    }
});

window.addEventListener('scroll', function(){
    if((section2.getBoundingClientRect().top)===0){
        section2.children[0].classList.add('text-anmation');
    }else{
        section2.children[0].classList.remove('text-anmation');
    }
});

window.addEventListener('scroll', function(){
    if((section3.getBoundingClientRect().top)===0){
        section3.children[0].classList.add('text-anmation');
    }else{
        section3.children[0].classList.remove('text-anmation');
    }
});