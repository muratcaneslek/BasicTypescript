import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './App/Redux/store'; 
import MainTabNavigator from './App/Screens/MainTabNavigator';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
