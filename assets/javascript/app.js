$(document).ready(function() {

	$(".start").mouseenter(function() {
		$('.start').fadeTo('fast',0.25);
	});

	$("#button").on('click', function(){


			startGame();
			timer();

	})

	});




	//iterating the questions

	questionNumber = 1;

	var questionsArray = [{

	  question: "This is the first question?",
	  choices: ["one","two","three", "four"],
	  correctChoice: "two"
	},
	{
	  question: "This is the second question?",
	  choices: ["one","two","three", "four"],
	  correctChoice: "one"
	}
];

	// Array of Question Objects [0,1,2,3]

	console.log(questionsArray[0].question) // this is the first question in that objects
	console.log(questionsArray[0].choices[0])
	console.log(questionsArray[0].choices[1])
	console.log(questionsArray[0].choices[2])
	console.log(questionsArray[0].choices[3])
	console.log(questionsArray[0].correctChoice)


	//game over
	//if (questionNumber == questionsArray.length()) {
	//}

	// game object (can reference question back object at any time)

	var game = {

	// variables
	  questionNumber: 0,
	  correctAnswers: 0,
	  wrongAnswers: 0,
	  unAnswered: 0,

	// FUNCTIONS

		//
	  timer: function() {
			var timer = 30;

			setTimeout(thirtySeconds, 1000 * 30);
			console.display(setTimeout);
			console.display(timer);

			$('#timer').html(timer);
			$('#timer').html(setTimeout);
	}

};