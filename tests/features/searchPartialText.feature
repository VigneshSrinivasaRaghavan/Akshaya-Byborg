Feature: Search Functionality validation

  Scenario Outline: To validate if the search results contains searched text only
    Given User is on the oranum home page
    When User searches the pshycics with <partial> text
    Then User should be displayed with search results matching the searched text
    Examples:
      | partial |
      | matt    |
      |akshaya  |