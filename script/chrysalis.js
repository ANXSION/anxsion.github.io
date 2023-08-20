async function getAnswer(){
  const MODEL_URL = './script/neural/chrysalis/model.json';



  const model = await tf.loadLayersModel(MODEL_URL);
  const cat = document.getElementById('questionInput').value;
  model.predict(tf.tensor(cat));
}