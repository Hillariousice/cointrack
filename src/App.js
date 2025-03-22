import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import  Recent from './screens/Recent';
import AllExpense from './screens/AllExpense';
import Color from './utils/color';
import IconButton from './components/UI/IconButton';
import ManageExpense from './screens/ManageExpense';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

function TabNav(){
   return <Tab.Navigator
   screenOptions={({ navigation }) =>
   ({ headerStyle: {
       backgroundColor: Color.white,
       
      },
      headerTintColor: Color.black,
      tabBarActiveBackgroundColor:  Color.white,
      tabBarActiveTintColor: Color.black, 
      // contentStyle: {
      //  backgroundColor: Color.sand
      // }
      tabBarInactiveTintColor: Color.ash,
      headerRight:({tintColor})=>{
        return  <IconButton 
        icon='add'
        onClick={()=>{
          navigation.navigate('ManageExpense');
        }}
        color={tintColor}
        size={24}
        />
       
    }
    })
   }
   initialRouteName='Recent'
   >
 <Tab.Screen 
      name="Recent"
      component={Recent}
      options={{
        title: 'Recent',
        tabBarLabel: 'Recent',
        tabBarIcon: ({color, size}) => <Ionicons name='time-outline' color={color} size={size}/>,
       
      }}
      />
      <Tab.Screen
       name="AllExpense"
       component={AllExpense}
       options={{
        title: 'All Expenses',
        tabBarLabel: 'All Expenses',
        tabBarIcon: ({color, size}) => <Ionicons name='cash-outline' color={color} size={size}/>
      }}
       />
   </Tab.Navigator>
}
export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans-semi-bold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-medium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
    'open-sans-light-italic': require('./assets/fonts/OpenSans-LightItalic.ttf'),
    'open-sans-medium-italic': require('./assets/fonts/OpenSans-MediumItalic.ttf'),
    'open-sans-semi-bold-italic': require('./assets/fonts/OpenSans-SemiBoldItalic.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
    <StatusBar style="auto" />
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
       screenOptions={
        { headerStyle: {
           backgroundColor: Color.white,
           
          },
          headerTintColor: Color.black,
        
        }
       }
       initialRouteName='Tabs'
      >
      <Stack.Screen 
      name="Tabs"
      component={TabNav}
      options={{
        headerShown: false
      }}
      />
      
       <Stack.Screen
       name="ManageExpense"
       component={ManageExpense}
       options={{
        title: 'Manage Expense',
        presentation: 'modal',
       }}
       />
       
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
