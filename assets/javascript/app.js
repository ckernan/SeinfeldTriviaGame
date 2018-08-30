var correct = 0;
var incorrect = 0;
var unanswered = 0;
var time = 20;
var count = 0;
var timeCounter;
var timesUpCounter;
var questions = [
    {
        question: "Who leaves a message on Jerry's phone machine threatening to \"put the kibosh\" on him?",
        answer1: "Bob Sacamano",
        answer2: "Crazy Joe Davola",
        answer3: "Newman",
        answer4: "Jack Klompus",
        answer: "Crazy Joe Davola",
        answer_num: 2,
    },
    {
        question: "What does Jerry agree to wear on \"The Today Show\"?",
        answer1: "Skinny jeans",
        answer2: "Eye patch",
        answer3: "Puffy shirt",
        answer4: "Cowboy hat",
        answer: "Puffy shirt",
        answer_num: 3,
    },
    {
        question: "Elaine's boss Mr. Pitt eats what with a fork and knife?",
        answer1: "A twinkie",
        answer2: "A snickers bar",
        answer3: "A hot dog",
        answer4: "A moon pie",
        answer: "A Snickers bar",
        answer_num: 2,
    },
    {
        question: "What is on the vanity plates that Kramer accidently recieves from the DMV?",
        answer1: "BIG BOY",
        answer2: "DR. LOVE",
        answer3: "10 INCHES",
        answer4: "ASSMAN",
        answer: "ASSMAN",
        answer_num: 4,
    },
    {
        question: "What does Jerry steal from an old woman on the street when she won't sell it to him for $50?",
        answer1: "A marble rye",
        answer2: "A cinnamon babka",
        answer3: "A chocolate babka",
        answer4: "A black and white cookie",
        answer: "A marble rye",
        answer_num: 1,
    },
    {
        question: "Which of the following is not an occupation George lies about having?",
        answer1: "Marine biologist",
        answer2: "Latex salesman",
        answer3: "Nuerosugeon",
        answer4: "Architect",
        answer: "Nuerosurgeon",
        answer_num: 3,
    },
    {
       question: "Who provided the voice for Yankees owner George Steinbrenner?",
       answer1: "Larry David",
       answer2: "Jerry Seinfeld",
       answer3: "Michael Richards",
       answer4: "George Steinbrenner",
       answer: "Larry David",
       answer_num: 1, 
    },
    {
       question: "What kind of candy does Kramer drop into a patient while watching a live operation?",
       answer1: "A jujyfruit",
       answer2: "A junior mint",
       answer3: "A gummy bear",
       answer4: "A milk dud",
       answer: "A junior mint",
       answer_num: 2,
    }
];

function startGame() {
    $("#title-img").addClass('hide');
    $("#start-game").addClass('hide');
    $("#timer").removeClass('hide');
    $(".list-group").removeClass('hide');
    displayQuestion();
};

function displayQuestion() {
    $("#question-count").html('<h4>Question ' + parseInt(count + 1) + '/' + parseInt(questions.length) + '</h4>');
    $("#timer").removeClass('hide');
    $("#timer").html('<h3>Timer: ' + time + 's</h3>');
    timeCounter = setInterval(timer, 1000);
    $("#question").removeClass('hide');
    $("#question").html('<h2>' + questions[count].question + '</h2>');
    displayAnswers();
    timesUpCounter = setTimeout(timesUp, 1000 * 20);

};

function timer() {
    time--;
    $("#timer").html('<h3>Timer: ' + time + 's</h3>');
};

function displayAnswers() {
    $("#answer1").html(questions[count].answer1);
    $("#answer2").html(questions[count].answer2);
    $("#answer3").html(questions[count].answer3);
    $("#answer4").html(questions[count].answer4);
};

function timesUp() {
    $(".list-group").addClass('hide');
    //$("#image").removeClass('hide');
    $("#result").removeClass('hide');
    $("#timer").addClass('hide');
    $("#question").addClass('hide');
    $("#answer").removeClass('hide');
    clearInterval(timeCounter);
    clearInterval(timesUpCounter);
    unanswered++;
    $("#result").html("<h2>Time's Up!</h2>");
    //$("#image").html(timesUpGif)
    $("#answer").html('<h2>Answer: ' + questions[count].answer + '</h2>');
    setTimeout(nextQuestion, 5000);
};

function nextQuestion() {
    $("#answer").addClass('hide');
    //$("#image")
    $("#result").addClass('hide');
    $(".list-group").removeClass('hide');
    clearInterval(timeCounter);
    clearInterval(timesUpCounter);
    time = 20
    count++;
    if(questions.length === count) {
        gameEnd();
    } else {
        displayQuestion();
    }

};

function guessAnswer(num) {
    $("#question").addClass('hide');
    $(".list-group").addClass('hide');
    $("#timer").addClass('hide');
    $("#answer").removeClass('hide');
    //$("#image").removeClass('hide');
    $("#result").removeClass('hide');
    if(num === questions[count].answer_num) {
        clearInterval(timeCounter);
        clearInterval(timesUpCounter);
        correct++;
        $("#result").html("<h2>Correct!</h2>");
        //$("#image"); answer pic
        $("#answer").html('<h2>Answer: ' + questions[count].answer + '</h2>');
        setTimeout(nextQuestion, 5000);
    } else {
        clearInterval(timeCounter);
        clearInterval(timesUpCounter);
        incorrect++;
        $("#result").html("<h2>No Soup For You!</h2>");
        //$("#image"); wrong pic
        $("#answer").html('<h2>Answer: ' + questions[count].answer + '</h2>');
        setTimeout(nextQuestion, 5000);
    }

}