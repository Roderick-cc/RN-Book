import EStyleSheet from 'react-native-extended-stylesheet';


const styles = EStyleSheet.create({
  nameTxt: {
    fontSize: 25,
    marginTop: 10,
    textAlign: 'center',
    color: '#fff'
  },
  imgCon: {
    shadowColor: '#e63c47',
    // shadowOffset: { width: 5, height: 10 },
    shadowRadius: 10,
    shadowOpacity: .9,
    alignItems: 'center'
  },
  img: {
    width: 100,
    height: 100,
    borderWidth: 3,
    borderColor: '#fff',
    overflow: 'hidden',
    borderRadius: 75,

  },
  userListCon: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#555',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f4f0f1'

  },
  left: {
    color: '#555',
    flex: 1,
    paddingLeft: 10,
  },
  right: {
    color: '#555',
    paddingRight: 10,
  },
  viroty: {
    height: 300,
    backgroundColor: '#fe6869a8',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowRadius: 10,
    shadowOpacity: .2,
  },
  userContainer: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  navCon: {
    marginTop: 20,
    // backgroundColor: '#999'
  },
  desTxt: {
    marginTop: 5,
    color: '#fff',
    textAlign: 'center'
  },
});

export default styles;