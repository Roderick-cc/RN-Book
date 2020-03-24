

import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './userCss.js'

import Icon from 'react-native-vector-icons/AntDesign';

import avt from '../../assets/avt.jpg'

const list = [
  ['历史记录', ''],
  ['使用说明', ''],
  ['联系我们', 'shideBiuBiu~~'],
  ['版本更新', 'v0.0.1']
]

function User({
  navigation,
}) {


  const goLogin = () => {
    console.log('cccccclick')
    navigation.navigate('Login')
  }

  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={styles.userContainer} >
      <View style={styles.viroty}>
        <TouchableOpacity onPress={() => { goLogin() }} activeOpacity={0.8}>
          {/* <Text>userr</Text> */}
          <View style={styles.imgCon}>
            <Image source={require('../../assets/avt.jpg')} style={styles.img} style={styles.img} />

          </View>

          <Text style={styles.nameTxt}> shide </Text>
          <Text style={styles.desTxt}>des: Chase the deer hunter could not see at the foot of the mountain. </Text>
        </TouchableOpacity>
      </View>


      <View style={styles.navCon}>
        {
          list.map((ele, index) => {
            return (
              <TouchableOpacity key={index} activeOpacity={0.8} style={styles.userListCon} >
                <Text style={styles.left}>{ele[0]}</Text>
                <Text style={styles.right}>{ele[1]}</Text>
                <Icon name={'right'} size={16} color={'#bbb'} />
              </TouchableOpacity>
            )
          })
        }
      </View>



    </View>
    // </SafeAreaView >
  )
}


// const styles = EStyleSheet.create({
//   nameTxt: {
//     fontSize: 25,
//     marginTop: 10,
//     textAlign: 'center',
//     color:'#fff'
//   },
//   imgCon: {
//     shadowColor: '#e63c47',
//     // shadowOffset: { width: 5, height: 10 },
//     shadowRadius: 10,
//     shadowOpacity: .9,
//   },
//   img: {
//     width: 100,
//     height: 100,
//     borderWidth: 3,
//     borderColor: '#fff',
//     overflow: 'hidden',
//     borderRadius: 75,
//     //阴影
//   },
//   userListCon: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     color: '#555',
//     padding: 20,
//   },
//   left: {
//     color: '#555',
//     flex: 1,
//     paddingLeft: 10,
//   },
//   right: {
//     color: '#555',
//     paddingRight: 10,
//   },
//   viroty: {
//     height: 300,
//     backgroundColor: '#fe6869a8',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   userContainer:{

//   }
// });



export default User;