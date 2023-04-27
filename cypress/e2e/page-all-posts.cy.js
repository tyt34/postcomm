/* eslint-disable no-undef */

describe('Test page allposts/user1', () => {
  it('Test component AllPosts', () => {
    cy.visit('/allposts/user1')
    cy.wait(500)
  })
})
