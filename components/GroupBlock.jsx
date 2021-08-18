import React from 'react'
import styled from 'styled-components/native'
import {View} from 'react-native'

const Appointment = ({ user , date , active}) => {
    return(
        <GroupBlock>
                <GroupItem >
                    <Avatar source={{ uri: user.avatar}} />
                    <View>
                        <FullName>{user.name}</FullName>
                        <GrayText>{user.diagnos}</GrayText>
                    </View>
                    <DateWrapper active={active}>
                        <GroupDate active={active}>
                            {date}
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

const GrayText = styled.Text`
  font-size: 16px;
  color: #8b979f;
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

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-right: 15px;
`;

const GroupBlock = styled.View`
  padding: 0 20px;
`;

export default Appointment;