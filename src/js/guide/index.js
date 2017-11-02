// buttons
'use strict';

(function() {

  var rootDiv = highjackGuidePage()
  if (!rootDiv) {return;} //Check whether this is the guide page
  rootDiv.innerHTML = "";

  var title = document.createElement("h1");
  title.innerHTML = "Your Custom Guide";
  rootDiv.appendChild(title);

  displayQuestions();
  checkLocalStorage();
  setAnswers();

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
    resultDiv.style.display = "block";
    var button = renderBackButton();
    resultDiv.appendChild(button);
    var resultElements = renderResults();
    appendChildrenToParent(resultDiv, resultElements);
  }

  function hideQuestionnaire(){
    var questionDiv = document.getElementById("question-container");
    if (questionDiv) {
      questionDiv.style.display = "none";
    }
  }

  function hideResults(){
    var resultsDiv = document.getElementById("result-container");
    if (resultsDiv) {
      resultsDiv.style.display = "none";
    }

    var backButton = document.getElementById("guide-back-button");
    if (backButton) {
      backButton.style.display = "none";
    }
  }

  function checkLocalStorage() {
    if(user.checkLocalStorage()){
      var selects = document.getElementsByClassName('question-select');
      var answers = user.getAnswers();
      for (var i = 0; i < selects.length; i++) {
        var select = selects[i];
        if (answers[select.id]) {
          select.value = answers[select.id];
        }
      }
      displayResults();
      hideQuestionnaire();
    }
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
    hideQuestionnaire();
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

  }

  function renderCompletionButton() {
    var completionButton = document.getElementById("guide-completion-button");
    if (!completionButton) {
      var completionButton = document.createElement("button");
      completionButton.id = "guide-completion-button"
      completionButton.className = "btn btn-primary"
      completionButton.innerHTML = "complete";
      completionButton.onclick = completeQuestionnaire;
    }
    completionButton.style.display = "block";
    return completionButton;
  }

  function renderBackButton() {
    var backButton = document.getElementById("guide-back-button");
    if (!backButton) {
      var backButton = document.createElement("button");
      backButton.id = "guide-back-button"
      backButton.className = "btn btn-primary"
      backButton.innerHTML = "Edit Responses";
      backButton.onclick = function() {
        displayQuestions();
        hideResults();
      };
    }
    backButton.style.display = "block";
    return backButton;
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