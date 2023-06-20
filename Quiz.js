//
const questions=[
    {
        question:"HTML is stand for _",
        answers:[
            { text:"Hyper Text Markup Language",correct:true},
            { text:"Holistick Technical Method Library",correct:false},
            { text:"Hyper Tax Makes Line",correct:false},
            { text:"None of the above",correct:false},
        ]

    },
    {
        question:"HTML is a subset of ______",
        answers:[
            {text:"SGMD",correct:false},
            {text:"SGML",correct:true},
            {text:"SGMH",correct:false},
            {text:"None of the above",correct:false},
        ]  
    },
    {
        question:"ALL HTML tags are enclosed in what?",
        answers:[
            {text:"# and #",correct:false},
            {text:"? and !",correct:false},
            {text:"< and >",correct:true},
            {text:"{ and }",correct:false},
        ]
    },
    {
        question:"To create HTML page, you need _____",
        answers:[
            {text:"Web browser",correct:false},
            {text:"text editor",correct:false},
            {text:"Both [A] and [B]",correct:true},
            {text:"None of the above",correct:false},
        ]
    },
    {
        question:"The BODY tag is usually used after ______",
        answers:[
            {text:"HTML tagr",correct:false},
            {text:"EM tag",correct:false},
            {text:"TITLE tag",correct:false},
            {text:" HEAD tag",correct:true},
        ]
    },
    {
        question:"Which tag tells the browser where the page starts and stops?",
        answers:[
            {text:"html",correct:true},
            {text:"body",correct:false},
            {text:"head",correct:false},
            {text:"title",correct:false},
        ]
    },
    {
        question:"Which program do you need to write HTML?",
        answers:[
            {text:"A graphics program",correct:false},
            {text:"Any text editor",correct:true},
            {text:"HTML -development suite 4",correct:false},
            {text:"All of the above",correct:false},
        ]
    },
    {
        question:"In HTML, tags that include both on and off tag are called",
        answers:[
            {text:"comment tag",correct:false},
            {text:"document tag",correct:false},
            {text:"container tag",correct:true},
            {text:"container tag",correct:false},
        ]
    },
    {
        question:"The tag used for creating hypertext and hypermedia links is",
        answers:[
            {text:"HR",correct:false},
            {text:"BR",correct:false},
            {text:"A",correct:true},
            {text:"PRE",correct:false},
        ]
    },
    {
        question:"All normal webpages consists of ______",
        answers:[
            {text:"Top and bottom",correct:false},
            {text:"Body and frameset",correct:false},
            {text:"Head and body",correct:true},
            {text:" None of the above",correct:false},
        ]
    },
];

const questionelement=document.getElementById("question");
const answerbuttons=document.getElementById("Answer-button");
const nextbutton=document.getElementById("next-btn");

let currentquestionindex=0;
let score=0;

function startquiz() {
    currentquestionindex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showquestion();
}
function showquestion(){
    resetstate();
    let currentquestion= questions[currentquestionindex];
    let questionno= currentquestionindex + 1;
    questionelement.innerHTML=questionno + "."+ currentquestion.question;

    currentquestion.answers.forEach(answer=>{
        const   button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectanswer);


    });
}

function resetstate() {
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}

function selectanswer(e) {
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct === "true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled="true";

    });
    nextbutton.style.display="block";

}
function showscore(){
    resetstate();
    questionelement.innerHTML=`your scored is ${score} out of ${questions.length}!`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display="block";
}
function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex<questions.length){
        showquestion();
    }else{
        showscore();
    }
}
nextbutton.addEventListener("click",()=>{
    if(currentquestionindex<questions.length){
        handlenextbutton();  
    }else{
        startquiz();
    }
});

startquiz();
