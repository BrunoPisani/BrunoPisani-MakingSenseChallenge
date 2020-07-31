import React from 'react';
import { Provider } from 'react-redux';
import Game from './components/Game/index';


function App({ store }) {
  return (
    <Provider store={store}>
      <div className="App">
          <Game />
      </div> 
    </Provider>
  );
}

export default App;
