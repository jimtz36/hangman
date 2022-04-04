var words=["whataburger","cheese","steak","beatles","coffee","clap"];
var sentences=["bees in the trap", "im hungry", "what are we going to eat","bean and cheese taco","whataburger","cheese","steak","beatles","coffee","clap"];
var theWord;
var guesses = 0;
var lose = false;
function setGame(){
    //document.getElementById("hangman-box").textContent = "You Win";
    choose = Math.floor(Math.random() * 11)
    theWord = sentences[choose];
    //console.log(theWord);
    fillWord(theWord);
    makeLetterButtons();
}

function fillWord(word){
    var wordSpace = document.getElementById("word-space");
    wordSpace.textContent = "";

    for(var i=0; i<word.length;i++){
        console.log(word.length);
        if(word[i] == " "){
            wordSpace.textContent += " ";
        }else{
            wordSpace.textContent += "-";
        }
    }
}

function makeLetterButtons(){
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var i=0;i<alpha.length;i++){
        var button = document.createElement("button");
        button.setAttribute("id","button-"+alpha[i]);
        button.setAttribute("class","buttons");
        button.textContent = alpha[i];
        document.getElementById("letter-buttons").appendChild(button);
        button.addEventListener("click",takeGuess)
        
    }
}

function takeGuess(event){
    source = event.target.id;
    guess = document.getElementById(source).textContent;
    end = false;

    if(lose == true){
        return;
    }
    console.log("Wrong Guesses: "+guesses);
    //console.log(document.getElementById(source).textContent);
    //console.log(theWord);
    for(var i=0;i<theWord.length;i++){
        if(guess.toLowerCase() == theWord[i]){
            end = true;
            var word = document.getElementById("word-space").textContent;
            var replace = "";
            for(var j=0;j<word.length;j++){
                if(j == i){
                    replace += guess;
                }else{
                    replace += word[j];
                }
            }
            document.getElementById("word-space").textContent = replace;
            
        }
        document.getElementById(source).setAttribute('disabled','disabled');
        if(end == true){
            if(theWord.toLowerCase() == document.getElementById("word-space").textContent.toLowerCase()){
                console.log("YOU WIN!!!");
                document.getElementById("hangman-box").textContent = "You Win";
            }
            //return;
        }

    }
    guesses += 1;
    if(guesses > 10){
        console.log("Game Over");
        lose = true;
        return;
    }

}