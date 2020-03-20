
import * as React from 'react';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';


const Drawer = createDrawerNavigator();

function ListScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.openDrawer()}
      />

      <Text>12313</Text>
    </View>
  )
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


function CustomDrawerContent({ progress, ...rest }) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <Animated.View style={{ transform: [{ translateX }] }}>
      {/* ... drawer contents */}
    </Animated.View>
  );
}



function IndexRouter() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="right"
      drawerType="front"
      edgeWidth="10000"
      hideStatusBar={true}
      // drawerStyle={{
      //   backgroundColor: '#c6cbef',
      //   width: 240,
      // }}
      drawerContent={props => <ListScreen {...props} />}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 30 },
      }}
    >
      <Drawer.Screen name="ListScreen" component={ListScreen} />
      <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Drawer.Navigator>
  )
}



export default IndexRouter;