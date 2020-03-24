

import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/AntDesign';





function Login({
}) {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

      <View style={styles.contianer}>
        <Text>Login</Text>
      </View>

    </SafeAreaView >
  )
}

const styles = EStyleSheet.create({

});


export default Login;
