const about = document.getElementById('about');
const footer = document.getElementById('footer');
const qstns = document.getElementById('qsnts');
const btndiv =document.getElementById('btn-div');


about.addEventListener('click', function() {
  footer.scrollIntoView({ behavior: 'smooth' });
});

const radioButtons = document.querySelectorAll('input[type="radio"]');
const timerbtn = document.getElementById('timer-btn');



function startTimer() {
  qstns.style.display="block";
  btndiv.style.display="block";
  
  timerbtn.disabled=true;
  const inputField = document.createElement('input');
inputField.id="timerInput";
inputField.type="text";
inputField.readOnly=true;
document.getElementById("timerInput-div").appendChild(inputField);

  let timeRemaining = 5; 
  inputField.value = formatTime(timeRemaining); 
  const interval = setInterval(function() {
    timeRemaining--; 
    inputField.value = formatTime(timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(interval);
      inputField.value = "00:00"; 
      button.disabled = true;
      radioButtons.forEach((radio) => {
        radio.disabled = true;
    });
      
    }
  }, 60000); 
}


function formatTime(minutes) {
  return `${minutes} min`;
}

timerbtn.addEventListener('click', startTimer);

const button = document.getElementById("update-percentage");
function calculateScore() {
  

  const answers = {
    q1: { correct: "ans", category: "mathematics" },
    q2: { correct: "ans", category: "it" },
    q3: { correct: "ans", category: "logical" },
    q4: { correct: "ans", category: "verb" },
    q5: { correct: "ans", category: "it" },
    q6: { correct: "ans", category: "logical" },
    q7: { correct: "ans", category: "verb" },
    q8: { correct: "ans", category: "mathematics" },
    q9: { correct: "ans", category: "it" },
    q10: { correct: "ans", category: "logical" },
    q11: { correct: "ans", category: "it" },
    q12: { correct: "ans", category: "verb" },
    q13: { correct: "ans", category: "it" },
    q14: { correct: "ans", category: "mathematics" },
    q15: { correct: "ans", category: "it" },
    q16: { correct: "ans", category: "verb" },
    q17: { correct: "ans", category: "mathematics" },
    q18: { correct: "ans", category: "mathematics" },
    q19: { correct: "ans", category: "logical" },
    q20: { correct: "ans", category: "verb" },
    q21: { correct: "ans", category: "logical" },
    q22: { correct: "ans", category: "it" },
    q23: { correct: "ans", category: "logical" },
    q24: { correct: "ans", category: "mathematics" },
    q25: { correct: "ans", category: "logical" },
    q26: { correct: "ans", category: "logical" },
  };

  const categoryScores = {
    mathematics: 0,
    it: 0,
    logical: 0,
    verb: 0,
  };

  for (const question in answers) {
    const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
    if (userAnswer && userAnswer.value === answers[question].correct) {
      categoryScores[answers[question].category]++;
    }
  }

  const mathsCount = Object.values(answers).filter(q => q.category === "mathematics").length;
  const itCount = Object.values(answers).filter(q => q.category === "it").length;
  const logicCount = Object.values(answers).filter(q => q.category === "logical").length;
  const verbCount = Object.values(answers).filter(q => q.category === "verb").length;


  let mathspercentage = (categoryScores.mathematics) / mathsCount * 100 ;
  let mathsstr =mathspercentage.toString().substring(0, 4);
  let maths= Number(mathsstr);

  let itpercentage = (categoryScores.it) / itCount * 100 ;
  let itstr =itpercentage.toString().substring(0, 4);
  let it= Number(itstr);

  let logicalpercentage = (categoryScores.logical) / logicCount * 100;
  let logicalstr =logicalpercentage.toString().substring(0, 4);
  let logical= Number(logicalstr);

  let verbpercentage = (categoryScores.verb) / verbCount * 100 ;
  let verbstr =verbpercentage.toString().substring(0, 4);
  let verb= Number(verbstr);


const btn = document.createElement("a");
// btn.href="index3.html";
btn.style.textDecoration="none";
btn.id="btn";
btn.innerText="Show Marks"
button.parentNode.replaceChild(btn, button);

    function result(strname,item){
    btn.style.display = 'none';
    const circle = document.createElement("div");
    circle.className="percentage-circle";
    document.getElementById("percentage-circle-container").appendChild(circle);

    const percentageText = document.createElement('p');
    percentageText.className="percentage-text";
    const Name=document.createElement("p");
    Name.className="names";
    Name.textContent=strname;
    
    circle.appendChild(percentageText)
            
    circle.style.setProperty("--percentage", item);
    percentageText.textContent =`${item}% `;
    percentageText.appendChild(Name);
}

btn.onclick=function() {
    const parameter=[
        ['Numerical Reasoning' ,maths],
        ['Information Technology' ,it],
        ['Logical Reasoning' ,logical],
        ['Verbal Ability' ,verb]
    ];
    for (let i = 0; i < 4; i++) {
        const [param1, param2] = parameter[i];  
        result(param1, param2); 
      }
    const para1=document.getElementById("main-div1");
    const para2=document.getElementById("main-div2");
    const para3=document.getElementById("main-div3");
    const para4=document.getElementById("main-div4");

    const greatest = Math.max(maths, it, logical, verb);
    
      if(greatest===maths && greatest !== 0 ){
        document.getElementById("result").innerHTML= `You are more talented in Numerical Reasoning`;
        para1.style.display="block";
      }
      else if(greatest===it && greatest !== 0){
        document.getElementById("result").innerHTML= `You are more talented in Information Technology`;
        para3.style.display="block";
      }
      else if(greatest===logical && greatest !== 0){
        document.getElementById("result").innerHTML= `You are more talented in Logical Reasoning`;
        para4.style.display="block";
      }
      else if(greatest===verb && greatest !== 0){
        document.getElementById("result").innerHTML= `You are more talented in Verbal Ability`;
        para2.style.display="block";
      }
      else{
      document.getElementById("result").innerHTML= "";
      }
  }  
}
