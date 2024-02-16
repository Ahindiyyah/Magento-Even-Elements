/// <reference types="cypress" />
import 'cypress-xpath';

describe('Adding Element', () => {
    it('Adding Even Element', () => {
        cy.visit("https://magento.softwaretestingboard.com/");
        cy.get('#ui-id-6').click();
        cy.get('.categories-menu > .items > :nth-child(1) > a').click();
        AddingElements();
    });
});


function AddingElements() {
    cy.xpath('//ol[@class="products list items product-items"]/li').its('length').then((TheLength) => {
        for (let i = 0; i < TheLength; i++) {
            if (i % 2 === 0) {
                cy.xpath('//ol[@class="products list items product-items"]/li').eq(i).click()
                cy.get('#product-addtocart-button').click().should('have.attr', 'title', 'Adding...')
                cy.go(-1)
            }
        }
    })
}
