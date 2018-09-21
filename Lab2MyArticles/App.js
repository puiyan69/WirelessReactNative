import{
  createStackNavigator,
}from 'react-navigation';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

export default createStackNavigator({
  Home:{
    screen: HomeScreen
  },
  Details: {
    screen: DetailsScreen
  }
},{
  initialRouteName: 'Home',
  navigationOptions:{
    headerStyle:{
      backgroundColor: '#a80000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});