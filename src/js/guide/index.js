// buttons
'use strict';

(function() {

  var rootDiv = highjackGuidePage()
  if (!rootDiv) {return;} //Check whether this is the guide page
  rootDiv.innerHTML = "";

  displayQuestions();
  setAnswers();
  displayResults();

  function displayQuestions() {
    var questionDiv = document.getElementById("question-container");
    if (questionDiv) {
      questionDiv.style.display = "block";
    } else {
      var questionDiv = document.createElement("div");
      questionDiv.className += "guide-container"
      questionDiv.id = "question-container";
      rootDiv.appendChild(questionDiv);
      var questionElements = renderQuestions();
      appendChildrenToParent(questionDiv, questionElements);
      questionDiv.appendChild(renderCompletionButton())
    }
  }

  function displayResults() {
    var resultDiv = document.getElementById("result-container");
    if (!resultDiv) {
      resultDiv = document.createElement("div");
      resultDiv.className += "guide-container"
      resultDiv.id = "result-container";
      rootDiv.appendChild(resultDiv);
    } else {
      while(resultDiv.hasChildNodes()){
        resultDiv.removeChild(resultDiv.lastChild);
      }
    }
    var resultElements = renderResults();
    appendChildrenToParent(resultDiv, resultElements);
    console.log('results refreshed');
  }

  function renderCompletionButton() {
    var completionButton = document.createElement("button");
    completionButton.innerHTML = "complete";
    completionButton.onclick = completeQuestionnaire;
    return completionButton;
  }

  function setAnswers() {
    var selects = document.getElementsByClassName('question-select');
    var answers = {};
    for (var i = 0; i < selects.length; i++) {
      var select = selects[i];
      answers[select.id] = select.value;
    }
    user.setAnswers(answers);
  }

  function completeQuestionnaire() {

    displayResults();
  }

  function highjackGuidePage(){
      var trim = window.location.pathname.replace(/^\/|\/$/g, '').split('/');
    trim = trim[0] === 'docs' ? trim.slice(1, trim.length).join('/') : trim.join('/');
    var path = (trim === '') ? 'index' : trim;
    console.log(path);
    if (path === "pages/guide") {
      return document.getElementsByClassName("md-content__inner")[0];
    }
    return null;
  }

  function renderQuestions() {
    let questionElements = [];
    for (var i = 0; i < database.questions.length; i++) {
      let questionObj = database.questions[i];
      let questionElement = question.init(questionObj, questionSelected);
      questionElements.push(questionElement);
    }
    return questionElements;
  }

  function questionSelected(value, key) {
    //whenever a new question is selected
    completeQuestionnaire();
    displayResults();
  }

  function renderResults() {
    let resultElements = [];
    let results = user.getCurrentResults();
    for (var i = 0; i < results.length; i++) {
      let resultObj = results[i];
      let resultElement = result.init(resultObj);
      resultElements.push(resultElement);
    }
    return resultElements;
  }

  function appendChildrenToParent(parent, children){
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      parent.appendChild(child);
    }
  }

})();