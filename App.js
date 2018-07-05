import React from 'react';
import { StackNavigator } from 'react-navigation';
import Landing from './src/screens/landing/Landing';
import HeaderBar from './src/components/HeaderBar';

const App = StackNavigator(
  {
    Landing: { screen : Landing }
  },
  {
    navigationOptions: {
      header: <HeaderBar />
    }
  },
  {
    initialRoute: 'Landing',
    headerMode: 'none'
  }
)

export default class Main extends React.Component {
  render() {
    return <App />
  }
}

