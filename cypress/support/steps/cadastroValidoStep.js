/// <reference types="cypress" />

/*global, Given, Then, When*/

import cadastroPage from '../pageObject/cadastroPage'
const CadastroPage = new cadastroPage

Given('que estou na tela de cadastro de candidatos', () => {
    CadastroPage.acessarSite()       
})

When('insiro os dados solicitados para cadastro', () => {
    CadastroPage.cadastroCandidato()  
})

Then('o cadastro é realizado com sucesso', () => {
    CadastroPage.validacaoPagina()   
})