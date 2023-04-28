/* eslint-disable no-undef */

import { mockMesuser } from './mock-getmesuser'

describe('Test page allposts for user yyy', () => {
  it('Test component AllPosts', () => {
    cy.visit('http://localhost:3000/postcomm#/log')
    cy.get('#field-log-reg-name').type('abc')
    cy.get('#field-log-reg-pass').type('abc')
    cy.get('#form-send').click()
    cy.url().should('eq', 'http://localhost:3000/postcomm#/profile')

    /* cy.visit('http://localhost:3000/postcomm#/allposts/yyy')
    // cy.wait(1500)
    cy.intercept('GET', 'http://localhost:3001/getmesuser/yyy').as(
      'getData'
    )
    // cy.wait('@getUser').then((interception) => {
    //   interception.response = mockMesuser
    // })
    cy.wait('@getData').then((interception) => {
      console.log('get:', { interception })
    }) */
  })
})
