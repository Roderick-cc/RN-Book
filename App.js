import * as React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

// import Icon from 'react-native-vector-icons/AntDesign';
import IconComponent from './app/Icon/Icon'


import Home from './app/src/Home'
import Detail from './app/src/Detail/Detail'
import Search from './app/src/Search/Search'

import Mine from './app/src/User/User'
import Login from './app/src/User/Login'


import EStyleSheet from 'react-native-extended-stylesheet';

const stackProps = {
  headerMode: 'none'
}



const HomeStack = createStackNavigator()

function HomeScreen() {
  return (
    <HomeStack.Navigator {...stackProps} >
      <HomeStack.Screen name='Home' component={Home} />
      <HomeStack.Screen name='Search' component={Search} />
      <HomeStack.Screen name='Detail' component={Detail} />
    </HomeStack.Navigator>
  )
}

const MineStack = createStackNavigator()
function MineScreen() {
  return (
    <MineStack.Navigator >
      <MineStack.Screen name='Mine' component={Mine}
        options={{ headerTitle: null, headerShown: false, headerMode: null, animationTypeForReplace: 'pop' }}
      />

      <MineStack.Screen name='Login' component={Login} />
    </MineStack.Navigator>
  )
}


const option = ({ route }) => {
  console.log('1231', route)
  return { tabBarVisible: route.state && route.state.index > 0 ? false : true }
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63', // 选中标签的颜色
          activeBackgroundColor: '#99999940', // 选中标签的背景颜色
          inactiveTintColor: '#1bf50e', // 未选中标签的颜色
          // showLabel: false, 是否展示标题
          // showIcon:false 是否显示图标
          style: {
            borderTopColor: '#000',
            elevation: 0,
          },
          labelPosition: 'below-icon' // beside-icon ->横向  beside-icon -> 竖向
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            const nameMap = {
              Home: 'dropbox',
              Anime: 'dashboard',
              Ugc: 'API',
              Mine: 'message1'
            }
            return <IconComponent name={nameMap[route.name]} size={24} color={color} />
          }
        })}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={option}
        />
        <Tab.Screen name='Anime' component={HomeScreen} options={option} />
        <Tab.Screen name='Ugc' component={HomeScreen} options={option} />
        <Tab.Screen name='Mine' component={MineScreen} options={option} />



      </Tab.Navigator>
    </NavigationContainer>

  );
}


EStyleSheet.build({ // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: 'pink'
});

export default App;
