# Blog app 

Simple dynamic web app aimed for RESTful routing practise.


## Technology Stack:
MongoDB, Express, Node, Semantic UI

## Workflow:

1. create package.json containing  metadata (especially dependecnies) using npm init command

2. install and require necessary node packages
     - express - node framework
     - mongoose - js interface for interacting with mongodb
     - ejs - embedded js - for dynamic templates
     - body-parser - to get our data from a form
   install using npm (node package manager)
   command: npm i express ejs mongoose body-parser --save 
   (also include in dependencies in package.json)

5. set up a mongo database using mongoose

3. setup server + necessary configurations

4. create routes + ejs templates