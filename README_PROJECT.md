# Workout-Tracker - a NoSQL project
This repository creates a workout tracker using a Mongo database with a Mongoose schema and routes using Express.
Partial code was provided but no design for the models.  It was necessary to reverse-engineer the fields, the server and the routes to make the project functional.
This is the link to the Heroku deployment:  
https://stormy-tundra-13684.herokuapp.com/

## *Table of Contents*
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#Credits) 
- [Contributing](#contributing)
- [Authors](#authors)
- [Screenshots](#screenshots)
- [Video](#video)
- [Tests](#tests)
- [Contact Me](#contact-me)

This system has the following landing page:
![alt text](/ReadmeImages/LandingPage.png) 

## *Installation*
To run this webpage, click on the Heroku link above.

To run this application, the user must clone all the files from this repository.  They also need to have 3 sessions running:
1 - type 'Mongod' on the command line
2 - type 'Mongo' on the second session, then 'Use Workout" to open the database
3. In the third session, type 'node server.js' on the cmd line.

 ## Usage

 The user is first presented with the landing page above.  If data has already been added, then the Workout status will also be shown on this page.

![alt text](/ReadmeImages/LandingPagewithData.png) 

Clicking on New Workout will display the following:

![alt text](/ReadmeImages/AddExercise.png) 

Completing all the fields and clicking on the 'Add Exercise' button. 

All data will be displayed on the Stats page - by clicking on 

'Dashboard' in the top left of the screen.

The Stats Page
![alt text](/ReadmeImages/Stats.png) 

 ## Credits
 1. BCS for their timely support.lp and 
 2. Livvy Owen for pointing me in the right direction.
 3. Ben Ashley for his help and explanations regarding express Router.

 







