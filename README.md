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
I used - v22.17.0

##Install Dependencies
- npm install

##Run test
- npm test
  or
- npm run test

##Output/Execution
- Output can be seen in Output Demonstration.png
- Adding the terminal output here also for reference:

  C:\Projects\Angify>npm test

> agifyapi-js@1.0.0 test
> cucumber-js

(node:38852) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///C:/Projects/Angify/features/step_definitions/agifySteps.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to C:\Projects\Angify\package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
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
0m03.422s (executing steps: 0m03.398s)


##My Observation while testing this API
- Empty name scenario should not give 200 status code, ideally it should be 400 bad request as there is no name input
- Havent tested data for accuracy as mentioned
- It is giving 200 status code even if sending numbers as input, havent wrote this scenario but it works same as putting special characters or empty name which is already in scenarios.
