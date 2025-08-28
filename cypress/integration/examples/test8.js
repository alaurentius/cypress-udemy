/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
//cypress - Spec

describe('My Test Suite', () => {
    it('Handling Frames', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

        cy.frameLoaded('#courses-iframe')
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.wait(2000)
        cy.iframe().find("h3[class*='pricing']").should('have.length', 2)

    })
})