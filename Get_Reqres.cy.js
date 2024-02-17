/// <reference types="cypress" />


describe('Pagina aprendendo a testar', () => {
    it('Validar LIST USERS retornando 200', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
           expect(response.status).to.eq(200)
        })
    
    })

    it('Validar body LIST USERS retornando 200', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users?page=2'
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))

        })
    
    })




    it('Validar SINGLE USER retornando 200', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users/2'
        }).then((response) => {
           expect(response.status).to.eq(200)
        })
    
    })

    it('Validar body retornando no SINGLE USER', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users/2'
        }).then((response) => {
            let retorno = response.body
            cy.log(JSON.stringify(retorno, null, 2))

        })
    
    })


    it('Validar SINGLE USER sem informar id retornando 400', () => {
        cy.request({
            method: 'GET', 
            url: 'https://reqres.in/api/users/'
        }).then((response) => {
           expect(response.status).to.eq(400)
        })
    
    })

})

