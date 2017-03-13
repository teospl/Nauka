var questions = [];
var questionNumber = [];
var response = [];

function drawQuestion(){
    var questionNr = Math.floor((Math.random() * 2) + 1);     
    $('#pole-gry').removeClass('hidden');
    $('button').removeClass('good');
    $('button').removeClass('wrong');
    $('#help').text("Podpowiedź.");
    printQuestion(questionNr); 
}

function printQuestion(nr){
    questionNumber = questions[nr-1];
    response = questionNumber.popr;
    console.log(nr + ' losowanie pytania | ' + questionNumber);    
    $('#pytanie').html('<p>' + questionNumber.pytanie + '</p>');  
    $('#help').on('click', helpAction);
        for(var i = 1; i < 5; ++i){
            $('#'+i).html(questionNumber.odp[i-1]); 
        }
    $('.answer-button').on('click', answersComputing);
}

function answersComputing(event){
    //console.log(event.target.innerHTML);
    if(event.target.innerHTML == response){
        $(event.target).addClass('good');
    } else {
        $(event.target).addClass('wrong');
    }
}

function helpAction(){
    $('#help').text(questionNumber.tip);
}

function onDataReceived(data){
    questions = data.questions;
    //console.log(questions);
}

$.get('questions.json', onDataReceived);
$('#losuj').on('click', drawQuestion);