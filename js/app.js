/*var qc = {
	currentQuestion: {
		number: -1,
		answer: "-"
	},
	questionList: 0,
	currentIndex: 0,

	start: function(index) {
		alert(index);
	}
};*/



function questionController(questions) {
	var currentQuestion = {
		number: -1,
		answer: "test"
	};

	var questionItems = questions; 

	var currentIndex = 0; 



	var processAnswer = function(event) {
		if($("#radio_dc").is(":checked")) {
			currentQuestion.answer = "DC";
		} else if($("#radio_marvel").is(":checked")) {
			currentQuestion.answer = "Marvel";
		} 

		//feedback display//

		console.log(currentQuestion.answer);

		if((currentIndex + 1) < questionList.length) {

			display(currentIndex+1);

		} else {
			alert("DONE");
		}

		currentIndex++;
	} 	
		
	var display = function(arrayIndex) {
		currentQuestion = questionItems[arrayIndex];
		currentIndex = arrayIndex;

		$("#questionName").html(currentQuestion.name);
		$("#questionImage").attr("src", currentQuestion.image);

		$("#radio_dc").prop('checked', false);
		$("#radio_marvel").prop('checked', false);

		console.log(currentQuestion.name);
		console.log(currentIndex);
	}

	start = function(startIndex) {
		$('.radio_button').change(function(event) {
			processAnswer(event);
		});

		display(startIndex);
	}
}

var questionCount = 0;

var questionItems = new Array();

questionItems[0] = new QuestionItem(
	'Superman',
	'css/img/superman.jpg',
	'DC',
	'');

questionItems[1] = new QuestionItem(
	'Hulk',
	'css/img/hulk.jpg',
	'Marvel',
	'');

questionItems[3] = new QuestionItem(
	'Superman',
	'css/img/superman.jpg',
	'DC',
	'');

questionItems[4] = new QuestionItem(
	'Superman',
	'css/img/superman.jpg',
	'DC',
	'');

questionItems[5] = new QuestionItem(
	'Superman',
	'css/img/superman.jpg',
	'DC',
	'');

function QuestionItem(name, image, group, answer) {
	this.name   = name;
	this.image  = image;
	this.group  = group;
	this.answer = answer;
}
function startQuiz() {
	console.log(questionItems[questionCount]);
}

function showQuestion(currentQuestion) {
	$("#radio_dc").prop('checked', false);
	$("#radio_marvel").prop('checked', false);

	$("#questionName").html(currentQuestion.name);
	$("#questionImage").attr("src", currentQuestion.image);
}

function checkAnswer() {
	if (questionItems[questionCount].group == questionItems[questionCount].answer) {
		alert("correct");
	}
	else {
		alert("incorrect");
	}

	
	questionCount++;
	showQuestion(questionItems[questionCount]);

}

$(document).ready(function() {
	startQuiz();
	showQuestion(questionItems[0]);
	


	$('#radio_marvel').click(function() {
		questionItems[questionCount].answer = 'Marvel';
		checkAnswer();

	});

	$('#radio_dc').click(function() {
		questionItems[questionCount].answer = 'DC';
		checkAnswer();
	});

});


 




