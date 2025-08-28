/// <reference types="cypress" />
//cypress - Spec

describe('My Test Suite', () => {
    it('Handling Child Windows', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

        cy.get('#opentab').then(function(el) {
            const url = el.prop('href')
            // Cross-origin error:
            // cy.visit(url)
            // cy.get("div.sub-menu-bar a[href*='about']").click()

            cy.origin(url, () => {
                cy.visit('/')
                cy.get("div.sub-menu-bar a[href*='about']").click()
                cy.url().should('include', 'about')
            })
        })

    })
})