import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps';
import {BasePage} from './pageObjects/BasePage';
import {constants} from '../constants';

Given(/^I go to freecash main page$/, function () {
    cy.visit(constants.testURL);
    cy.wait(1000);
});

Given(/^I click on Sign In button$/, function () {
    cy.get(BasePage.authButtons).eq(1).click();
    cy.wait(1000);
    cy.get(BasePage.authButtons).eq(1).click();
});

Given(/^I provide email "([^"]*)"$/, function (email_value) {
cy.wait(500);
    cy.get('[role="dialog"] [id="email"]').eq(1).click({force: true}).clear().type(email_value);
});

Given(/^I provide password "([^"]*)"$/, function (password_value) {
    cy.get('[role="dialog"] [id="password"]').eq(1).click({force: true}).clear().type(password_value);
});

Given(/^I click on confimation Sign In button$/, function () {
    cy.get(BasePage.signInBtnConfirmation).eq(2).click();
});

Given(/^I see warning message "([^"]*)"$/, function (text) {
    cy.contains(text).should('be.visible')
});
