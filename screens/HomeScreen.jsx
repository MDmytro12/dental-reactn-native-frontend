import React , {useState , useEffect} from 'react';
import styled from 'styled-components/native';
import { Appointment } from '../components';
import {Ionicons} from '@expo/vector-icons';
import {  SectionList , Text } from 'react-native'; 
import SectionTitle from '../components/SectionTitle' ;
import Swipeable from 'react-native-swipeable-row';

import {appointmentApi} from '../utils/api'

const HomeScreen = ({navigation}) => {
      const [data , setData] = useState([])
      const [isLoading , setIsLoading] = useState(false)

      const fetchAppointments = () => {
        setIsLoading(true)
        appointmentApi.get()
                      .then( res => {
                        setData(res.data.data)
                        const timeout = setTimeout( setIsLoading(false) , 9000 )
                        clearTimeout(timeout)
                      })
                      .catch( err => setIsLoading(false) )
      }
 
      useEffect( fetchAppointments , [] ) 

    return(
        <Container>
          {
            data.length > 0 && 
            <SectionList
                sections={data}
                refreshing={isLoading}
                onRefresh={fetchAppointments}
                keyExtractor={(item, index) => index } 
                renderItem={({ item }) => (<Swipeable rightButtons={[<Text>Right</Text> , <Text>Left</Text>]}>
                                              <Appointment navigate={navigation.navigate } item={item} />
                                          </Swipeable>) }
                renderSectionHeader={({ section: { title } }) => (
                     <SectionTitle  title={title} />
                )}
            />        
          }
            
            <PlusButton onPress={navigation.navigate.bind(this  , 'AddPatient')}>
              <Ionicons name='ios-add' size={36} color='white' />
            </PlusButton>
        </Container>
    )
}

HomeScreen.navigationOptions = {
        title : 'Пацієнти' ,
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

const SwipeView = styled.View`
  background-color: red;
`;

const PlusButton = styled.TouchableOpacity`
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

const Container = styled.View`
  flex : 1; 
  margin-left: 10px;
`;

export default HomeScreen;