import { StyleSheet,SafeAreaView } from "react-native";
import EmployeeList from "./src/screen/EmployeeList/EmployeeList";
import EmployeeAdd from "./src/screen/EmployeeAdd/EmployeeAdd";
import EmployeeUpdate from "./src/screen/EmployeeUpdate/EmployeeUpdate";
import AppProvider from './src/AppContext';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './src/components/tab-bar/tab-bar/tab-bar.component';
import EmployeeResignation from './src/screen/EmployeeResignation/EmployeeResignation';
import { Provider } from 'react-redux';
import store from './src/redux/store';




const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
 
export default function App() {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
  
      <NavigationContainer> 
        <Stack.Navigator screenOptions={{headerShow: true}}> 
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="EmployeeAdd" component={EmployeeAdd} options={{ headerShown: false }}/>
          <Stack.Screen name="EmployeeUpdate" component={EmployeeUpdate} options={{ headerShown: false }}/>
       </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
 
    </Provider>
  );
}
const Main = () => (

  <BottomTab.Navigator
    screenOptions={{headerShow: true}}
    tabBar={TabBar}

  >
      <BottomTab.Screen 
      name="EmployeeList" 
      component={EmployeeList}
      options={{tabBarLabel:'DS Nhân viên', icon:'person',unmountOnBlur: true }}
      />
      <BottomTab.Screen 
      name="EmployeeResignation" 
      component={EmployeeResignation}
      options={{tabBarLabel:'DS Nghỉ việc', icon:'person-circle',unmountOnBlur: true}}
      />
  </BottomTab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop:40,
    
  },
});
