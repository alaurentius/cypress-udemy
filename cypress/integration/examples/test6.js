/// <reference types="cypress" />
//cypress - Spec

describe('My Second Test Suite', () => {
    it('My First Test Case', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
        
    })
})