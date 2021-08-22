import React from 'react'
import styled from 'styled-components/native'
import GrayText from '../components/GrayText'
import {Foundation , MaterialCommunityIcons , Feather} from '@expo/vector-icons'
import {View , Text  } from 'react-native'
import Badge from '../components/Badge'
 
const PatientScreen = ({navigation}) => {
    console.log(navigation.g)
    return( 
        <View style={{flex: 1}}>
            <Container>
                <PatientFullName>{navigation.getParam('patientId' ,{}).fullname}</PatientFullName>
                <GrayText>{navigation.getParam('patientId' ,{}).phone}</GrayText>
                <ButtonView>
                    <ButtonFormullaWrapper>
                        <ButtonText>Формула зубів</ButtonText>
                    </ButtonFormullaWrapper>
                    <ButtonPhonellaWrapper>
                        <ButtonText>
                            <Foundation name='telephone' size={36} color='white' />
                        </ButtonText>
                    </ButtonPhonellaWrapper>
                </ButtonView>
            </Container>
            <PatientAppointments>
                <Container>
                    <Badge>Прийоми</Badge>
                    <AppointmentCard style={{position : 'relative'}}>
                        <AppointmentMoreWrapper>
                            <AppointmentMoreTouch>
                                <Feather name="more-horizontal" size={34} color="black" />
                            </AppointmentMoreTouch>
                        </AppointmentMoreWrapper>
                        <AppointmentRow>
                            <MaterialCommunityIcons name="tooth" size={24} color="#a3a3a3" />
                            <AppointmentCardLabel>
                                Зуб : <Text style={{fontWeight: '700'}}>{navigation.getParam('dentNumber' , 0 )}</Text>
                            </AppointmentCardLabel>
                        </AppointmentRow>
                        <AppointmentRow>
                            <MaterialCommunityIcons name="clipboard-text-multiple-outline" size={24} color="#a3a3a3" />
                            <AppointmentCardLabel>
                                Діагноз : <Text style={{fontWeight: '700'}}>{navigation.getParam('diagnostic')}</Text>
                            </AppointmentCardLabel>
                        </AppointmentRow>   
                        <AppointmentRow style={{ paddingBottom: 0,display : 'flex' , justifyContent: 'space-between' }}>
                            <AppointmentDateWrapper>
                                <AppointmentDate>{navigation.getParam('date')} - {navigation.getParam('time')}</AppointmentDate>
                            </AppointmentDateWrapper>
                            <AppointmentPriceWrapper>
                                <AppointmentPrice>
                                    {navigation.getParam('price')} P
                                </AppointmentPrice>
                            </AppointmentPriceWrapper>
                        </AppointmentRow>
                    </AppointmentCard>    
                </Container>    
            </PatientAppointments>
        </View>
    )
}

const AppointmentMoreTouch = styled.TouchableOpacity`

`;

const AppointmentMoreWrapper = styled.View`
    position: absolute;
    right: 6%;
    top: 6%;
`;

const AppointmentPrice = styled.Text`
    color: ${ props => !props.active ? '#E3F7DD' : '#8ED78D' } ;
    text-align: center;
    font-size: 14px;
    font-weight: 700; 
`;

const AppointmentDate = styled.Text`
    color: ${ props => !props.active ? '#E7F5FF' : '#2a86ff' } ;
    text-align: center;
    font-size: 14px;
    font-weight: 700; 
`;

const AppointmentPriceWrapper = styled.View`
    padding: 10px 20px;
    border-radius: 50px;
    background: ${ props => !props.active ? '#8ED78D' : '#E3F7DD'} ;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AppointmentDateWrapper = styled.View`
    padding: 10px 20px;
    border-radius: 50px;
    background: ${ props => !props.active ? '#2a86ff' : '#E7F5FF'} ;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AppointmentCardLabel = styled.Text`
    font-size: 18px;
    padding-left: 10px;
`;

const AppointmentRow = styled.View`
    display : flex;
    flex-direction: row;
    padding-bottom: 20px;   
`;

const AppointmentCard = styled.View`
    shadow-color: gray;
    elevation: 0.8;
    shadow-opacity: 0.1;
    padding: 25px;
    border-radius: 10px;
    background: white;
`;

const PatientAppointments = styled.View`
    flex: 1;
    background: #f8fafd;
`;

const Container = styled.View`
    padding: 25px;
`;

const ButtonText = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
`;

const ButtonFormullaWrapper = styled.TouchableOpacity`
    background: #2a86ff;
    padding: 10px 0 ;
    flex: .8;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`;

const ButtonPhonellaWrapper = styled.TouchableOpacity`
    background: #84d269;
    padding: 10px 0 ;
    flex: .18;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
`;

const ButtonView = styled.View`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const PatientFullName = styled.Text`
    font-size: 24px;
    font-weight: 800;
    line-height: 30px; 
    padding-bottom: 5px; 
`;



PatientScreen.navigationOptions = {
        title : 'Карта пацієнта' ,
        headerTintColor: '#2a86ff' ,
        headerStyle:{
            elevation: 0.8 ,
            shadowOpacity : 0.8 
        } ,
        headerTitleStyle:{
            fontWeight: 'bold' ,
            fontSize: 25
        } ,
        headerTitleContainerStyle :{
            paddingBottom: 15
        }
};


export default PatientScreen;


