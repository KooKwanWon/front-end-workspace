$(function () {

    // 
    const pList = document.querySelectorAll('p');
    for (p of pList) {
        p.style.color = "white";
        p.style.backgroundColor = "tomato";
    }

    $('h5').css('color', 'skyblue').css('background-color', 'yellow');

    // 
    document.querySelector('#id1').style.color = 'crimson';

    $('#id2').css('color', 'orange');

    // 
    const items = document.querySelectorAll('.item');
    for (i of items) {
        i.style.color = "green";
        i.style.backgroundColor = 'yellow';
    }

    $('.item').css({ 'color': 'orange', 'background-color': 'green' });

   
    //
    $('div > h3').css('color', 'violet');
    $('div > ul > li').css('color', 'green');
    $('div > ul > li > h3').css('color', 'indianred');

    $('div > h3').css('background-color', 'khaki');
    $('div .ch').css('background-color', 'lime');

   
    // 
    $('#div1 input[class]').css('background-color', 'turquoise');
    $('#div1 input[type=text]').val('change value');
    $('#div1 input[class~=test1]').val('123456789');
    $('#div1 input[type^=ra]').prop('checked', true);
    $('#div1 input[type$=box]').prop('checked', true);
    $('#div1 input[class*=st3]').css({ 'width': '100px', 'height': '100px' }).val('10000');
    
    
    // 
    $('#div2 :text').css('background-color', 'pink');
    $('#div2 :button').val('버튼').css({ 'width': '100px', 'height': '100px' });
    $('#div2 :checkbox').prop('checked', true).css({ 'width': '50px', 'height': '50px' });
    $('#div2 :file').css({ 'background-color': 'yellow' });

    //
    $('#div3 :enabled').css('background-color', 'lavender');
    $('#div3 :disabled').css('background-color', 'lightcyan');
    $('#div3 :checked').css({'width': '30px', 'height': '30px'});

    //
    $('#div3 :checkbox').change(function(){

        const checkbox =$(this);
        console.log(checkbox.attr('checked'));
        console.log(checkbox.prop('checked'));
        
        if(checkbox.prop('checked')){
            checkbox.css({'width': '50px', 'height': '50px'});
        }else{
            checkbox.css({'width': '15px', 'height': '15px'});
        }

    });
    

    $('#national').change(function(){

        const result1 =$(this.value);
      
        console.log(this.value);
            
    });

    $('#hobby').change(function(){

        const result2 =$(this.value);

        console.log(this.value);

    });

    // 
    let cb1 = $('#cb1');
    let cb2 = $('#cb2');

    console.log(`cb1.attr('checked') : ${cb1.attr('checked')}`);
    console.log(`cb2.attr('checked') : ${cb2.attr('checked')}`);

    console.log(`cb1.attr('checked') : ${cb1.prop('checked')}`);
    console.log(`cb2.attr('checked') : ${cb2.prop('checked')}`);


    cb2.attr('checked', 'checked');
    cb1.prop('checked', false);





});