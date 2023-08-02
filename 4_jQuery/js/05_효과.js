$('#show').click(function(){
    $('#img').show(3000);
});

$('#hide').click(function(){
    $('#img').hide(3000, 'swing');
});

$('#toggle').click(function(){
    $('#img').toggle(3000);
});



$('#fadeIn').click(function(){
    $('#img2').fadeIn(1000);
});

$('#fadeOut').click(function(){
    $('#img2').fadeOut(1000);
});

$('#fadeToggle').click(function(){
    $('#img2').fadeToggle(1000);
});

$('#fadeTo').click(function(){
    $('#img2').fadeTo(1000, '50%');
});

$('#img').hover(
    function(){
        $(this).fadeTo(1000, 0.5);
    },
    function(){
        $(this).fadeTo(1000, 1);
    }
);


$('#slideDown').click(function(){
    $('#img2').slideDown(1000);
});

$('#slideUp').click(function(){
    $('#img2').slideUp(1000);
});

$('#slideToggle').click(function(){
    $('#img2').slideToggle(3000);
});




// $('.menu').click(function(e){
//     const content = $(e.target).next();
//     if(content.css('display') === 'none')  {
//         content.slideDown(500);
//     }else{
//         content.slideUp(500);
//     }
// });

$('.menu').click(function(e){
    const content = $(e.target).next();
       
    if(content.css('display') === 'none')  {
        $('.menu').next().slideUp(500);
        content.slideDown(500);
    }else{
        content.slideUp(500);
    }
});



