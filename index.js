const rollDice = document.querySelector(".button");
var imagesrc='./imagesFolder/dicedesign/'

rollDice.addEventListener("click", function() {
    // make the images shift and select a random image among them
    const intervalId = setInterval(() => {
        document.getElementsByClassName("die")[0].src=imagesrc + (Math.floor(Math.random()*6)+1) +".png";
        document.getElementsByClassName("die")[1].src=imagesrc + (Math.floor(Math.random()*6)+1) +".png";
    }, 100); // every 100 milliseconds
    
    // Player 1 function
    function playerOneWins(){
        // show winner
        document.querySelector(".playerOne h2").textContent = "Player 1 win!";
        document.querySelector(".playerOne h2").style.color ="yellow";
        //resets nonwinner's color
        document.querySelector(".playerTwo h2").style.color ="white";
        document.querySelector(".playerTwo h2").textContent = "Player 2";
    }


    //player 2 function
    function playerTwoWins(){
        //show winner
        document.querySelector(".playerTwo h2").textContent = "Player 2 win!";
        document.querySelector(".playerTwo h2").style.color ="yellow";
        //resets nonwinner's color
        document.querySelector(".playerOne h2").style.color ="white";
        document.querySelector(".playerOne h2").textContent = "Player 1";
    }

    // draw function
    function ItisADraw(){
        //resets nonwinner's color
        document.querySelector(".playerOne h2").style.color ="white";
        document.querySelector(".playerOne h2").textContent = "Player 1";
        document.querySelector(".playerTwo h2").style.color ="white";
        document.querySelector(".playerTwo h2").textContent = "Player 2";
        const drawText = document.createElement("h2");
        const container = document.querySelector(".container");
        drawText.innerHTML = "It's a <span style='color: red; font-size:2rem;'>draw</span>. Roll again!";
        container.insertBefore(drawText, container.children[1]);
        document.querySelector(".container").style.gridTemplateAreas =` 
            "introText introText"
            "draw draw"
            "playerOne playerTwo"
            "button button"`;
        drawText.style.gridArea="draw";
    }

    
    // Stop the repeated action after 3000 milliseconds
    setTimeout(() => {
        clearInterval(intervalId);
        const chosenDiePlayerOne = (Math.floor(Math.random()*6)+1);
        const chosenDiePlayerTwo = (Math.floor(Math.random()*6)+1);
        document.getElementsByClassName("die")[0].src=imagesrc + chosenDiePlayerOne  +".png";
        document.getElementsByClassName("die")[1].src=imagesrc + chosenDiePlayerTwo +".png";
        //check who is the winner
        if(chosenDiePlayerOne<chosenDiePlayerTwo){
            //need to remove the new added element after the user rolls again
            if((document.querySelector(".container")).children.length===5){
                const drawElement = document.querySelector(".container h2");
                drawElement.remove();
                playerTwoWins();
            }else{
                playerTwoWins();
                }
            
        }else if(chosenDiePlayerOne>chosenDiePlayerTwo){
            if((document.querySelector(".container")).children.length===5){
                const drawElement = document.querySelector(".container h2");
                drawElement.remove();
                playerOneWins();
            }else{
                playerOneWins();
        }
        }else{
            ItisADraw();
        }
    }, 3000);
    
});