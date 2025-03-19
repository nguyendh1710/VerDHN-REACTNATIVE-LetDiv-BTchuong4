import { NavigationContainer } from '@react-navigation/native'; import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProductList from "./src/screen/ProductList/ProductList";
import ProductAdd from "./src/screen/ProductAdd/ProductAdd";
import ProductUpdate from "./src/screen/ProductUpdate/ProductUpdate";
import ProductDetail from "./src/screen/ProductDetail/ProductDetail";
import Login from "./src/screen/Login/Login";
import Cart from "./src/screen/Cart/Cart";

import AppProvider from './src/AppContext';
import TabBar from './src/components/tab-bar/tab-bar/tab-bar.component';
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
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="ProductAdd" component={ProductAdd} />
            <Stack.Screen name="ProductUpdate" component={ProductUpdate} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ title: "Chi tiết sản phẩm" }} />
            <Stack.Screen name="Login" component={Login} />
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
       name="ProductList" 
       component={ProductList}
       options={{tabBarLabel:'Trang chủ', icon:'home-outline'}}
       />
       <BottomTab.Screen 
       name="Cart" 
       component={Cart}
       options={{tabBarLabel:'Giỏ hàng', icon:'cart-outline'}}
       />
   </BottomTab.Navigator>


);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop:40,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
