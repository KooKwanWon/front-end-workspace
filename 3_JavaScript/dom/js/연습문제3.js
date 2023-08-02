let i = 0;

const button1 = document.querySelector('#bt1');
const button2 = document.querySelector('#bt2');

const result = document.querySelector('.main-result');

button2.addEventListener('click',function(){
    window.location.reload();
});

const imgList = document.querySelectorAll('.main-image img');

const imagesArray = ["종빈.png", "자는종빈.jpg", "grid2.jpg"];
const rimg1 = document.querySelector(".a1");
const rimg2 = document.querySelector(".a2");
const rimg3 = document.querySelector(".a3");
const count = document.querySelector("#count");


function changeImagesHandler1() {
    const mainVisual1 = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    rimg1.src = `../../resources/${mainVisual1}`;

}

function changeImagesHandler2() {
    const mainVisual2 = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    rimg2.src = `../../resources/${mainVisual2}`;
}

function changeImagesHandler3() {
    const mainVisual3 = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    rimg3.src = `../../resources/${mainVisual3}`;
    console.log(rimg1.src);
    console.log(rimg2.src);
    console.log(rimg3.src);
    i++;
    count.innerHTML = i;
    if(rimg1.src == rimg2.src && rimg3.src == rimg2.src){
        result.innerHTML = i + '번 만에 승리하셨습니다.';
        button1.disabled = 'disabled';
        button1.style.visibility = 'hidden';

    }
}

button1.addEventListener("click", changeImagesHandler1);
button1.addEventListener("click", changeImagesHandler2);
button1.addEventListener("click", changeImagesHandler3);





