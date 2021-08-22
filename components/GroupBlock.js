import React from 'react'
import styled from 'styled-components/native'
import {View} from 'react-native'
import GrayText from './GrayText'

const colorFilter = (wordd) => {
  const word = wordd.trim()

  return `rgb( ${word.charCodeAt(11) % 255 } , ${word.charCodeAt(4) % 255 } , ${word.charCodeAt(8) % 255} )`
}

const Appointment = ({ item  , navigate}) => {

    const {patientId ,time , diagnostic , active} = item 
 
    return(
        <GroupBlock>
                <GroupItem  onPress={ navigate.bind(this, 'Patient' , item)}>
                    <Avatar style={{backgroundColor : colorFilter(patientId._id) , borderRadius: 50 , display : 'flex' , justifyContent : 'center' , alignItems : "center" }}>
                      <AvatarLetter>{patientId.fullname.trim().toUpperCase()[0] || 'U'}</AvatarLetter>  
                    </Avatar>  
                    <View>
                        <FullName>{patientId.fullname}</FullName>
                        <GrayText>{diagnostic}</GrayText>   
                    </View>
                    <DateWrapper active={active}>
                        <GroupDate active={active}>
                            {time}
                        </GroupDate>
                    </DateWrapper>
                </GroupItem>
        </GroupBlock>
    )
}

Appointment.defaultProps = {

    active : false ,
    user : {} , 
    date: 'No date!'
}

const DateWrapper = styled.View`
  margin-left: 50px;
  border-radius: 20px;
  background-color: ${props => (props.active ? '#2386ff' : ' #e9f5ff') };
`;

const GroupDate = styled.Text`
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  line-height: 28px;
  width: 70px;
  height: 32px;
  text-align: center;
  color: ${props => (props.active ? '#fff' : '#4249ff')}
`;


const FullName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const GroupItem = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px 0;
  border-bottom-width: 2px;
  border-bottom-color: #f3f3f3;
`;

const AvatarLetter = styled.Text`
  font-size: 30px;
  color: white ;
  text-align: center;
`;

const Avatar = styled.View` 
  width: 50px;
  height: 50px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GroupBlock = styled.View`
  padding: 0 20px;
`;

export default Appointment;