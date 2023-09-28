# NamasterReact-Inception
 Namaste React - Inception Episode 1

# What is Emmet ?
  Emmet uses different abbreviations and short expressions depending on what's passed, and then dynamically converts the abbreviations into the full code

# Difference Between Library and FrameWork ?
# Framework : 
* A framework is a set of pre-written code that provides a structure for developing software applications.
* A framework is like the foundation upon which developers build applications for specific platforms.
* It includes reusable pieces of code written to perform common tasks and uses code provided by a developer for custom functionality. 
* The framework may include defined and undefined objects and functions that developers can use to create applications. 

# Library : 
* A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.
* The term library simply refers to a collection of code that is reused repeatedly
* It is essentially a set of pre-defined functions and classes that programmers can use to simplify their work and speed up the     development process. So, developers do not have to write code to accomplish specific functionality because the library already includes code for those functionalities.
    
# what is CDN ? Why do we use it ?
  * CDN stand for : content delivery network or content distribution network.
  * we use it for : A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications.
  * When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer.
  * The primary purpose of a content delivery network (CDN) is to reduce latency, or reduce the delay in communication created by a network's design. Because of the global and complex nature of the internet, communication traffic between websites (servers) and their users (clients) has to move over large physical distances. 
  * A CDN improves efficiency by introducing intermediary servers between the client and the website server. 
  * These CDN servers manage some of the client-server communications. 
  * They decrease web traffic to the web server, reduce bandwidth consumption, and improve the user experience of your applications.

# why react is known as React ?
* React is called "React" because of its core feature, which is its ability to "react" or respond dynamically to changes in data.
* React was originally created by Facebook in 2011 for use in their own web applications, and it was released as an open-source project in 2013.

# what is cross origin in script tag ?
* The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
* Web pages often make requests to load resources on other servers. Here is where CORS comes in.
* A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

# Difference between React and React DOM ?
* React is a JavaScript library for building User Interfaces.
* ReactDOM is the JavaScript library that allows React to interact with the DOM.

# what is difference between react.development.js and react.production.js files via cdn ?
* react.development.js - More developer friendly, readable, will take more size.
* react.production.js - Minified code that is not developer friendly as it focused on decreasing in file size, code efficiency.

#  What is async and defer?
* Async - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page,and   executed as soon as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.
Example :  <script src="demo_async.js" async></script>
* Defer - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.
Example : <script src="demo_defer.js" defer></script>