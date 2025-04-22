var msg1 = document.getElementsByClassName('message1')[0];
var msg2 = document.getElementsByClassName('message2')[0];
var msg3 = document.getElementsByClassName('message3')[0];

var answer = Math.floor(Math.random() *100) + 1;
var no_of_guess = 0;
var guess_num = [];

function play(){
    var user_guess = document.getElementById('guess').value;
    if(user_guess < 1 || user_guess > 100){
        alert("Veuillez entrer un nombre entre 1 et 100");
    } else {
        guess_num.push(user_guess);
        no_of_guess+= 1;
        if(user_guess < answer){
            msg1.textContent = "Votre nombre est trop bas";
            msg2.textContent = "Nombre de tentatives : " + no_of_guess;
            msg3.textContent = "Nombres essayés : " + guess_num;
        }
        else if(user_guess > answer){
            msg1.textContent = "Votre nombre est trop haut";
            msg2.textContent = "Nombre de tentatives : " + no_of_guess;
            msg3.textContent = "Nombres essayés : " + guess_num;
        }
        else if(user_guess == answer){
            msg1.textContent = "Félicitations ! Vous avez trouvé le nombre";
            msg2.textContent = "Le nombre était : " + answer;
            msg3.textContent = "Vous l'avez trouvé en " + no_of_guess + " tentatives";
            document.getElementById('guess').disabled = true;
            document.getElementById('guess').style.backgroundColor = 'grey';
        }
    }
}
