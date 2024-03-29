/* eslint-disable no-undef */
import { HashRouter } from 'react-router-dom'
import { AllPosts } from '../../src/pages/all-posts-page/components/all-posts/all-posts'

describe('ComponentName.cy.js', () => {
  it('Test component AllPosts', () => {
    cy.mount(
      <HashRouter basename={'/'}>
        <AllPosts />
      </HashRouter>
    )
  })
})
