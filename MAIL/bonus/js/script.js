const mails = ['luca@gmail.com', 'alberto@gmail.com', 'andrea@gmail.com', 'sara@gmail.com', 'lucia@gmail.com'];

const check_button = document.getElementById('check_email')

check_button.addEventListener('click', function(){
    let user_mail = document.getElementById('email').value

    let control_mail = false

    for (let i = 0; i < mails.length; i++){
        if (user_mail == mails[i]){
            control_mail = true
        }
    }

    const tag_result = document.getElementById('result')

    if(control_mail){
        tag_result.innerHTML = 'Email presente'    
    }
    else{
        tag_result.innerHTML = 'Email non presente'
    }
})