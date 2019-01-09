# Seinfeld Trivia Game

This trivia game tests the player's knowledge of the show Seinfeld.  There are 8 questions total and the player will have 20 seconds to answer each question.  The game keeps track of each incorrect, correct and unanswered (time ran out) question and will display the player's score at the end of the game. Access the deployed app [here](https://ckernan.github.io/SeinfeldTriviaGame/).

## How It Works

Once the player clicks the start button, the first question will appear. The game will display four possible answers to the question and it is up to the player to choose the correct one. A setTimeout function gives the user 20 seconds to select their answer. If they are correct, a "Correct!" screen will be displayed and their correct questions score will increment by 1 point.  If they are wrong, a "No Soup For You!" screen will follow displaying the correct answer and their incorrect question score will increment by 1 point. If the player does not make a selection within the allotted time they will be shown a "Time's Up!" screen with the correct answer and the game will increment their unanswered question score by 1 point. Whether the user answers a question or time runs out, another setTimeout function will call the next question after 4 seconds. After answering the 8 total questions the game will display the final tally of each correct, incorrect and unanswered question and the user will be given the option to play again.

## Preview

![Seinfeld Trivia Game GIF](/assets/images/SeinfeldTriviaGame.gif)

## Built With

* HTML
* CSS
* [Bootstrap](https://getbootstrap.com/)
* [Javascript](https://www.javascript.com/)
* [JQuery](https://jquery.com/)