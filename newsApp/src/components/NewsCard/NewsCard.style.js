import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
 
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: { 
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginTop: 7,
  },
  author: { 
    textAlign: 'right',
    fontStyle: 'italic',
  },
  inner_container: {
    padding: 5,
  }
});
