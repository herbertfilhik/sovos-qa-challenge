/// <reference types="Cypress" />

//let baseUrl = Cypress.env('baseUrl')
const faker = require('faker-br');
let baseUrl = "https://www.amazon.com"

describe('Site Amazon', () => {
    let nome = faker.name.firstName() + " " + faker.name.lastName()
    let email = faker.internet.email()
    let passwd = faker.internet.password()

    beforeEach(() => {
        cy.visit(baseUrl, {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear()
                win.onerror = null
            }
        })

        cy.reload()
    })
    afterEach(() => {
        cy.screenshot()

    })

    it('Acessar site Amazon e buscar por um notebook gamer', () => {
        cy.get('#twotabsearchtextbox').type("B08TCGYWNK")
        cy.wait(2000)
        cy.get('#nav-search-submit-button').click()
        cy.wait(2000)
    });

    it('incluir item no carrinho', () => {
        cy.get('#twotabsearchtextbox').type("B08TCGYWNK")        
        cy.get('#nav-search-submit-button').click({ multiple: true })
        cy.wait(2000)
        cy.get('.a-size-base-plus').click({ multiple: true })
        cy.wait(2000)
        cy.get('#add-to-cart-button').click({ multiple: true })
        cy.wait(2000)
    });

    it('Criar nova conta na Amazon', () => {
        cy.get('#nav-link-accountList-nav-line-1').click()
        cy.get('#createAccountSubmit').click()
        cy.get('#ap_customer_name').click().type(nome);
        cy.get('#ap_email').click().type(email);
        cy.get('#ap_password').click().type(passwd);
        cy.get('#ap_password_check').click().type(passwd);
        cy.get('#continue').click();
        cy.wait(2000)
        cy.get('.a-spacing-small > h1')
            .should('have.text', 'Verificar o endereço de e-mail');
        cy.wait(2000)
    });
});