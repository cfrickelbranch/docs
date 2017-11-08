
/*
Author: Clay Jones
Function: guide/index.js
Description: Highjacks the guide page and renders all of the appropriate
            elements leveraging the 'user.js' class as a singleton, 'database.js'
            as storage for all questions and responses content, and 'question.js/result.js'
            as view elements.
*/
'use strict';

(function() {

  var rootDiv = highjackGuidePage()
  if (!rootDiv) {return;} //Check whether this is the guide page
  rootDiv.innerHTML = "";

  var title = document.createElement("h1");
  title.innerHTML = "Custom Guide";
  rootDiv.appendChild(title);

  displayQuestions();
  checkLocalStorage();

  /*
  Author: Clay Jones
  Function: displayQuestions()
  Description: Checks to see whether the question-container already exists
              within the dom. If exists, display the element, otherwise render
              the question container with all the questions.
  */
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

  /*
  Author: Clay Jones
  Function: displayResults()
  Description: Checks to see whether the results-container already exists
              within the dom. If exists, display the element, otherwise render
              the results container with all the appropriate results.
  */
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
    var resultElements = renderResults();
    for (var key in resultElements) {
      if (resultElements.hasOwnProperty(key)) {
          let sectionHeader = document.createElement("h2");
          sectionHeader.innerHTML = key;
          resultDiv.appendChild(sectionHeader);
          appendChildrenToParent(resultDiv, resultElements[key]);
      }
  }
    var button = renderBackButton();
    resultDiv.appendChild(button);
    window.scrollTo(0,0);
  }

  /*
  Author: Clay Jones
  Function: hideQuestionnaire()
  Description: Instead of deleted and re-rendering the question div,
              we just hide it.
  */
  function hideQuestionnaire(){
    var questionDiv = document.getElementById("question-container");
    if (questionDiv) {
      questionDiv.style.display = "none";
    }
  }

  /*
  Author: Clay Jones
  Function: hideQuestionnaire()
  Description: Instead of deleted and re-rendering the results div,
              we just hide it.
  */
  function hideResults(){
    var resultsDiv = document.getElementById("result-container");
    if (resultsDiv) {
      resultsDiv.style.display = "none";
    }
  }
  
  /*
  Author: Clay Jones
  Function: checkLocalStorage()
  Description: This method leverages the user class to check the browser
              for locally stored answers. This way, if a user is returning
              to this page after already using the questionnaire, they will
              see their answers immediately.
  */
  function checkLocalStorage() {
    if(user.checkLocalStorage()){
      console.log("Should hide results");
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

  /*
  Author: Clay Jones
  Function: setAnswers()
  Description: This loops through all of the select elements and updates
              the user classes answers to the currently selected answers 
              in the view.
  */
  function setAnswers() {
    var selects = document.getElementsByClassName('question-select');
    var answers = {};
    for (var i = 0; i < selects.length; i++) {
      var select = selects[i];
      answers[select.id] = select.value;
    }
    user.setAnswers(answers);
  }

  /*
  Author: Clay Jones
  Function: completeQuestionnaire()
  Description: Called when the completion button is selected.
  */
  function completeQuestionnaire() {
    setAnswers();
    hideQuestionnaire();
    displayResults();
    console.log("completed questionnaire");
    progress.track("completed questionnaire");
  }

  /*
  Author: Clay Jones
  Function: highjackGuidePage()
  Description: Check whether the page has the path of the guide page.
              If so, highjack the 'md-content__inner' div of the page 
              and inject it with the questionnaire and results
  */
  function highjackGuidePage(){
      var trim = window.location.pathname.replace(/^\/|\/$/g, '').split('/');
    trim = trim[0] === 'docs' ? trim.slice(1, trim.length).join('/') : trim.join('/');
    var path = (trim === '') ? 'index' : trim;
    if (path === "pages/guide") {
      return document.getElementsByClassName("md-content__inner")[0];
    }
    return null;
  }

  /*
  Author: Clay Jones
  Function: highjackGuidePage()
  Description: Check whether the page has the path of the guide page.
              If so, highjack the 'md-content__inner' div of the page 
              and inject it with the questionnaire and results.
  */
  function renderQuestions() {
    let questionElements = [];
    for (var i = 0; i < database.questions.length; i++) {
      let questionObj = database.questions[i];
      let questionElement = question.init(questionObj, questionSelected);
      questionElements.push(questionElement);
    }
    return questionElements;
  }

  /*
  Author: Clay Jones
  Function: questionSelected()
  Description: Called whenever a question is updated with a new answer.
  */
  function questionSelected(value, key) {
    //called when a new question is updated
    console.log("Updated "+key+" to "+value);
    progress.track("Updated "+key+" to "+value);
  }

  /*
  Author: Clay Jones
  Function: renderCompletionButton()
  Description: Create the questionnaire completion button.
  */
  function renderCompletionButton() {
    var completionButton = document.getElementById("guide-completion-button");
    if (!completionButton) {
      var completionButton = document.createElement("button");
      completionButton.id = "guide-completion-button"
      completionButton.className = "guide-button"
      completionButton.innerHTML = "Generate";
      completionButton.onclick = completeQuestionnaire;
    }
    completionButton.style.display = "block";
    return completionButton;
  }

  /*
  Author: Clay Jones
  Function: renderBackButton()
  Description: Create the questionnaire back button.
  */
  function renderBackButton() {
    var backButton = document.getElementById("guide-back-button");
    if (!backButton) {
      var backButton = document.createElement("button");
      backButton.id = "guide-back-button"
      backButton.className = "guide-button"
      backButton.innerHTML = "Edit Responses";
      backButton.onclick = function() {
        displayQuestions();
        hideResults();
      };
    }
    backButton.style.display = "block";
    return backButton;
  }

  /*
  Author: Clay Jones
  Function: renderResults()
  Description: 
  */
  function renderResults() {
    let resultElements = {};
    let results = user.getCurrentResults();
    for (var i = 0; i < results.length; i++) {
      let resultObj = results[i];
      if (!resultElements[resultObj.type]) {resultElements[resultObj.type] = [];}
      let resultElement = result.init(resultObj, resultElements[resultObj.type].length);
      resultElements[resultObj.type].push(resultElement);
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