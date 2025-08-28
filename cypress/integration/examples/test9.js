/// <reference types="cypress" />
//cypress - Spec

describe('Calendar Suite', () => {
    it('Verify date selection', () => {

        const monthNumber = "6"
        const date = "15"
        const year = "2027"
        const expectedList = [monthNumber, date, year]
        
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
        cy.get(".react-date-picker__calendar-button").click()
        cy.get(".react-calendar__navigation__label__labelText").click()
        cy.get(".react-calendar__navigation__label__labelText").click()
        cy.contains("button", year).click()
        cy.get('.react-calendar__year-view__months__month').eq(monthNumber - 1).click()
        cy.contains("abbr", date).click()

        cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
            cy.wrap($el).invoke('val').should('equal', expectedList[index])
        })


    })
})