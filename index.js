// Gjette lek

let num = Math.floor(Math.random()*100);
let guess = prompt("Skriv et tall mellom 1 og 100");
let correct = true


while (correct) {
    if(guess < num){
        guess = prompt("Guess a higher number")
    } else if(guess > num){
        guess = prompt("Guess a lower number")
    } else if(guess == num){
        alert("You guessed right! :)")
        correct = false
    }
}


//Oppgave 2

for (let i = 0; i <= 9; i++) {
    for (let o = 0; o < 10; o++) {
        document.write(o+" ")
    }document.write("<br>")
}
