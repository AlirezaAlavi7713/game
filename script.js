var msg1 = document.getElementsByClassName('message1')[0];
var msg2 = document.getElementsByClassName('message2')[0];
var msg3 = document.getElementsByClassName('message3')[0];

var answer = Math.floor(Math.random() *100) + 1;
var no_of_guess = 0;
var guess_num = [];

function play(){
    var user_guess = document.getElementById('guess').value;
    if(user_guess < 1 || user_guess > 100){
        alert("please enter a number between 1 and 100");
    } else {
        guess_num.push(user_guess);
        no_of_guess+= 1;
        if(user_guess < answer){
            msg1.textContent = "your guess is too low";
            msg2.textContent = "no of guess" + no_of_guess;
            msg3.textContent = "guess number" + guess_num;
        }
        else if(user_guess > answer){
            msg1.textContent = "your guess is too high";
            msg2.textContent = "no of guess" + no_of_guess;
            msg3.textContent = "guess number" + guess_num;
        }
        else if(user_guess == answer){
            msg1.textContent = "congratulation you guessed the number";
            msg2.textContent = "the number was: " + answer;
            msg3.textContent = "you guessed it in " + no_of_guess + " guesses";
            document.getElementById('guess').disabled = true;
            document.getElementById('guess').style.backgroundColor = 'grey';
        }
    }
}
