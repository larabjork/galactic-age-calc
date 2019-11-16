#Super Galactic Age Calculator
##Created by Lara Bjork on November 15, 2019
###Project Description

This project was completed as an independent project for the Intermediate JavaScript class at Epicodus, at the conclusion of a week focused on test-driven development. The task description was as follows:

_A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user’s age based on a planet’s solar years._

_You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Make sure to commit a TDD spec before writing the corresponding method; in this way, you'll be following a Red, Green, Refactor workflow. Remember to include at least one test for each spec and that, typically, we'll only want one expectation per test._

_The business logic of your application should:_

_Take a person’s age in years and create a class that does the following:_

    * Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
    * Returns their age in Venus years. (A Venus year is .62 Earth years.)
    * Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
    * Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
    * Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
    If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

_Objectives_

_Your code will be reviewed for the following objectives:_

  * Business logic is thoroughly tested with Jest.
  * Each spec was committed before writing its corresponding code.
  * Project utilizes ES6 features including classes, let and const.
  * Dependencies are managed with npm.
  * Webpack is used to lint, bundle, and process code.
  * Project is in a polished, portfolio-quality state.
  * Required functionality was in place by the Friday deadline.
  * Project demonstrates understanding of week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

###Specifications
I developed these specs based on the assignment description.

1. The program will allow a user to enter an age in Earth years.
Input: 45
Output: 45

2. The program will not be able to process non-numerical characters entered by user.
Input: fun
Output: error message to be determined.

3. The program will correctly calculate age in Mercury years
Input: 45
Output: 187.5 (extent of rounding returned to user TBD)

4. The program will correctly calculate age in Venus years.
Input: 45
Output: 72.58064516129032 (extent of rounding returned to user TBD)

5. The program will correctly calculate age in Mars years.
Input: 45
Output: 23.93617021276596(extent of rounding returned to user TBD)

6. The program will correctly calculate age in Jupiter years.
Input: 45
Output: 3.794266441821248 (extent of rounding returned to user TBD)

7. The program will correctly calculate remaining years on Earth, based on average expectancy of 78.
Input: 45
Output: 33

8. The program will correctly calculate remaining years, in Mercury years.
Input: 45
Output: 137.5

9. The program will correctly calculate remaining years, in Venus years.
Input: 45
Output: 53.225806451612904 (extent of rounding returned to user TBD)

10. The program will correctly calculate remaining years, in Mars years.
Input: 45
Output: 17.5531914893617 (extent of rounding returned to user TBD)

11. The program will correctly calculate remaining years, in Jupiter years.
Input: 45
Output: 2.782462057335582 (extent of rounding returned to user TBD)


###Technologies Used
HTML, CSS, JavaScript, Node.js, babel 7.6.4, babel plugin 7.6.0,,clean-webpack-plugin 3.0.0, css-loader 3.2.0, eslint 6.3.0, eslint-loader 3.0.0, html-webpack-plugin 3.2.0, jest 24.9.0, style-loader 1.0.0, uglifyjs-webpack-plugin 2.2.0, webpack 4.39.3, webpack-cli 3.3.8, webpack-dev-server 3.8.0, bootstrap 4.3.1, jquery 3.4.1, and popper.js 1.16.0.

Project was written using Google Chrome; no other browsers were tested for compatibility.

###Project Setup instructions
1. Ensure that you have Node.js installed; check that **node** (v4.0.x or higher) and **npm** (v.3.6.x or higher) are in place.
2. After cloning the project locally, you can run **npm install -y** to download the necessary dependencies. You can then run **npm run build** to bundle your version of this project. If something doesn't display correctly or goes wrong somehow, please contact me at <lara.m.bjork@gmail.com> and I will do my best to troubleshoot for you.

###Known Issues and Limitations
* No known issues with code.
* Edge cases not explored beyond instances where user age in Earth years is 78 or more (i.e., where life expectancy would calculate as 0 or a negative number).

###License
This software is licensed under the MIT license.

Copyright (c) 2019 Lara Bjork
