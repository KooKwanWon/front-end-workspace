function btn1(){
    console.log(document);
    console.log(document.head);
    console.log(document.title);
    console.log(document.body);
}

function btn2(){
    const div = document.getElementById("testId");
    console.log(div);
}

function btn3(){
    const div = document.getElementsByClassName("testClass");
    console.log(div);
    console.log(div[0]);
}

function btn6(){
    let div = document.querySelector("#testId");
    div = document.querySelector(".testClass");
    console.log(div);
    
    let divList = document.querySelectorAll("div");
    console.log(divList);

}

function btn7(){
    const divList = document.querySelectorAll(".testClass");
   
    divList[0].textContent = '<span>안녕하세요</span>';
    divList[1].innerHTML = '<span>안녕하세요</span>';
    
}

function btn8(){
    const div = document.querySelector("#testId");
   
    div.setAttribute("data-test", "테스트");
    console.log(div.getAttribute(test));
    
       
}

function btn9(){
    const div = document.querySelector("#testId");
    div.style.color = "orange";
    div.style.backgroundColor = "yellow";
}


