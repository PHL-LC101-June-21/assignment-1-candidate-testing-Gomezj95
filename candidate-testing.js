const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ['Who was the first American woman in space?', 'True or false: 5 kilometer==5000 meters', '(5+3)/2*10=?','Given the array[8,\'Orbit\',\'Trajectory\',45], what entry is at index 2?', 'What is the minimum crew size for the ISS?'];
let correctAnswers = ["Sally Ride","true", "40", "Trajectory", "3"];
let candidateAnswers=[];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name: ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for(i=0;i<questions.length;i++){
  candidateAnswers[i] = input.question(console.log(questions[i]))
}

}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  console.log(`Candidate Name:${candidateName}`)
 for(i=0;i<correctAnswers.length;i++){
   let numquestion = ['1)','2)','3)','4)','5)']
    console.log(`${numquestion[i]}${questions[i]}
    Your Answer: ${candidateAnswers[i]}
    Correct Answer: ${correctAnswers[i]}`)
}
console.log(`>>> Overall Grade: ${percent()}% (${compare()} of ${questions.length} reponses correct) <<<
>>> Status: ${passOrFail()} <<<`)
}

// compares candidateAnswers against correctAnswers// 
function compare(){
  let num = 0
  for(i=0;i<correctAnswers.length;i++){
    if((correctAnswers[i]).toLowerCase().trim() === (candidateAnswers[i]).toLowerCase().trim() ){
      num = num + 1
    }
  }
  return num
}

//calcuate the percentage of the test score// 
function percent(){
  return (compare()/questions.length)*100
}

//Prints Pass or Fail depending on the percentage // 
function passOrFail(){
  if(percent() >= 80){
    return 'PASSED'
  } else {
    return 'FAILED'
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Welcome "+ candidateName)

  askQuestion();
  gradeQuiz(this.candidateAnswers);

}



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};