import React from 'react'
import styled from 'styled-components'
import {Ionicons} from '@expo/vector-icons'

const PlussButton = ({onPress}) => {
    return(
        <Circle onPress={onPress}>
            <Ionicons name='ios-add' size={36} color='white' />
        </Circle>
    )
}

const Circle = styled.TouchableOpacity`
  border-radius: 50px;
   width: 64px;
  height: 64px;
  background-color: #2a86ff;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 5%;
  right: 7%;
  shadow-color: #2a86ff;
  shadow-opacity: 0.9;
  shadow-radius: 5;
  elevation: 5;
`;

export default PlussButton;