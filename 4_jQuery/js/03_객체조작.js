console.log($('#content1').html());

$('#content2').html($('#content1').html());
$('#content1 a').attr('href', 'http://naver.com')
$('#content2').find('a').prop('href', 'http://naver.com');



console.log($('.content').html());

$('.content').html('zzzzzzz');
$('.content').html(function(index, content){
    console.log(index, content);
    return `<h4>인덱스 : ${index}, 내용 : ${content}</h4>`;
});


$('#content4').html($('#content3').text());
$('#content4').text('<strong>Hello~</strong>');

console.log($('.content2').text());

$('.content2').text(function(index, content){
    console.log(index, content);
    return `<h4>인덱스 : ${index}, 내용 : ${content}</h4>`;
});


// 요소 추가

const p = document.createElement('p');
p.innerHTML = '자바스크립트 추가';
document.querySelector('#area1').appendChild(p);


const p2 = $('<p>').text('제이쿼리로 추가');
$('#area1').append(p2);

// 
$('#add1').append('<span>B</span>');
$('#add1').prepend('<span>B</span>');
$('#add1').after('<span>B</span>');
$('#add1').before('<span>B</span>');
// 
$('<span>B</span>').appendTo('#add5');
$('<span>B</span>').prependTo('#add6');
$('<span>B</span>').insertAfter('#add7');
$('<span>B</span>').insertBefore('#add8');
// 

// 요소 복제
$('#item1').hover(
//     (event) => {
//         console.log(event.type);
//         $(event.target).addClass('bg-hotpink');
//     },
//     (event) => {
//         console.log(event.type);
//         $(event.target).removeClass('bg-hotpink');
//     }
    (event) => {
        $(event.target).toggleClass('bg-hotpink');
    }
); 

//버튼 클릭 시 요소 복제
$('#btn1').click(function(){
    const item = $('#item1').clone(true);
    $('#clone-result').append(item);
});




$('#item2').hover(
        (event) => {
            $(event.target).toggleClass('bg-hotpink');
        }
    ); 

// 
$('#remove').click(function(){
    const remove = $('#item2').remove();
    $('#remove-result').append(remove);
});
   


$('#detach').click(function(){
    const detach = $('#item2').detach();
    $('#remove-result').append(detach);
   
});


$('#empty').click(function(){
    $('#remove-result').empty()
});



const array = [
    {name : '구글', link: 'https://google.com'}, {name : '네이버', link: 'https://naver.com'}, {name : '다음', link: 'https://daum.net'} 
]

array.forEach(function(index, element, origin){
    console.log(index, element, origin);


});

$(array).each(function(index, element){
    console.log(index, element);
});


// 
$(array).each(function(index, element){

$('#each-test').append(`<a href="${element.link}">${element.name}</a><br>`);

});