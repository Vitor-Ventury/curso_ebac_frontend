const form = document.getElementById('form_id')


form.addEventListener('submit', function(e){
    e.preventDefault();

    const firstValue = document.getElementById('first_value');
    const secondValue = document.getElementById('second_value');

    firstValue.addEventListener('keyup', function(){
        document.getElementById('btn_send').disabled = false
    })
    secondValue.addEventListener('keyup', function(){
        document.getElementById('btn_send').disabled = false
    })
    

    if (parseInt(secondValue.value) > parseInt(firstValue.value)) {
        document.getElementById('success_message').style.display='block';
        document.getElementById('error_message').style.display='none';
        document.getElementById('first_value').style.border=''
        form.reset()
    }
    else {
        document.getElementById('error_message').style.display='block'
        document.getElementById('success_message').style.display='none'
        document.getElementById('first_value').style.border='2px solid red'
        document.getElementById('btn_send').disabled = true
    }
})

