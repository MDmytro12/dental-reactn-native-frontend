import React , {useState , useEffect} from 'react';
import styled from 'styled-components/native';
import { Appointment } from '../components';
import { FontAwesome5 , AntDesign } from '@expo/vector-icons';
import {  SectionList , Alert } from 'react-native'; 
import SectionTitle from '../components/SectionTitle' ;
import Swipeable from 'react-native-swipeable-row';
import { PlussButton } from '../components';

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

      const remove = id => {
        Alert.alert(
          "Видалення запису!",
          "Ви дійсно хочете видалити запис прийому ?",
          [
            {
              text: "Відмінити",
              onPress: () => {},
              style: "cancel"
            },
            { text: "Видалити", onPress: () => {
              setIsLoading(true)
              const result = data.map( group =>{
                group.data = group.data.filter( ftem => ftem._id !== id )
                return group
              })
              appointmentApi.remove(id).catch(err => alert('Запис прийому видалено не було!Проблеми з Інтернетом!'))
              setData(result)
              setIsLoading(false)
            } }
          ]
        );
        
      }

    return(
        <Container>
          {
            data.length > 0 && 
            <SectionList
                sections={data}
                refreshing={isLoading}
                onRefresh={fetchAppointments}
                keyExtractor={(item, index) => index }  
                renderItem={({ item }) => (<Swipeable key={item._id} rightButtons={[
                                            <SwipeViewButton onSwipe   style={{backgroundColor: '#b4c1cb'}}>
                                              <ButtonIconWrapper  >
                                                <FontAwesome5 name="edit" size={40} color="white" />
                                              </ButtonIconWrapper>
                                            </SwipeViewButton> ,
                                            <SwipeViewButton onPress={() => remove(item._id)} style={{backgroundColor: '#f85a5a'}}>
                                              <ButtonIconWrapper>
                                                <AntDesign name="delete" size={40} color="white" />
                                              </ButtonIconWrapper>
                                              
                                            </SwipeViewButton>
                                            ]}>
                                              <Appointment navigate={navigation.navigate } item={item} />
                                          </Swipeable>) }
                renderSectionHeader={({ section: { title } }) => (
                     <SectionTitle  title={title} />
                )}
            />        
          }
          
          <PlussButton onPress={navigation.navigate.bind(this  , 'AddPatient')  } />
            
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

const ButtonIconWrapper = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;

`;

const SwipeViewButton = styled.TouchableOpacity`
  flex: 1;
  width: 75px;
`;

const Container = styled.View`
  flex : 1; 
  margin-left: 10px;
  padding-bottom: 50px;
`;

export default HomeScreen;