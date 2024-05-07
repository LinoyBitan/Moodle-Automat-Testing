# Software Quality Engineering - System Testing
This is a repository for the system-testing assignment of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called [Moodle](https://moodle.org/).

Moodle is an open-source learning management system (LMS) widely used for delivering online courses and educational content. It provides educators with a platform to create, manage, and deliver interactive online courses, assessments, and collaborative activities

## Installation
1. Go to downloads.moodle.org/windows and download the latest stable version
2. Extract the file
3. Press "Start Moodle"
4. Follow the instructions for creating the DB and creating the first user (admin)
5. When finish, press "Stop Moodle"
6. From now on, "Start Moodle" will start the website automatically.


## What we tested

We tested the courses module that allows students to mark as star courses, and for teachers to delete courses.
We chose to test the following user stories: 

*First User story:* A student chooses a course he is enrolled to and mark it as star.

*Preconditions:* There is a course with a student

*Expected outcome:* The course is marked as star

*Second User story:* A teacher chooses a course and deletes it.

*Preconditions:* There is a course with a student

*Expected outcome:* The course has been deleted 


## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a behavior-driven testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 

## Results
All tests passed successfully.

# IMPORTANT !!!!!!!
For the one before the last command we must have to do some code lines as a comment so the test can be run one by one.
We comment the lines of clicking the course as star and the lines that belong to the actions of deleting the course.
The events happen but the clicking of delete/star the course are not really happen because we wanted the tests run all together.

# IMPORTANT !!!!!!!!
For the TwoWay we have another function in the ensemble-code.js that belong to it (in comment because it's with the same name).