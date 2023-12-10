Feature: Button Action validation

  Scenario: To validate if clicking on various button opens the sign up overlay box
    Given User is on the oranum home page
    When User opens the live pshycic
    When User clicks on surprise button
    Then User should be displayed with sign up overlay box