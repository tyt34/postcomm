/* eslint-disable no-undef */
import { HashRouter } from 'react-router-dom'
import Field from '../../src/pages/profile-page/components/field/field'

describe('ComponentName.cy.js', () => {
  it('Test component Field - mixClass - true', () => {
    cy.mount(
      <HashRouter basename={'/'}>
        <Field mixClass />
      </HashRouter>
    )
  })
  it('Test component Field - mixClass - false', () => {
    cy.mount(
      <HashRouter basename={'/'}>
        <Field mixClass={false} />
      </HashRouter>
    )
  })
})
