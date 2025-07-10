# Agify API - BDD Test Suite

Hey! This repo contains some simple BDD tests for the Agify API, which guesses a person’s age based on their name.
I wrote these tests using JavaScript with Cucumber and Axios. The goal is to check that the API behaves correctly like returning ages, handling batch requests, and dealing with edge cases like empty or special character names


##What’s Covered in Scenario?

-Single name age estimation
-Estimation with country code
-Empty names
-Special characters
-Names in other languages (like Chinese)
-Batch requests with multiple names
-What happens when you send more than 10 names in a batch

##Structure - 
├── features
│ ├── agify.feature # BDD scenarios (Gherkin syntax)
│ └── step_definitions
│ └── agifySteps.js # JavaScript step defs implementations
├── package.json
├── package-lock.json
└── README.md


##Prerequisites
- Node.js v18 or higher
- npm
I used - v22.17.0

##Install Dependencies
- npm install

##Run test
- npm run test


