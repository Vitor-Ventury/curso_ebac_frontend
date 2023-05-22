$('document').ready(function(){

})

const form = document.getElementById('todo_form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const taskValue = document.getElementById('task_value').value

    if (time_task.value == 'morning'){
        let newLine = '<div class="organizer">';
        newLine += `<li>${taskValue}</li>`;
        newLine += '<img src="./Images/lixeira.png" alt="Lixeira">';
        newLine += '</div>';

    $('#morning').append(newLine)
    }
    else if (time_task.value == 'afternoon'){
        let newLine = '<div class="organizer">';
        newLine += `<li>${taskValue}</li>`;
        newLine += '<img src="./Images/lixeira.png" alt="Lixeira">';
        newLine += '</div>';
    
        $('#afternoon').append(newLine)
    }
    else{
        let newLine = '<div class="organizer">';
        newLine += `<li>${taskValue}</li>`;
        newLine += '<img src="./Images/lixeira.png" alt="Lixeira">';
        newLine += '</div>';
    
        $('#night').append(newLine)
    }

    document.getElementById('task_value').value = ''

    $('li').click(function(){
        $(this).css('text-decoration', 'line-through');
    })

    $('img').click(function(){
        $(this).parent().remove();
    })
})

