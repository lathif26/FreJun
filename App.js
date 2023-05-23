import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers';
import NavigationContainers from './src/components/NavigationContainers';

const store = configureStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainers />
    </Provider>
  );
};

export default App;
