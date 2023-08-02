$(function () {

$('h4').first().css("font-size", "4rem");
$('h4:first').css("font-size", "3rem");
$('h4').filter(':first').css("font-size", "2rem");


$('h4').last().css("font-size", "2rem");

$('h4').eq(4).text("테스트-5");


$('.test').odd().css({'color': 'white', 'background-color': 'royalblue'});

$('.test').even().css({'color': 'white', 'background-color': 'hotpink'});

$('h4').not('.test').css({'color': 'white', 'background-color': 'chocolate'});

//


$('span').parent().css({'color': 'red', 'border': '2px solid'})

$('li').parentsUntil('.wrap').css('color', 'blue');

$('li').parents('div').css({'border': '2px dashed', 'color': 'tomato'});

// $('span').parentsUntil('.wrap div').css({'background-color': 'lavenderblush'});

let style1 = {'color': 'deeppink', 'border': '2px solid'};
let style2 = {'color': 'yellow', 'border': '2px solid'};
let style3 = {'color': 'green', 'border': '2px solid'};
let style4 = {'color': 'purple', 'border': '2px solid'};
let style5 = {'color': 'orange', 'border': '2px solid'};

console.log($('.wrap').children());
console.log($('.wrap').find('span'));

$('.wrap').children().css(style1);
$('.wrap').children().children().css(style2);
$('.wrap').children().children('ul').css(style3);
$('.wrap').children().children().children('li').css(style4);
$('.wrap').find('span').css(style5);

console.log($('.wrap2 h2').siblings());

$('.wrap2 h2').siblings().css(style3);
$('.wrap2 h2').siblings('p').css(style2);
$('.wrap2 h2').next().css(style1);
$('.wrap2 h2').nextAll().css('background-color', 'pink');
$('.wrap2 h2').nextUntil('p').css('border', '2px dashed');
$('.wrap2 h2').prev().css(style5);
$('.wrap2 h2').prevAll().css('background-color', 'moccasin');
$('.wrap2 h2').prevUntil('p').css('font-size', '2rem');




});