'use strict';
let baseURL = "../../";
var database = {  
  questions:[
              {
                "question":"What framework is your app built in?",
                "key":"framework",
                "options":[
                  {
                    "value":"ios",
                    "label":"iOS",
                    "summary":"iOS"
                  },
                  {
                    "value":"android",
                    "label":"Android",
                    "summary":"Android"
                  },
                  {
                    "value":"cordova-phonegap-ionic",
                    "label":"Cordova/Phonegap/Ionic",
                    "summary":"Cordova/Phonegap/Ionic"
                  },
                  {
                    "value":"unity",
                    "label":"Unity",
                    "summary":"Unity"
                  },
                  {
                    "value":"xamarin",
                    "label":"Xamarin",
                    "summary":"Xamarin"
                  },
                  {
                    "value":"titanium",
                    "label":"Titanium",
                    "summary":"Titanium"
                  },
                  {
                    "value":"adobe-air",
                    "label":"Adobe Air",
                    "summary":"Adobe Air"
                  },
                  {
                    "value":"react-native",
                    "label":"React Native",
                    "summary":"React Native"
                  },
                  {
                    "value":"mparticle-ios",
                    "label":"mParticle iOS",
                    "summary":"mParticle iOS"
                  },
                  {
                    "value":"mparticle-android",
                    "label":"mParticle Android",
                    "summary":"mParticle Android"
                  }
                ]
              },
              {
                "question":"Do you have a website?",
                "key":"website_type",
                "options":[
                  {
                    "value":"functional_website",
                    "label":"Similar functionality to my app",
                    "summary":"Functional Website"
                  },
                  {
                    "value":"splash_page",
                    "label":"Simple splash page",
                    "summary":"Splash Page"
                  },
                  {
                    "value":"no_website",
                    "label":"No",
                    "summary":"No Website"
                  }
                ]
              },
              {
                "question":"Which category best describes your app?",
                "key":"app_category",
                "options":[
                  {
                    "value":"commerce",
                    "label":"Commerce",
                    "summary":"Commerce"
                  },
                  {
                    "value":"media",
                    "label":"Media",
                    "summary":"Media"
                  },
                  {
                    "value":"social_networking",
                    "label":"Social Networking",
                    "summary":"Social Networking"
                  },
                  {
                    "value":"gaming",
                    "label":"Gaming",
                    "summary":"Gaming"
                  },
                  {
                    "value":"utility",
                    "label":"Utility",
                    "summary":"Utility"
                  },
                  {
                    "value":"music_video_photo",
                    "label":"Music/Video/Photo",
                    "summary":"Music/Video/Photo"
                  },
                  {
                    "value":"food_drink",
                    "label":"Food/Drink",
                    "summary":"Food/Drink"
                  },
                  {
                    "value":"dating",
                    "label":"Dating",
                    "summary":"Dating"
                  },
                  {
                    "value":"messaging",
                    "label":"Messaging",
                    "summary":"Messaging"
                  }
                ]
              },
              {
                "question":"Do advertise on Facebook or Twitter?",
                "key":"social_ads",
                "options":[
                  {
                    "value":"true",
                    "label":"Yes",
                    "summary":"Social Ads"
                  },
                  {
                    "value":"false",
                    "label":"No",
                    "summary":"No Social Ads"
                  }
                ]
              },
              {
                "question":"Do you send marketing emails?",
                "key":"sends_emails",
                "options":[
                  {
                    "value":"true",
                    "label":"Yes",
                    "summary":"Marketing Emails"
                  },
                  {
                    "value":"false",
                    "label":"No",
                    "summary":"No Marketing Emails"
                  }
                ]
              }
            ],
  results: {
            "mobile_sdk":{
              "key":"mobile_sdk",
              "title":"Integrate the Mobile SDK",
              "sections":[
                {
                  "subtitle":null,
                  "text":"If you have not integrated the SDK in your mobile app, we highly recommend starting there.",
                  "buttons":[
                    {
                      "cta":"Integration Docs",
                      "value_dependent":"framework",
                      "url":baseURL+"pages/apps/{framework}"
                    }
                  ]
                }
              ]
            },
            "routing":{
              "key":"routing",
              "title":"Deep Link Routing",
              "sections":[
                {
                  "subtitle":null,
                  "text":"After you integrate the SDK and verify that your application can be opened from a Branch link, it is extremely important to decide what will happen once your application opens up from a Branch link.",
                  "buttons":[
                    {
                      "cta":"Routing Docs",
                      "value_dependent":"framework",
                      "url":baseURL+"pages/apps/{framework}/#navigate-to-content"
                    }
                  ]
                }
              ]
            },
            "web_sdk":{
              "key":"web_sdk",
              "title":"Integrate the Web SDK",
              "sections":[
                {
                  "subtitle":null,
                  "text":"After you integrate the SDK and verify that your application can be opened from a Branch link, it is extremely important to decide what will happen once your application opens up from a Branch link. You can decide on a link by link basis what the default linking behavior should be for a user without the app.",
                  "buttons":[
                    {
                      "cta":"Web Docs",
                      "value_dependent":null,
                      "url":baseURL+"pages/web/integrate/"
                    }
                  ]
                }
              ]
            },
            "content_sharing":{
              "key":"content_sharing",
              "title":"Content Sharing",
              "sections":[
                {
                  "subtitle":null,
                  "text":"Users come to your app for the content. Empower existing users to evangelize your content and give new users a contextual introduction to your app by making your content shareable.",
                  "buttons":[
                    {
                      "cta":"Sharing Docs",
                      "value_dependent":null,
                      "url":baseURL+"pages/viral/content-sharing/"
                    }
                  ]
                }
              ]
            },
            "event_tracking":{
              "key":"event_tracking",
              "title":"Event Tracking",
              "sections":[
                {
                  "subtitle":null,
                  "text":"Branch Custom Event Trackers allow you to tie engagement in the app back to specific channels and campaigns in your dashboard. We recommend firing Custom Event Trackers for any activity that reflects a clear engagement step for your users (i.e. profile creation, content sharing, sign in, add to cart, game play, etc.), as this will give you a clearer picture into the engagement of users.",
                  "buttons":[
                    {
                      "cta":"Event Docs",
                      "value_dependent":"framework",
                      "url":baseURL+"pages/apps/{framework}/#track-events"
                    }
                  ]
                }
              ]
            },
            "commerce_events":{
              "key":"commerce_events",
              "title":"Commerce Event Tracking",
              "sections":[
                {
                  "subtitle":null,
                  "text":"As close descendants of the standard Branch events, commerce events allow you to append relevant purchase information to your events. It will even segment this information in your dashboard so that you can easily track which features, campaigns, etc are producing the most revenue.",
                  "buttons":[
                    {
                      "cta":"Commerce Docs",
                      "value_dependent":"framework",
                      "url":baseURL+"pages/apps/{framework}/#commerce-properties"
                    }
                  ]
                }
              ]
            },
            "referrals":{
              "key":"referrals",
              "title":"Referrals",
              "sections":[
                {
                  "subtitle":null,
                  "text":"Referral programs help drive app virality by activating your existing user base. By incentivizing your users to refer their friends and rewarding new-user activities like sign-up, purchases, and engagement, your app can grow exponentially. If you have not yet set up user tracking, it’s necessary that you include these few lines of code whenever your user logs in or out.",
                  "buttons":[
                    {
                      "cta":"User Docs",
                      "value_dependent":"framework",
                      "url":baseURL+"pages/apps/{framework}/#track-users"
                    }
                  ]
                },
                {
                  "subtitle":null,
                  "text":"You will also need to implement event tracking in places where you would like to reward users. For example, if you want to give a reward to a new user when they sign up, you will want to fire an event called signup.",
                  "buttons":[
                    {
                      "cta":"Event Docs",
                      "value_dependent":"framework",
                      "url":"baseURL+ pages/apps/{framework}/#track-events"
                    }
                  ]
                },
                {
                  "subtitle":null,
                  "text":"Then, configure your Branch dashboard to automatically reward users according to custom, behavior-based reward rules. For example, if you want to incentivize new users to sign-up, simply set a reward rule that triggers after a signup event is fired. You can reward the referring user, the new user, or both, a specified number of credits, a discount, or whatever else makes sense in your app.",
                  "buttons":[
                    {
                      "cta":"Referral Docs",
                      "value_dependent":null,
                      "url":baseURL+"pages/viral/referrals/"
                    }
                  ]
                }
              ]
            },
            "tmta":{
              "key":"tmta",
              "title":"Text-Me-The-App",
              "sections":[
                {
                  "subtitle":null,
                  "text":"Let Branch host your landing page for you. Since you do not have a website, users that click on your links on desktop will actually be brought to a Text-me-the-app page hosted by Branch. We suggest customizing this page to fit your branding as closely as possible.",
                  "buttons":[
                    {
                      "cta":"TMTA Docs",
                      "value_dependent":null,
                      "url":baseURL+"pages/web/text-me-the-app/"
                    }
                  ]
                }
              ]
            },
            "tmta_snippet":{
              "key":"tmta_snippet",
              "title":"Text-Me-The-App Snippet",
              "sections":[
                {
                  "subtitle":null,
                  "text":"If a user lands on your website on desktop and your goal is to send them to your mobile application, it would be useful to insert a Text-me-the-app snippet. This snippet will take a phone number and send a Twilio text message packed with a Branch deep link seamlessly directing desktop users to the mobile app.",
                  "buttons":[
                    {
                      "cta":"TMTA Docs",
                      "value_dependent":null,
                      "url":"https://branchmetrics.github.io/docs/pages/web/text-me-the-app/#insert-sendsms-snippet-into-your-page"
                    }
                  ]
                }
              ]
            },
            "journeys":{
              "key":"journeys",
              "title":"Journeys",
              "sections":[
                {
                  "subtitle":null,
                  "text":"Your mobile website is a critical acquisition channel for your app and Branch’s Journeys App Banners platform makes this easy. They are customizable, AMP-Compatible, user specific, deep linkable, trackable, and A/B testable..",
                  "buttons":[
                    {
                      "cta":"Journeys Docs",
                      "value_dependent":null,
                      "url":baseURL+"pages/web/journeys/"
                    }
                  ]
                }
              ]
            },
            "email":{
              "key":"email",
              "title":"Deep Linked Email",
              "sections":[
                {
                  "subtitle":null,
                  "text":"Branch’s Deep Linked Email integrates with your ESP to link mobile users users directly from an email to relevant content in your app, while maintaining a traditional experience for web-only content, desktop users, and mobile users without the app. Branch tracks revenue and engagement generated from email across web and app and smartly ties it back to a specific campaign.",
                  "buttons":[
                    {
                      "cta":"Email Docs",
                      "value_dependent":null,
                      "url":baseURL+"pages/emails/get-started/"
                    }
                  ]
                }
              ]
            },
            "social":{
              "key":"social",
              "title":"Twitter/Facebook",
              "sections":[
                {
                  "subtitle":null,
                  "text":"Include Branch links in your paid social media campaigns to dynamically engage users with relevant content instead of taking them to the mobile web or just dropping them on your app’s home screen.",
                  "buttons":[
                    {
                      "cta":"Facebook Docs",
                      "value_dependent":null,
                      "url":baseURL+"pages/deep-linked-ads/facebook-ads-overview/"
                    },
                    {
                      "cta":"Twitter Docs",
                      "value_dependent":null,
                      "url":baseURL+"pages/deep-linked-ads/twitter/"
                    }
                  ]
                }
              ]
            }
          }
};