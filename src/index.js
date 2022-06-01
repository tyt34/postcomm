import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (store, {type, payload}) => {
  switch (type) {
    case "CREATE_NEW_POST":
      return {...store, postForSlider: [...store.postForSlider, payload]}

    case "CREATE_ARR_POST":
      return {...store, postForSlider: payload}

    case "CHANGE_INFO_NEW_COM":
      return {...store, infoAboutNewComment: !store.infoAboutNewComment}

    default:
      return store
  }
}

const store = createStore(reducer, {
  postForSlider: [], // чтобы посты сразу отображались при добавление
  infoAboutNewComment: true // чтобы комментарии подгружались сразу при добавление
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
