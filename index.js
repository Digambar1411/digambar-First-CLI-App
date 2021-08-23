var readlineSync = require('readline-sync');
console.log("Hi This is Digambar");

var chalk=require('chalk');

var userName= readlineSync.question("Whats your name ? ")

console.log("Welcome "+userName+ " to 'How Well do you know DIGAMBAR !!' ");
console.log("Let's play the game ");
var score= 0;

// playgame Function
function playgame(question,answer){
  var userAnswer = readlineSync.question(question)
  if( userAnswer.toLowerCase() === answer.toLowerCase()){
    score = score+1;
    console.log("Its right ");
        
  }
  
  else {
    score=score;
    console.log("Its wrong ");
  
  }
  console.log("current score : "+ chalk.yellow(score));
  
  console.log(chalk.yellow("----------"));   
  
}
// playgame("my age is ? ","23");
// playgame("my love is ? ","family");


//  Array of Objects
var questions =[{
  
  que: "1. where do i live ? ",
  ans: "belgaum"
},

{
  que:"2. where do i work ? ",
  ans:"mindtree"
},

{
  que:"3.In which college i studied engineering ? ",
  ans:"mmec"
},

{
  que:"4. who is My favorite actress ? ",
  ans:"shradha"
},

{
  que:"5. which is my favorite city ? ",
  ans:"bangalore"
}

]


// function call
for (var i =0; i<questions.length; i++){
  playgame(questions[i].que, questions[i].ans);
} 


// Show Highscoress

function highscores(username,score){

// console.log(username+ " : " + score);
console.log(username+ " : " + chalk.yellow(score));
 

  }

var userHighscores=[{
  name:"Digambar",
  userscore:"5"
  },
  
  {
  name:"Mahesh",
  userscore:"4"
  }
]

// console.log("You scored "+score);
console.log("You scored "+chalk.yellow(score));
console.log("Check the highscores, if you have beaten the highscores, share me the sreenshot i will update"); 

for (var i=0;i<userHighscores.length; i++)
{
  highscores(userHighscores[i].name, userHighscores[i].userscore);
  
  if ( userHighscores[i].userscore < score== true){
    console.log("you have beaten the highscore of "+ userHighscores[i].name);
  }
  
}