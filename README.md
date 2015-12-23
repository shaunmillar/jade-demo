# jade-demo
A simple demonstration of Jade templating. To start: 

1. Clone repo
2. npm install
3. npm start
4. Open http://localhost:8080/page1 or http://localhost:8080/page2

This project demonstrates using jade to provide the template engine to a simple express application. Points to note are:
  - jade files are all in the 'views' folder. 
  - layout.jade is the main file controlling the layout of the project as a whole
  - page1 and page 2.jade are the individual pages of the application with the independnant content. 
  - when page1 or page 2 is called for, layout.jade directs the overall content including header footer and css. 
  - Inline javascripting has been included in both pages as well as layout.jade. 
