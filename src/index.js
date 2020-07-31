import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { reducer } from './redux/reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(reducer);

/*const unsubscribe =*/ store.subscribe(() => {
  console.log('state changed:', store.getState());
});

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();

/*const stopRender =*/ store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
