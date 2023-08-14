// Chrysalis Engine 1.0

let passages = {
    "identity": "Chrysalis is a conversational neural model and an assistant AI. Chrysalis is designed by Anurag Lama (ANXSION). Chrysalis was made to become a base template for the future pre-trained models.",
    "greeting": "Hello! How can I help you?",
    "apology": "I apologize for not being able to understand the question.",
    "document": "ANXSION is an organisation dedicated to the creation of innovative solutions that resonate with the betterment of society. It was founded in 2018. Anurag Lama is the founder of ANXSION. ANXSION has 2 distinctive organisations: Guardian Angel, founded in 2022, a full service law firm that stands as a beacon of legal support, and Dendritic Dynamics, founded in 2023, a pioneering AI Research and Development initiative that fervently drives scientific progress and prototyping. 'Chrysalis' is the the base template of neural model created by Dendritic Dynamics. Chrysalis was made August 13, 2023."
  }


async function downloadModel(){
  await model.save('download://chrysalis');
}

async function getAnswer() {
  const questionInput = document.getElementById('questionInput');
  const answerOutput = document.getElementById('answerOutput');

  const question = questionInput.value;
  questionInput.value = "";
  const passage = passages.document;

  try {
    answerOutput.innerHTML = 'Thinking...';

    // Preprocess the question using NLP techniques
    const preprocessedQuestion = preprocessText(question);

    // Load and fine-tune the QNA model
    const qnaModel = await qnaModelPromise;

    const answers = await qnaModel.findAnswers(preprocessedQuestion, passage);

    if (answers.length > 0) {
      displayAnswer(answers[0].text);
    } else {
      if (passages.apology) {
        displayAnswer(passages.apology);
      } else {
        displayAnswer('I\'m sorry, I don\'t have an answer for that.');
      }
    }
  } catch (error) {
    displayAnswer('An unknown error occurred. Can you try something else?');
    console.error('Error loading or using the Q&A model:', error);
  }
}

function displayAnswer(text) {
  const answerOutput = document.getElementById('answerOutput');
  answerOutput.innerHTML = text;
}

// NLP preprocessing function (tokenization and lowercasing)
function preprocessText(text) {
  return text.toLowerCase().split(/\s+/).filter(word => word.length > 0).join(' ');
}


