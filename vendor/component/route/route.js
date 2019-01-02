import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screen/HomeScreen';

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
}, {
        initialRouteName: 'Home',
    })

const BottomNavigation = createMaterialBottomTabNavigator({
    Main: AppNavigator,
    Insperiation: HomeScreen,
    Profile: HomeScreen
}, {
        labeled: true,
        initialRouteName: 'Main',
        activeTintColor: '#f0edf6',
        inactiveTintColor: '#3e2465',
        barStyle: { backgroundColor: '#694fad' },
    }
)

export default createAppContainer(createStackNavigator({
    Route: BottomNavigation
}))