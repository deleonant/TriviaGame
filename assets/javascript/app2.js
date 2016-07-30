$(document).ready(function() {

// Start Button action
	$('#start').on('click', function() {
	    game.loadQuestion();
	});

// Check Answers Selected
	$(document).on('click', '.check-guess', function(e) {
	    game.checkGuess(e)
	})


	// Global Variables
	var panel = $('#quiz');
	var timerpanel = $('#time');
	var time = 30;


// Object of Questions
	var questionsArray = [{
	    question: "This is the first question?",
	    choices: ["one", "two", "three", "four"],
	    choiceimages: ["one", "two", "three", "four"],
	    correctChoice: "two",
	    //image: ""
	}, {
	    question: "This is the second question?",
	    choices: ["one", "two", "three", "four"],
	    correctChoice: "one"
	    //image:
	}, {
	    question: "This is the third question",
	    choices: ["one", "two", "three", "four"],
	    correctChoice: "three"
	    //image: ""
	}];

	// var question1 = questionsArray[0].question

////////////////////////// Game Object ////////////////////////////////////////
	var game = {

		  // VARIABLES
	    questions: questionsArray, // Import QuestionsArray into the Game Object
	    correctAnswers: 0,
	    wrongAnswers: 0,
	    unAnswered: 0,
	    questionNumber: 0,


// this function will display my 30 second countdown
	countdown: function() {

		function run(){
				counter = setInterval(decrement, 1000);
		} // end of run

		function decrement(){
				time--;
				$(timerpanel).html('<h2>Time Remaining:' + time + '</h2>');
				// if you run out of time, go to next question and add 1 to wrong answer
				if (time === 0){
						nextQuestion();
						wrongAnswers++;
						questionNumber++;
					}// end of if wrong
		}// end of decrement
		run();
	}, // end of countdown



	nextQuestion: function () {
				game.currentQuestionNumber++;
				game.loadQuestion;

	},


	loadQuestion: function() {
					//remove start game
	        $('#start').remove();

					//start countdown of timer
					game.countdown();

					var questionDiv = $("<div>");
					var choiceButton = $("<button>");

					// for loop to turn choices into buttons?

					$(questionDiv).html(this.questions[game.questionNumber].question);
					$(panel).append(questionDiv);

					// for loop to turn choices into buttons?
					$(choiceButton).html(this.question[game.questionNumber].choices);
					$(panel).append(choiceButton);
	        }
}
});