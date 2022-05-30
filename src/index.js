import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (store, {type, payload}) => {
  switch (type) {
    case "CREATE_PAGE_ALL_POSTS":
      return {...store, allPostsIdUser: payload}

    case "SAVE_ID_USER":
      return {...store, idUser: payload}

    default:
      return store
  }
}

const store = createStore(reducer, {
  allPostsIdUser: '', //
  idUser: '', //
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
