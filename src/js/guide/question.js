'use strict';
var question = (function() {
  var select;

  function init (question, callback) {
    var questionContainer = document.createElement('div');

    var questionTitle = document.createElement('p');
    questionTitle.innerHTML = question.question;
    questionTitle.className += "question-title";
    questionContainer.appendChild(questionTitle);

    select = document.createElement('select');
    select.id = question.key;
    select.className += "question-select";
    select.onchange = function() {
      user.setAnswerForKey(this.value, this.id);
      if(callback){
        callback(this.value, this.id);
      }
    }
    for (var i = 0; i < question.options.length; i++) {
      let optionObj = question.options[i];
      var option = document.createElement('option');
      option.value = optionObj.value;
      option.innerHTML = optionObj.label;
      select.appendChild(option);
    }

    questionContainer.appendChild(select);

    return questionContainer;
  };

  function didSelectAnswer() {
    user.setAnswerForKey(this.value, this.id);
  };

  return {
    init: init,
    didSelectAnswer: didSelectAnswer
  };
})();