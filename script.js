let y = Math.floor(Math.random() * 10 + 1);


let guess = 1;

document.getElementById("submitguess").onclick = function () {

 
    let x = document.getElementById("guessField").value;

    if (x === ''){
       alert('ჩაწერეთ რიცხვი')
    }
    else if (x == y) {
        alert("გილოცავთ, სწორად გამოიცანით! "
            + guess + " ცდაში ");
    }

    else if (x > y) {
        guess++;
        alert("სცადეთ უფრო პატარა რიცხვი");
    }
    else {
        guess++;
        alert("სცადეთ უფრო დიდი რიცხვი")
    }
}