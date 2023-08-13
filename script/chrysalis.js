// Chrysalis Engine 1.0

let qnaModelPromise;

let passages = {
    "identity": "I am Chrysalis! A conversational neural model and an assistant AI.",
    "greeting": "Hello! I'm here to answer your questions.",
    "apology": "I apologize for not being able to provide an answer at the moment.",
    "document": "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware. It is considered one of the Big Four technology companies, alongside Amazon, Apple, and Facebook. Google was founded in September 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University in California. Together they own about 14 percent of its shares and control 56 percent of the stockholder voting power through supervoting stock. They incorporated Google as a California privately held company on September 4, 1998, in California. Google was then reincorporated in Delaware on October 22, 2002. An initial public offering (IPO) took place on August 19, 2004, and Google moved to its headquarters in Mountain View, California, nicknamed the Googleplex. In August 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet Inc. Google is Alphabet's leading subsidiary and will continue to be the umbrella company for Alphabet's Internet interests. Sundar Pichai was appointed CEO of Google, replacing Larry Page who became the CEO of Alphabet."
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
    answerOutput.innerHTML = 'Thinking...';
    
    const question = questionInput.value;
    const passage = passages.document;
  
    try {
      const qnaModel = await getQnAModel();      
      const answers = await qnaModel.findAnswers(question, passage.document);

      if (question.toLowerCase().includes("who are you") || question.toLowerCase().includes("what are you")) {
        displayAnswer(passages.identity);
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
    } catch (error) {
      console.error('Error loading or using the Q&A model:', error);
    }
  }
  
  function displayAnswer(text) {
    const answerOutput = document.getElementById('answerOutput');
    answerOutput.innerHTML = text;
  }