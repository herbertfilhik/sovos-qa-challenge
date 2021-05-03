/// <reference types="Cypress" />

//let baseUrl = Cypress.env('baseUrl')
let baseUrl = "https://mocki.io"

describe('Validar api', () => {
    let request = "/v1/19430625-2b1c-492a-925f-8b4921964ac3"

    beforeEach(() => {
    })

    afterEach(() => {
    })

    it('Realizar request para validar api ', () => {
        cy.request({
            method : 'GET',
            url : baseUrl + request,  
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json',
            }
            }).then(function(response){
                expect(response.status).equal(200)
                expect(response.body).has.property('success', true)
                expect(response.body).has.property('message', "Notifications Listed")
                expect(response.body).has.property('data')
                expect(response.body.data).has.property('pageState')
                expect(response.body.data).has.property('notifications')
                expect(response.body.data.notifications[0]).has.property('createdDate')
                expect(response.body.data.notifications[0]).has.property('metadata')
                expect(response.body.data.notifications[0]).has.property('content', "PEFwcGxpY2F0aW9uUmVzcG9uc2U+DQoJPFVCTFZlcnNpb25JRD4yLjE8L1VCTFZlcnNpb25JRD4NCgk8SUQ+OTI1YWM2MDEtMjc4ZC00MmFiLTg5OTYtMzk3NWE2ZDE2ZDFjPC9JRD4NCgk8SXNzdWVEYXRlPjIwMjAtMTItMDE8L0lzc3VlRGF0ZT4NCgk8RG9jdW1lbnRSZXNwb25zZT4NCgkJPFJlc3BvbnNlPg0KCQkJPFN0YXR1cz4NCgkJCQk8U3RhdHVzUmVhc29uQ29kZSBsaXN0SUQ9IlN0YXR1c0NvZGUiPjIwMDwvU3RhdHVzUmVhc29uQ29kZT4NCgkJCQk8U3RhdHVzUmVhc29uPkRvY3VtZW50IEF1dGhvcml6ZWQ8L1N0YXR1c1JlYXNvbj4NCgkJCQk8VGV4dD5Eb2N1bWVudCBhdXRob3JpemVkIHN1Y2Nlc3NmdWxseTwvVGV4dD4NCgkJCTwvU3RhdHVzPg0KCQk8L1Jlc3BvbnNlPg0KCTwvRG9jdW1lbnRSZXNwb25zZT4NCjwvQXBwbGljYXRpb25SZXNwb25zZT4=")

                cy.log(response)
            });
        cy.log("Teste Finalizado")
    });
});