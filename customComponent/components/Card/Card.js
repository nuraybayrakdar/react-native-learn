import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import Styles from './card.style';

const Card = (props) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.body}>
        <Text style={Styles.title}>{props.title}</Text>
        <Text style={Styles.text}>{props.text}</Text>
      </View>
      <TouchableOpacity style={Styles.button_container} onPress={() => Alert.alert('Merhaba ' + props.title)}>
        <Text style={Styles.button_title}>I LIKED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;