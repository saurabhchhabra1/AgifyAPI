# Agify API - BDD Test Suite in JS

Hey! This repo contains some simple BDD tests for the Agify API, which guesses a person’s age based on their name.
I wrote these tests using JavaScript with Cucumber and Axios. The goal is to check that the API behaves correctly like returning ages, handling batch requests, and dealing with edge cases like empty or special character names


##What’s Covered in Scenarios?

- Single name age estimation
- Estimation with country code
- Empty names
- Special characters
- Names in other languages (like Chinese)
- Batch requests with multiple names
- What happens when you send more than 10 names in a batch

##Structure - 

- features -> agify.feature # BDD scenarios (Gherkin syntax)
- features -> step_definitions -> agifySteps.js # JavaScript step defs implementations
- package.json
- package-lock.json
- README.md (Brief about the project)
- Output Demonstration.png (Screenshot of output)


##Prerequisites
- Node.js v18 or higher
- npm
- I used - v22.17.0 node version and npm version - 10.9.2

##Install Dependencies
- npm install
- Above should install all dependencies when cloning this project, if still getting error in imports then try this below -
- npm install axios chai @cucumber/cucumber

##Run test
- npm test
  or
- npm run test

##Output/Execution
- Output can be seen in (Output Demonstration.png) file also, which consist of screenshot of my terminal run.
- Have printed response output also
- Adding the terminal output here also for reference:

<pre>
 C:\Projects\Angify>npm run test

> agifyapi-js@1.0.0 test
> cucumber-js

.Data: { count: 203647, name: 'Robert', age: 73 }
......Data: { count: 1838, name: 'Saurabh', age: 41, country_id: 'IN' }
.......Data: { count: 0, name: '', age: null }
......Data: { count: 0, name: '#*+', age: null }
......Data: { count: 0, name: '佐瑞', age: null, country_id: 'CN' }
.......Data: [
  { count: 203647, name: 'Robert', age: 73 },
  { count: 2130, name: 'Saurabh', age: 41 },
  { count: 17980, name: 'Bruce', age: 76 }
]
....status code 422
.

7 scenarios (7 passed)
38 steps (38 passed)
0m03.142s (executing steps: 0m03.115s)
</pre>

##My Observation while testing this API
- Empty name scenario should not give 200 status code, ideally it should be 400 bad request as there is no name input
- Havent tested data for accuracy as mentioned
- It is giving 200 status code even if sending numbers as input, havent wrote this scenario but it works same as putting special characters or empty name which is already in scenarios.
