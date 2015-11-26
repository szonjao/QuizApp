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


/*
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
*/

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

questionItems[2] = new QuestionItem(
	'Avengers',
	'css/img/avengers.jpg',
	'Marvel',
	'');

questionItems[3] = new QuestionItem(
	'Batman',
	'css/img/batman.jpg',
	'DC',
	'');

questionItems[4] = new QuestionItem(
	'Spiderman',
	'css/img/spiderman.jpg',
	'Marvel',
	'');

questionItems[5] = new QuestionItem(
	'Man of Steel',
	'css/img/manofsteel.jpg',
	'DC',
	'');

function QuestionItem(name, image, group, answer) {
	this.name   = name;
	this.image  = image;
	this.group  = group;
	this.answer = answer;
}
function startQuiz() {
	$("#qc").text("0/" + questionItems.length);
	$("#counterNumber").text("0/0");
	for (var i = 0; i<questionItems.length; i++) {
		$("#qf" + i).removeClass("questionFillerFilled");	
	}
	$("#DC").children().remove();
	$("#Marvel").children().remove();
	$("#restart").hide();
	$("#question").show();
	questionCount = 0;
	console.log(questionItems[questionCount]);
	showQuestion(questionItems[questionCount]);
}

function endQuiz() {
	$("#question").hide();
	$("#restart").show();
}

function showQuestion(currentQuestion) {

	$("#radio_dc").prop('checked', false);
	$("#radio_marvel").prop('checked', false);

	$("#questionName").html(currentQuestion.name);
	$("#questionImage").attr("src", currentQuestion.image);
}

function correctAnswer(item) {
	$("#"+item.group).append('<div class="answer"><img src="'+ item.image + '"><p class="answerName">' + item.name + '</p><div class="validated"><img class="validatedIcon yes"></div></div>');
}

function incorrectAnswer(item) {
	$("#"+item.group).append('<div class="answer"><img src="'+ item.image + '"><p class="answerName">' + item.name + '</p><div class="validated"><img class="validatedIcon no"></div></div>');
}

function updateStats() {
	var good = 0;
	for (var i = 0; i<questionCount; i++) {
		if (questionItems[i].group == questionItems[i].answer) {
			good++;
		}
	} 
	$("#counterNumber").text(good + "/" + questionCount);
}

function checkAnswer() {
	if (questionItems[questionCount].group == questionItems[questionCount].answer) {
		correctAnswer(questionItems[questionCount]);
	}
	else {
		incorrectAnswer(questionItems[questionCount]);
	}

	$("#qf" + questionCount).addClass("questionFillerFilled");
	$("#qc").text((questionCount+1) + "/" + questionItems.length);

	questionCount++;	

	if (questionCount < questionItems.length) {
		showQuestion(questionItems[questionCount]);
	}
	else {
		alert("DONE");
		endQuiz();
	}

	updateStats();

}

$(document).ready(function() {

	for (var i = 0; i<questionItems.length; i++) {
		$("#statusBar").append('<div id="qf' + i + '" class="questionFiller" tabindex="0"></div>');
	};
	startQuiz();


	$('#radio_marvel').click(function() {
		questionItems[questionCount].answer = 'Marvel';
		checkAnswer();

	});

	$('#radio_dc').click(function() {
		questionItems[questionCount].answer = 'DC';
		checkAnswer();
	});

	$('#restartbutton').click(function(){
		startQuiz();
	});
});


 




