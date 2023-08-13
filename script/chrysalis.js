// Chrysalis Engine 1.0

let qnaModelPromise;
let verb;

let passages = {
    "identity": "Chrysalis is a conversational neural model and an assistant AI. Chrysalis is designed by Anurag Lama (ANXSION). Chrysalis was made to become a base template for the future pre-trained models.",
    "greeting": "Hello! How can I help you?",
    "apology": "I apologize for not being able to provide an answer at the moment.",
    "document": "ANXSION is an organisation dedicated to the creation of innovative solutions that resonate with the betterment of society. It was founded in 2018. Anurag Lama is the founder of ANXSION. ANXSION has 2 distinctive organisations: Guardian Angel, founded in 2022, a full service law firm that stands as a beacon of legal support, and Dendritic Dynamics, founded in 2023, a pioneering AI Research and Development initiative that fervently drives scientific progress and prototyping. 'Chrysalis' is the the base template of neural model created by Dendritic Dynamics. Chrysalis was made August 13, 2023."
  }

  async function getQnAModel() {
    if (!qnaModelPromise) {
      qnaModelPromise = qna.load();
    }
    return qnaModelPromise;
  }
  
  async function startGreeting() {
    const answerOutput = document.getElementById('answerOutput');
    answerOutput.innerHTML = passages.greeting;
  }
  
  async function getAnswer() {
    const questionInput = document.getElementById('questionInput');
    const answerOutput = document.getElementById('answerOutput');
    
    const question = questionInput.value;
    document.getElementById('questionInput').innerText="";
    const passage = passages.document;
    const selfid = passages.identity;
  
    try {
        answerOutput.innerHTML = 'Thinking...';
        const qnaModel = await getQnAModel(); 
        const answers = await qnaModel.findAnswers(question, passage);
        const identity = await qnaModel.findAnswers(question, selfid);


        if (question.toLowerCase().includes('designed you') || question.toLowerCase().includes('made you') || question.toLowerCase().includes('created you')){
            displayAnswer("I was designed by "+identity[0].text+".");
        }
        else if (question.toLowerCase().includes('when were you')){
            displayAnswer("I was designed on "+answers[0].text+".");
        }
        else if (question.toLowerCase().includes('what are you') || question.toLowerCase().includes('who are you')){
            displayAnswer("I am conversational neural model and an assistant AI.");
        }
        else if (question.toLowerCase().includes('why were you made')){
            displayAnswer("I was developed " + identity[0].text+".");
        }
        else if (question.toLowerCase().includes('why are you')){
            displayAnswer("Why?");
        }
        else if (answers.length > 0) {
            displayAnswer(answers[0].text);
        } 
        else {
            if (passages.apology) {
            displayAnswer(passages.apology);
            } else {
            displayAnswer('I\'m sorry, I don\'t have an answer for that.');
            }
        }
        } 
        catch (error) {
            displayAnswer('An unknow error occured. Can you try something else?');
            console.error('Error loading or using the Q&A model:', error);
        }
    }
  
  function displayAnswer(text) {
    const answerOutput = document.getElementById('answerOutput');
    answerOutput.innerHTML = text;
  }