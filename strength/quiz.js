const questions = [
    {
        'que': "How often do you exercise per week?",
        'a': "Less than 1 day",
        'b': " 1-2 days",
        'c': "3-4 days",
        'd': " 5 or more days",
        correctAnswer: "c"
    },
    {
        que: "What is the intensity of your typical exercise session?",
        a: "Low (e.g., walking)",
        b: "Moderate (e.g., jogging, cycling)",
        c: "High (e.g., running, HIIT)",
        d: "Extreme(e.g., weightlifting, rock climbing)",
        correctAnswer: "a"
    },
    {
        que: "How would you describe your current energy levels?",
        a: "Low",
        b: "Moderate",
        c: "High",
        d: "Extreame",
        correctAnswer: "b"
    },
    {
        que: "Do you have any specific fitness goals?",
        a: " Overall health and wellness",
        b: " Muscle gain",
        c: "Weight loss  ",
        d: "Competition",
        correctAnswer: "d"
    },
    {
        que: "How would you rate your flexibility",
        a: "Poor",
        b: "Good",
        c: "Average",
        d: "EXcellent",
        correctAnswer: "a"
    },
    {
        que: "How much time can you dedicate to exercise on a typical day?",
        a: "No time",
        b: "Less than 30 minutes",
        c: "30-60 minutes",
        d: "More than 60 minutes",
        correctAnswer: "a"
    },
    {
        que: "How would you describe your stress levels?",
        a: "High",
        b: "Moderate",
        c: "Low",
        d: "None",
        correctAnswer: "c"
    },
    {
        que: "How would you rate your sleep quality and duration?",
        a: "Poor",
        b: "Fair",
        c: "Good",
        d: "Excellent",
        correctAnswer: "b"
    },
    
    
    {
        que: "What is your primary motivation for exercising?",
        a: "Weight Management",
        b: "Stress Relief",
        c: "Improved Health",
        d: "Building Strength And Muscle",
        correctAnswer: "b"
    },
    {
        que: "Are you currently experiencing any physical discomfort or pain during exercise or in daily life(If yes,where)?",
        a: "No",
        b: "Leg",
        c: "Hand",
        d: "Stomach",
        correctAnswer: "c"
    },
];
var container=document.querySelector("#container");
var container1=document.querySelector("#container1");
var optionContainers=document.querySelectorAll(".optioncontainer")
var heading=document.querySelector("#heading");
var option=document.querySelectorAll('label');
var btn=document.querySelector("#submit");
var btnf=document.querySelector("#finalsubmit");
var go=document.querySelector("#go");
var previous=document.querySelector("#previous");
var after=document.querySelector("#after");
var inputs=document.querySelectorAll("input");
var correctbar=document.querySelector("#correctbar");
var wrongbar=document.querySelector("#wrongbar");
var header=document.querySelector('#quiz_header');
var resultcontainer=document.querySelector('#result');
var resulttext=document.querySelector('#resulttext');
console.dir(resulttext);
var index=0;

const total=10;
wrong=0;
correct=0;
let answer2="";
displayQuestion();
function  displayQuestion(){
    const data=questions[index];
heading.innerText=data.que;
option[0].innerText=data.a;
option[1].innerText=data.b;
option[2].innerText=data.c;
option[3].innerText=data.d;


};

// setInterval(displayQuestion,1000);
function reset(){
       inputs.forEach(
        (input)=>{
            input.checked=false;
        }
       )
};
 function show(){
    btn.style.opacity=1;
 }
const resultquiz=[];
function submit(){
    const data=questions[index];
    const answer=data.correctAnswer;
inputs.forEach(
    (input)=>{
        if(input.checked){
        answer2=input.value;
      
        }
    }
   )
     resultquiz.push(answer2);

console.log(resultquiz);
};
btn.addEventListener('click',()=>{
    submit();
    index++;
displayQuestion();

reset();
btn.style.opacity=0.2;

if(index===9){
    btn.style.display="none";
    btnf.style.display="inline-block";
}

}

);
go.addEventListener('click',()=>{
container.style.display="inline-block";   
go.style.display="none";
header.style.display="none";
});
btnf.addEventListener("click", () => {
             
    submit();
    result(); 
    // bar();
    alert("you are submitting the quiz");
    btnf.style.display="none";
    container.style.display="none";         
    // container1.style.display="inline-block";  
    resultcontainer.style.display="inline-block"; 
    announce();
});

 let analysis=0;
function result(){
    for(let i=0;i<8;i++){
        analysis=analysis+parseInt(resultquiz[i]);
        if(analysis<20){
            resulttext.innerHTML="YOU ARE QUITE UNFIT YOU SHOULD PERFORM REGULARLY EXERCISE<BR>";
        }
        else if(analysis>=20 && analysis<=25){
            resulttext.innerHTML="YOU ARE FIT AND YOU CAN DO  BASIC EXERCISE TO INCREASE YOUR STAMINA<BR>";
        }
        else{
            resulttext.innerHTML="YOU ARE QUITE A PERSISTANT FITNESS FREAK,<BR> KEEP PUSHING YOUR SELF LIKE THIS ONLY";
        }
    };

console.log(resultquiz);

console.log(analysis);

};
