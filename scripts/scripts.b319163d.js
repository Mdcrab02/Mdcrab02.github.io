"use strict";angular.module("cis411Hw5App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ngAnimate","ui.bootstrap"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/tutorials",{templateUrl:"views/tutorials.html",controller:"TutorialsCtrl",controllerAs:"tutorials"}).when("/blog",{templateUrl:"views/blog.html",controller:"BlogCtrl",controllerAs:"blog"}).when("/blog2",{templateUrl:"views/blog2.html",controller:"Blog2Ctrl",controllerAs:"blog2"}).otherwise({redirectTo:"/"})}]),angular.module("cis411Hw5App").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("cis411Hw5App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("cis411Hw5App").controller("TutorialsCtrl",["$scope",function(a){a.groups=[{url:"http://tutorials.jenkov.com/angularjs/index.html",title:"AngularJS Tutorial",image:"http://tutorials.jenkov.com/images/layout/small-portrait_mini.jpg",author:"Jakob Jenkov"},{url:"http://tutorialzine.com/2013/08/learn-angularjs-5-examples/",title:"Learn AngularJS With These 5 Practical Examples",image:"http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",author:"JMartin Angelov"},{url:"https://github.com/angular-app/angular-app",title:"AngularJS CRUD application demo",image:"http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",author:"angular-app"},{url:"https://www.airpair.com/angularjs/building-angularjs-app-tutorial",title:"AngularJS Tutorial - Building a Web App in 5 minutes",image:"https://0.gravatar.com/avatar/8ef3e73105c63fcac882115c9ad346f2?s=100",author:"Nick Kaye"},{url:"http://www.toptal.com/angular-js/a-step-by-step-guide-to-your-first-angularjs-app",title:"A Step-by-Step Guide to Your First AngularJS App",image:"http://www.toptal.com/uploads/user/photo/256/small_1233500_508166272610903_1884720025_n.jpg",author:"Raoni Boaventura"},{url:"http://ng-learn.org/tags/workshop.html",title:"Angularjs -- Workshop",image:"http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",author:"Santiago Esteva"},{url:"https://www.youtube.com/watch?v=tnXO-i7944M",title:"AngularJS in 20ish Minutes ",image:"http://blog.guinatal.com/wp-content/uploads/2015/01/angularjs.png",author:"Dan Wahlin"},{url:"http://www.microsoftvirtualacademy.com/training-courses/introduction-to-angularjs",title:"Introduction to AngularJS",image:"https://irodriguezm.files.wordpress.com/2009/12/logo_mva.png",author:"Microsoft Virtual Academy"}]}]),angular.module("cis411Hw5App").controller("BlogCtrl",function(){}),angular.module("cis411Hw5App").controller("BlogCtrl2",function(){}),angular.module("cis411Hw5App").run(["$templateCache",function(a){a.put("views/about.html",'<div> <h1>About Page</h1> <p>After a long struggle I finally figured out how to use NPM and the other tools to make a web app!</p><p> </p></div> <div class="row marketing"> <p>This assignment was created using Node with the following packages:</p><p> <ul> <li>Grunt</li> <li>Yeoman</li> <li>Bower</li> <li>Bootstrap</li> <li>Angular</li> <li>Angular-UI</li> <li>Bootstrap-UI</li> <ul> </ul></ul></p></div>'),a.put("views/blog.html",'<div> <h1>Blog Page</h1> <p>AngularJS is a Javascript library that allows you to do many cool things in web apps.</p><p> </p><p>For part one (and part two) of this tutorial, I used Yeoman to scaffold the app and then brought in all of the libraries I needed to create the rest of the content.</p> </div> <div class="row"> <div class="col-md-8">Big column</div> <div class="col-md-4">Small column</div> </div> <div class="well well-sm">A code snippet can go here.</div> <div> <h3>Step 1</h3> <p>The first step I took to making part one of the assignment is creating the app with Yeoman. I started by completing the tutorial found <a href="http://yeoman.io/codelab/meet-yeoman.html">here.</a></p> <p>Go through the entire tutorial and keep in mind how angular functions behind the scenes.</p> <p><span class="label label-danger">Note:</span>During the Yeoman tutorial it will have you run your unit tests on your code. You may encounter an error where the test does not find Karma in your app and will cause all tests to fail. To remedy this: stop your server, and enter the following into the command prompt:</p> <div class="well well-sm">npm install grunt-karma karma karma-phantomjs-launcher karma-jasmine jasmine-core phantomjs-prebuilt --save-dev</div> <p><span class="label label-warning">Warning:</span>Some Antivirus programs will identify PhantomJS.exe as generic malware. As of right now, I do not know that this is a false positive, but I\'m sure it probably is. If this happens to you, you will need to disable your antivirus, rerun the above code, and then run your tests. Otherwise, you will not be able to run your full suite of unit tests.</p> </div> <div> <h3>Step 2</h3> <p>The next step is to set up the project for your homework. Navigate to your workspace with command prompt and create a directory for your project.</p> <div class="well well-sm">mkdir project_dir_name && cd project_dir_name</div> <p>Once you\'re in your new directory, have Yeoman scaffold your angular app with the following code:</p> <div class="well well-sm">yo angular</div> <p>Once Yeoman finishes running, start up your app using Grunt just like you did in the tutorial with:</p> <div class="well well-sm">grunt serve</div> <p>This should be the same starting point from the Yeoman tutorial before you started to add the todo list.</p> </div> <div> <h3>Step 3</h3> <p>Next you can add a new section to your navigation bar. The new code for my navbar looks like this:</p><img src="images/ss1.945b657a.png" alt="I\'m Yeoman"> <p>Now that the text is in the navbar, you need to add a new section in app.js like the following:</p> <p><img src="images/ss2.23c48430.png" alt="I\'m Yeoman"></p> <p>This tells the javascript behind the navbar (Angular) what to do when you click one of the new links for your new pages.</p> <p>In my example, the tutorials and blog sections are new, so they each need an HTML section under views.</p> <p><img src="images/ss3.c4268ed1.png" alt="I\'m Yeoman"></p> <p>This should be the same starting point from the Yeoman tutorial before you started to add the todo list.</p> </div> <div> <h3>Step 4</h3> <p>Once you\'ve added some HTML sections with whatever you want in each part, you need to grab the JSON data Wes has on Github.</p><p> </p><p><span class="label label-danger">Note:</span>Wes\' raw JSON data contains double quotes for the key and value within the data, and not only is this not standard it makes Yeoman yell at you. Use your IDE to change all of the double quotes to single quotes.</p> <p>What I ended up doing is copying this into the angular controller I have associated with my Tutorials section. Here is a look at what I ended up doing:</p><img src="images/ss4.8f2c80e6.png" alt="I\'m Yeoman"> <p>Now let\'s take a look at what is going on here. I have the data all dropped into $groups. This establishes a place in Angular where all of this data can be grabbed all at once. In my example, I have an ng-repeat that goes over each JSON group in $groups to populate an Angular-ui accordion. The HTML for the accordion looks a little like this:</p> <p><img src="images/ss5.bfd844e6.png" alt="I\'m Yeoman"></p> <p>Here Angular is looping over each group in $groups and populating each section with the associated JSON data. For example, the Angular expression {{group.author}} will grab the data from $groups.author found in the JSON data in my controller. The dot notation should be familar to most people coming from .net development.</p> </div> <div> <h3>Conclusion</h3> <p>I hope this tutorial helps. I am not a web development pro or anything which means that my applications usually work correctly, but I am not so great at explaining things very well.</p> </div>'),a.put("views/blog2.html",'<div> <h1>Post for Homework 6</h1> <p>Here are the questions for the assignment:</p><p> <ul> <li><p>What is NodeJS?</p></li> <li><p>What makes node different than developing with more traditional server side languages?</p></li> <li><p>What is the concept of non blocking IO?</p></li> </ul> <div class="row"> <div class="col-md-8"><p>So let\'s talk about NodeJS. This assignment and Homework 5 are both using NodeJS and many other packages that were installed using Node Package Manager. But wtf is <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">NodeJS?</a></p> </div> <div class="col-md-4"> <img src="images/nodejs.1e8bc4fe.png" alt="NodeJS" style="width:50%;height:50%"> </div> </div> <div> <h3>What is NodeJS?</h3> <p>In a nutshell, NodeJS is an event-driven I/O server-side Javascript based on Google\'s javascript engine built into Chrome, V8. What this means is that NodeJS is a javascript framework that is designed to build scalable network apps. Because Node has event-driven architecture, and is capable of asynchronous I/O, it is idea for optimizing performance of web applications. It was created by Ryan Dahl, and was originally released in 2009. Since it\'s creation, it has quickly become one of the most popular server-side frameworks for the web. It also has a ton of different packaged that rest atop Node to expand its capability even further.</p><p> </p><p><a href="https://www.youtube.com/watch?v=-u-j7uqU7sI&list=PL6gx4Cwl9DGBMdkKFn3HasZnnAqVjzHn_">Here</a> is a set of some tutorial videos that will help you become more familar with NodeJS and setting up an environment to use it.</p> <p>Check out these other resources to learn more:</p> <div class="row"> <div class="col-md-4"> <a href="https://www.youtube.com/results?search_query=node.js">Youtube Vidjas</a> </div> <div class="col-md-4"> <a href="https://en.wikipedia.org/wiki/Node.js">Wikipedia Entry</a> </div> <div class="col-md-4"> <a href="https://nodejs.org/en/">NodeJS Site</a> </div> </div> </div> <div> <h3>What makes Node hot? What gives it that sass?</h3> <p>Aside from being pretty cool, Node also uses asynchronous architecture that works well with javascript. Most other server-side frameworks are synchronous. Remember us talking about Async tasks in CIS490? Okay, well maybe remembering that class brings back painful memories. But Node uses this to allow the server to react to events and sent events to something like a database. Being event-driven allows Node to scale well. This also means that input and output processing can continue asynchronously even before others have finished. This is like Node being able to manage many different tasks at the same time based on events and messages wherein individual tasks will not interfere with one another!</p><p> </p></div> </p></div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>Github.io Page for Mdcrab02!</h1> <p class="lead"> <img src="images/yeoman.c582c4d1.png" alt="I\'m Yeoman"><br> Made with Yeoman </p> </div> <div class="row marketing"> <p>In this assignment you will find a brief blog post where I do my best to describe how to get started with angular and a list of angular tutorials.</p><p> </p><p>The point of this is to familiarize myself with Yeoman, Grunt, and the other technologies we learned about in class, so it doesn\'t look very pretty :(</p><p> </p></div>'),a.put("views/tutorials.html",'<div> <h1>Angular Tutorials</h1> <p>Browse the Angular Tutorials below. Click on the Accordion section to expand it!</p> <script type="text/ng-template" id="group-template.html"><div class="panel {{panelClass || \'panel-default\'}}">\r\n        <div class="panel-heading">\r\n          <h4 class="panel-title" style="color:#fa39c3">\r\n          <a href tabindex="0" class="accordion-toggle" ng-click="toggleOpen()" uib-accordion-transclude="heading"><span\r\n            ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\r\n        </h4>\r\n        </div>\r\n        <div class="panel-collapse collapse" uib-collapse="!isOpen">\r\n          <div class="panel-body" style="text-align: right" ng-transclude></div>\r\n        </div>\r\n      </div></script> <uib-accordion close-others="oneAtATime"> <uib-accordion-group heading="{{group.title}}" ng-repeat="group in groups"> <ul style="list-style-type:none"> <li>Author: {{group.author}}</li> <li><img src="{{group.image}}"></li> <li><a href="{{group.url}}">{{group.url}}</a></li> </ul> </uib-accordion-group> </uib-accordion></div>')}]);