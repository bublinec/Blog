# Restful Blog 

Simple dynamic web app using RESTful routing to satisfy all CRUD funcitonalities.


## Technology Stack:
MongoDB, Express, Node, Semantic UI

## Workflow:

1. SETUP
    * create package.json containing  metadata (especially dependencies)using npm init command
    * install necessary node packages using npm (node package manager)
        - express - node framework
        - mongoose - js interface for interacting with mongodb
        - ejs - embedded js - dynamic templates
        - body-parser - to get our data from a form
    * create app.js (the main file) 
    * include packgaes using require
    * configure app
    * configure mongo database using mongoose
    * setup server

2. MONGOOSE SCHEMA + MODEL CONFIG

3. RESTful ROUTES

    * index ("/blogs", GET)
        - redirect get "/" (home) to index
        - retrieve blogs from db
        - render index passing blogs
        - create inex template (+ partials)

    * new - form ("/blog/new", GET)
        - render new template
        - form names create a blog object 

    * create - action of the form ("/blog", POST)
        - get the data from the form (body-parser)
        - create blog (also includes into db)
        - callback function redirects to index


