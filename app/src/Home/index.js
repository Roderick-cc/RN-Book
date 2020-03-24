

import React, { useState, useEffect } from 'react';
import { Text, View, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/AntDesign';

import IndexItem from './components/IndexItem'


const a = [
  {
    id: '123'
  }, {
    id: '123'
  }, {
    id: '123'
  }, {
    id: '123'
  }, {
    id: '123'
  },
]


function Home({
  params,
  navigation,
}) {
  const [tab, setTab] = useState(1)

  useEffect(() => {
    getList()
  }, [tab])


  const getList = () => {
    console.log('adasdasd', tab)


    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('responseJson.movies', responseJson.movies)

        // this.setState({
        //   isLoading: false,
        //   dataSource: responseJson.movies,
        // }, function(){

        // });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

      <View style={styles.contianer}>


        <StatusBar barStyle={'dark-content'} translucent={true} backgroundColor='transparent' animated={true} />
        <View style={styles.headContent}>

          <View style={styles.text}>
            <Text style={tab === 1 ? styles.sel : styles.Nosel} onPress={() => setTab(1)}>推荐</Text>
            <Text style={[tab === 2 ? styles.sel : styles.Nosel, styles.new]} onPress={() => setTab(2)}> 最新</Text>
          </View>
          <Icon name={'search1'} size={22} onPress={() => { navigation.navigate('Search') }} />
        </View>

        <ScrollView>
          <IndexItem nav={navigation.navigate} />
        </ScrollView>
        
      </View>


    </SafeAreaView >
  )
}

const styles = EStyleSheet.create({

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


export default Home;
