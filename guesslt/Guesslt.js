class AnswerManager{
#answer
constructor(){
this.#answer = Math.floor(Math.random()*100)+1;
}
randomanswer(){
this.#answer = Math.floor(Math.random()*100)+1;
return this.#answer;
}
returnanswer(){
return this.#answer;
}
};

class Game{

#submitn
submitbt = document.getElementById("submit");
constructor(gameJudge){
this.gameJudge = gameJudge;
this.submitbt.addEventListener("click", ()=>{
this.#submitn = Number(document.getElementById("answer").value);
this.gameJudge.judge(this.#submitn);
this.count();
document.getElementById("answer").value = "";
});
}
count(){
document.getElementById("counter").textContent = this.gameJudge.returncount();
}
}

class GameJudge{
constructor(answerManager){
this.answerManager = answerManager;
}
#counter = 0;
count(){
this.#counter +=1;
}
returncount(){
return this.#counter;
}
judge(n){
if (this.answerManager.returnanswer() == n){
this.answerManager.randomanswer();
alert("정답!");
this.#counter = 0;
}
else{
alert("오답!");
this.count();
}
}
}

const answerManager = new AnswerManager();
const judge = new GameJudge(answerManager);
const game = new Game(judge);
