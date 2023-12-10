Feature: Button Action validation

  Scenario Outline: To validate if clicking on various button opens the sign up overlay box
    Given User is on the oranum home page
    When User opens the live pshycic
    When User clicks on "<button>" button
    Then User should be displayed with sign up overlay box

    Examples: 
      | button        |
      | surpriseIcon  |
      | buyCreditIcon |