/// <reference types="cypress" />
//cypress - Spec

describe('My Second Test Suite', () => {
    it('My First Test Case', () => {
        
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes('Python')) {

                cy.get($el).next().then(function(price) {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
        
    })
})