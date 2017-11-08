'use strict';
var result = (function() {

  function init (result, index) {
    var resultDiv = document.createElement('div');
    resultDiv.id = result.key;
    var title = document.createElement('h3');
    var num = index + 1;
    title.innerHTML = result.title;
    resultDiv.appendChild(title);

    for (var i = 0; i < result.sections.length; i++) {
      var section = result.sections[i];
      var sectionDiv = renderSection(section);
      resultDiv.appendChild(sectionDiv);
    }

    return resultDiv;
  };

  function renderSection(section){
    var container = document.createElement('div');
    if (section.subtitle) {
      var subtitle = document.createElement('h4');
      subtitle.innerHTML = section.subtitle;
      container.appendChild(subtitle);
    }
    var text = document.createElement('p');
    text.innerHTML = section.text;
    container.appendChild(text);

    for (var i = 0; i < section.buttons.length; i++) {
      var button = section.buttons[i];
      var buttonDiv = document.createElement('a');
      buttonDiv.target = "_blank";
      buttonDiv.className += "docs-button"
      buttonDiv.innerHTML = button.cta;
      let newURL = button.url;
      if (button.value_dependent != null) {
        let framework = user.getAnswerForKey("framework");
        newURL = newURL.replace("{framework}", framework)
      }
      buttonDiv.href = newURL;
      container.appendChild(buttonDiv);
    }

    return container;
  }

  return {
    init: init
  };
})();