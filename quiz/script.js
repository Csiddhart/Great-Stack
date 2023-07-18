const question = [

    {
        questions: "Which five colours make up the Olympic rings?",
        answer: [
            {text:"Black, green, blue, yellow and red",correct:true},
            {text:"Black, green, brown, yellow and red",correct:false},
            {text:"Black, orange, blue, yellow and red",correct:false},
            {text:"Black, green, blue, yellow and pink",correct:false}
        ]
    },
    {
        questions:"What is the name of the school in Sex Education?",
        answer:[
            {text:"Moordale High",correct:false},
            {text:"Moordale High",correct:false},
            {text:"Moordale High",correct:false},
            {text:"Moordale High",correct:true}
        ]
    },
    {
        questions:"What year was the very first model of the iPhone released?",
        answer:[
            {text:"2005",correct:false},
            {text:"2006",correct:false},
            {text:"2007",correct:true},
            {text:"2008",correct:false}
        ]
    },
    {
        questions:"What does BMW stand for (in English)?",
        answer:[
            {text:"Bolovian Motor Works",correct:false},
            {text:"Bavarian Motor Works",correct:true},
            {text:"Bavarian Motor Work",correct:false},
            {text:"Bavarian Machine Works",correct:false}
        ]
    }
];

const qusele=document.getElementById("ques");
const ansbutt=document.getElementById("ans");
const ntbutt=document.getElementById("nt-btn");

let currentquesIndex=0;
let score =0;

function startquiz(){
    currentquesIndex=0;
    score = 0;
    ntbutt.innerHTML ="NEXT";
    showquestion();

}

function showquestion(){

    resetstate();

    let currentques=question[currentquesIndex];
    let questno= currentquesIndex+1;
    qusele.innerHTML =questno + ". " + currentques.
    questions;

    currentques.answer.forEach(answer=>{
        const butto=document.createElement("button");
        butto.innerHTML = answer.text;
        butto.classList.add("btn");
        ansbutt.appendChild(butto); 
        if(answer.correct){
            butto.dataset.correct = answer.correct;
        }
        butto.addEventListener("click",selectans);

    });

}

function resetstate(){
    ntbutt.style.display = "none";
    while(ansbutt.firstChild){
        ansbutt.removeChild(ansbutt.firstChild);
    }
}

function selectans(e){
    const selbt=e.target;
    const iscorr = selbt.dataset.correct === "true";
    if(iscorr){
        selbt.classList.add("correct");
        score++;
    }else{
        selbt.classList.add("incorrect");
    }
    Array.from(ansbutt.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    ntbutt.style.display="block";
}

function showscore(){
    resetstate();
    qusele.innerHTML = `Your score is ${score}.`;
    ntbutt.innerHTML = "Play-Again";
    ntbutt.style.display = "block";
}

function handlenb(){
    currentquesIndex++;
    if(currentquesIndex<question.length){
        showquestion();
    }else{
        showscore();
    }
}

ntbutt.addEventListener("click",()=>{
    if(currentquesIndex<question.length){
        handlenb();
    }else{
        startquiz();
    }
});

startquiz();