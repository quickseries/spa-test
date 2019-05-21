#HOW TO RUN

#Installing dependencies
1. inside root folder run npm install
2. inside client folder run npm install

#NPM RUN DEV
1. inside root folder, from terminal run "npm run dev"
2. it should start the server and the client

# Folder Structure
1. Server
         config-> mLab key
         models-> temperature log model using mongoose ( temp,date and log id)
         routes-> logRoute GET api/log/all returns all data

                           POST api/log/temperature creates a temperature log and saves in mlab

                           DELETE api/log/temperature/:id deletes a temperature log based on log id
         utils/log-> has functions for fetching, creating, deleting temperature log, these functions are used in GET POST DELETE routes
         server.js-> server.js file , where we import db key, logRouter,etc

2. Client
         components-> defines TemperatureLog
         container->  contains TemperatureLogContainer html template and add ,             delete, fetch handlers, stats, ngOnInit, uses                         TemperatureDataService
         service-> TemperatureDataService makes the API calls
         environments-> enviroment.ts We define the apiUrl
                                                    ('http://localhost:5000')

for reference on how npm run dev is defined, one can look in server's package.json "scripts"

# Instructions

Create an small single-page application, and share your code using a Git repo.

You must create a weather logging app that allows users to enter temperatures in order to calculate its median, average, highest and lowest points.

You should NOT spend more than 1-2 days on this test. We do not expect you to complete every single user stories in that amount of time.

We will evaluate you based on:
- How clean your code is;
- The structure of your application;
- Your choice of UI architecture;

# You must use
- MongoDB or Postgres database to store the weather data
- NodeJS to create your APIs
- AngularJS or Angular 2+ to create the UI

Don't forget to provide installation instructions with your project so we can run it for validation.

# User Stories:
- As a user, I want to add a temperature to my log
- The input must only take numbers
- You must display a validation error when invalid data is entered in the input
- As a user, I want to delete a temperature from my log
- As a user, I want to see the temperature median in my entire log
- As a user, I want to see the average temperature of my entire log
- As a user, I want to see the highest temperature in my log
- As a user, I want to see the lowest temperature in my log

# UI WireFrame

```
Temperature
------------------------------   -------------------
|                            |   | Add Temperature |
------------------------------   -------------------
* This field is required

--------------------------------------------------------------------------------

Average: 28.9 °c     Highest: 32.1 °c     Lowest: -3.6 °c     Median: 18.4 °c

--------------------------------------------------------------------------------

Temperature Log:

-------------------------------------------------------------
| Date           | Temperature              |               |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
| Jan 21, 2018   | -14.9 °c                 | Delete        |
-------------------------------------------------------------
```
