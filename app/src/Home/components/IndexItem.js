

import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
const img = 'https://ae01.alicdn.com/kf/HTB16xcwHVXXXXXgXFXXq6xXFXXXV/Free-Shipping-Double-Faced-Educational-Wooden-Blackboard-Multifuncational-Baby-Learning-Education-Drawn-Board-Drawing-Toys-Gift.jpg'


const data = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
]


function IndexItem({
  nav
}) {


  const handleCLickItem = () => {
    console.log('iii')
    nav('Detail', { detailId: 123 })

    // push('Detail', { gv: item.id })
  }

  const loading = <ActivityIndicator size={30} style={{ margin: 20 }}></ActivityIndicator>

  if (!data) return loading

  return (
    <>


      <View style={styles.ViewContainer}>
        {
          data.map((ele,index) => {
            return (
              <View style={styles.imgContainer} key={index}>
                <TouchableOpacity onPress={() => handleCLickItem()} activeOpacity={0.9} >
                  <View><Image source={{ uri: img }} style={{ width: 165, height: 165 }} /></View>
                  <View style={styles.txtContainer}>
                    <Text style={styles.txtTitle} numberOfLines={1}>Global Version Xiaomi</Text>
                    <View style={styles.brancCon}>
                      <View style={[styles.branItem]}><Text style={{ color: '#fff', paddingHorizontal: 2 }}>Branch name</Text></View>
                      <View style={[styles.branItem]}><Text style={{ color: '#fff', paddingHorizontal: 2 }}>HOST</Text></View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </View>

    </>
  )
}


const styles = EStyleSheet.create({
  branItem: {
    height: 20,
    backgroundColor: 'pink',
    lineHeight: 20,
    marginHorizontal: 3,
    marginVertical: 3
  },
  brancCon: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  txtContainer: {
    paddingLeft: 10,
    paddingVertical: 10,
    paddingRight: 10,
    width: 165,
  },
  txtTitle: {
    fontSize: 16,
  },
  imgContainer: {
    marginBottom: 10,
    marginHorizontal: 20,
    borderColor: 'pink',
    borderWidth: 1,
  },
  ViewContainer: {
    marginTop: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contianer: {
    flex: 1,
  },
  headContent: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
  },
  text: {

    flexDirection: 'row',
    alignItems: 'center',
  },
  Nosel: {
    fontSize: 18,
  },
  sel: {
    fontSize: 24,
    color: 'pink'
  },
  new: {
    paddingLeft: 20,
  }
});



export default IndexItem;