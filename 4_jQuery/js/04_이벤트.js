
$('#userId').keyup(function() {
    const userid = $('#userId').val();
    
    if (checkUsername(userid)) {
        $('#idCheck').text('사용 가능한 아이디입니다.');
    }else if(userid === ""){
        $('#idCheck').text('');
    }else {
        $('#idCheck').text('사용 불가능한 아이디입니다.');
    }
});

function checkUsername(userid) {
    const cond = /^[a-z][0-9A-Za-z]{4,12}$/;
    return cond.test(userid);
}



$('#area3').on('click', function(){
    let i = parseInt($('#counter2').text());
    $('#counter2').text(++i);
});


$('#btn').on('click', function(){
    $('#area3').trigger('click');
});