async function getAnswer(){

  // Load the TensorFlow model.
  const model = await tf.loadLayersModel('./script/neural/chrysalis/model.json');

  // Get the input text from the user.
  const questionInput = document.getElementById('questionInput');
  const question = questionInput.value;

  // Tokenize the input text.
  const tokens = universalSentenceEncoder.encode(question);

  // Get the answer from the model.
  const answer = model.predict(tokens);

  // Set the output text.
  const answerOutput = document.getElementById('answeroutput');
  answerOutput.innerHTML = answer;
}
