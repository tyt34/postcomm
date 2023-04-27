import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { RoutersComponent } from './router'
import './index.css'

const reducer = (store, { type, payload }) => {
  switch (type) {
    case 'CREATE_NEW_POST':
      return {
        ...store,
        postForSlider: [...store.postForSlider, payload]
      }

    case 'CREATE_ARR_POST':
      return { ...store, postForSlider: payload }

    case 'CHANGE_INFO_NEW_COM':
      return {
        ...store,
        infoAboutNewComment: !store.infoAboutNewComment
      }

    default:
      return store
  }
}

export const store = createStore(reducer, {
  postForSlider: [], // чтобы посты сразу отображались при добавление
  infoAboutNewComment: true // чтобы комментарии подгружались сразу при добавление
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RoutersComponent />
    </React.StrictMode>
  </Provider>
)
