const startBtn = document.getElementById('startButton');

var myQuiz = [
  {
  ques: "Which of the following is not a way to declare a JavaScript Variable?",
  choices: ["var", "let", "const", "dis"],
  correctAnswer: "dis"
  }, 
  {
  ques: "If and Else statements are also referred to as:",
  choices: ["Control flow statements", "Function statements", "Variables", "Operators"],
  correctAnswer: "Control flow statements"
  }, 
  {
  ques: "Which of the following is the correct syntax to redirect a url using JavaScript?",
  choices: ["document.location='http://www.newlocation.com';", "browswer.location='http://www.newlocation.com';", "navigator.location='http://www.newlocation.com';", "window.location='http://www.newlocation.com';"],
  correctAnswer: "window.location='http://www.newlocation.com';"
  },
  {
  ques: "Commonly used data types DO NOT include:",
  choices: ["strings", "Atlanta", "booleans", "numbers"],
  correctAnswer: "alerts"
  },
  {
    ques: "Arrays in Javascript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
    }
]; //end of myQuiz array of objects

var questionIndex = -1; // Not started

function nextQuestion() {
  document.getElementById("quiz");
// document.body.innerHTML = '';
++questionIndex;
  document.write(myQuiz[questionIndex].ques + "<br />");

      for (var i=0; i < myQuiz[questionIndex].choices.length; i++) {
      document.write("<input type=radio id=myRadio name=radAnswer>" + myQuiz[questionIndex].choices[i] + "<br />");
      }
      
 if (questionIndex < (myQuiz.length - 1)) {
  var nextButton = document.createElement("input");
  nextButton.type = "button";
  nextButton.value = "Next question";
  nextButton.addEventListener('click', nextQuestion);
  document.body.appendChild(nextButton);
 }
}

function timer(){
  var sec = 60;
  var timer = setInterval(function(){
      document.getElementById('countDown').innerHTML='00:'+sec;
      sec--;
      if (sec < 0) {
          clearInterval(timer);
      }
  }, 1000);
}

startBtn.onclick = timer
startBtn.onclick = nextQuestion
// nextQuestion();