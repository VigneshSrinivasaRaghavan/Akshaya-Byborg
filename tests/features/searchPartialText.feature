Feature: Search Functionality validation

  Scenario Outline: To validate if the search results contains searched text only
    Given User is on the oranum home page
    When User searches the pshycics with "<word>" text
    Then User should be displayed with search results matching the searched text "<word>"
Examples:
      | word |
      | Matt |
      | Myst |
      | Ann  |
      | Psy  |
      | Jas  |
      | red  |
      