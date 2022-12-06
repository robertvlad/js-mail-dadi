//1 - Creare una lista di email

const mails = ['luca@gmail.com', 'alberto@gmail.com', 'andrea@gmail.com', 'sara@gmail.com', 'lucia@gmail.com'];

//2 - Permettere l'inserimento dell'email dell'utente

let user_mail = prompt('Inserisci la tua mail');
console.log(user_mail)

//3 - Confrontare l'email dell'utente con quelle gia reggistrate

let control_mail = false

for (let i = 0; i < mails.length; i++){
    if (user_mail == mails[i]){
        control_mail = true
    }
}

if(control_mail){
    console.log('Email presente')    
}
else{
    console.log('Email non presente')
}