'use strict';
var user = {  
    answers: {},
    getAnswers: function() {
      return this.answers;
    },
    setAnswers: function(answers){
      this.answers = answers;
    },
    getAnswerForKey(key){
      return this.answers[key];
    },
    setAnswerForKey: function(value, key){
      this.answers[key] = value;
    },
    getCurrentResults: function() {
      var customResults = [];

      customResults.push(database.results.mobile_sdk)
      customResults.push(database.results.routing)

      if (this.answers.website_type === "functional_website") {customResults.push(database.results.web_sdk)}

    //add category specific data
      if (this.answers.app_category === "commerce") {
        customResults.push(database.results.event_tracking)
        customResults.push(database.results.commerce_events)
      } else if (this.answers.app_category === "media") {
        customResults.push(database.results.content_sharing)
        customResults.push(database.results.event_tracking)
      } else if (this.answers.app_category === "social_networking") {
        customResults.push(database.results.content_sharing)
        customResults.push(database.results.event_tracking)
      } else if (this.answers.app_category === "gaming") {
        customResults.push(database.results.event_tracking)
        customResults.push(database.results.referrals)
      } else if (this.answers.app_category === "utility") {
        
      } else if (this.answers.app_category === "music_video_photo") {
        customResults.push(database.results.content_sharing)
        customResults.push(database.results.event_tracking)
      } else if (this.answers.app_category === "food_drink") {
        customResults.push(database.results.content_sharing)
        customResults.push(database.results.event_tracking)
      } else if (this.answers.app_category === "dating") {
        customResults.push(database.results.referrals)
        customResults.push(database.results.event_tracking)
      } else if (this.answers.app_category === "messaging") {
        customResults.push(database.results.referrals)
      }

      //Website
      if (this.answers.website_type === "functional_website") {
        customResults.push(database.results.journeys);
      } else if (this.answers.website_type === "splash_page") {
      customResults.push(database.results.tmta_snippet);
      } else {
        customResults.push(database.results.tmta);
      }

      //Social
      if (this.answers.social_ads === "true") {
        customResults.push(database.results.social);
      }

      if (this.answers.sends_emails === "true") {
        customResults.push(database.results.email);
      }

      return customResults;
    }
};