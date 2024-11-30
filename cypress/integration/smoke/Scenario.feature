Feature: Basic functionality for freecash works fine


  Scenario: Login without accepting T&С will raise an error
    Given I go to freecash main page
    And I click on Sign In button
    Given I provide email "test@email.com"
    And I provide password "1Q2@3#4$5T6Y6^c"
    When I click on confimation Sign In button
    Then I see warning message "You must agree privacy policy and terms of service"
