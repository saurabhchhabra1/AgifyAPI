Feature: Estimate age using Agify API

  #Scenario -1
  Scenario: Estimate the age of a single name
    Given I input name as "Robert"
    When I initialize AgifyAPI
    Then The response status code should be 200
    And The response should show count
    And The response name should be "Robert"
    And The response should show age

  #Scenario -2
  Scenario: Estimate the age of a single name with country
    Given I input name as "Saurabh" and country as "IN"
    When I initialize AgifyAPI 
    Then The response status code should be 200
    And The response should show count
    And The response name should be "Saurabh"
    And The response should show age
    And The response country should be "IN"

  #Scenario -3
  Scenario: Calling API with empty name
    Given I input name as ""
    When I initialize AgifyAPI
    Then The response status code should be 200
    And The response should show count
    And The response name should be ""
    And The response should show age

  #Scenario -4
  Scenario: Calling API with special characters name
    Given I input name as "#*+"
    When I initialize AgifyAPI
    Then The response status code should be 200
    And The response should show count
    And The response name should be "#*+"
    And The response should show age

  #Scenario -5
  Scenario: Calling API with Native Name with Native syallbels
    Given I input name as "佐瑞" and country as "CN"
    When I initialize AgifyAPI
    Then The response status code should be 200
    And The response should show count
    And The response name should be "佐瑞"
    And The response should show age
    And The response country should be "CN"

 #Scenario-6
    Scenario: Estimate age for batch
    Given I input multiple names
    | Robert | Saurabh | Bruce |
    When I initialize AgifyAPI with batch
    Then I should get same count of records
    And I should get count,name and age for batch
    

 #Scenario-7
 Scenario: Check status code for more than 10 records
  Given I input multiple names
  | Robert | Saurabh | Bruce | a | b| c| d| e| f| g| h| i |
  When I initialize AgifyAPI with batch more than 10 and validate status code 422