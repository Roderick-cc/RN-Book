import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


const IconComponent = ({ name, color, size, rest }) => {

  return (<Icon name={name} color={InitColor()} size={size}  {...rest} />)
}

const InitColor = (color) => {

  return color
    ? (typeof color === 'string' ? color : "pink")
    : 'pink'
}

export default Icon;