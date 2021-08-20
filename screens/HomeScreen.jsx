import React , {useState , useEffect} from 'react';
import styled from 'styled-components/native';
import { Appointment } from '../components';
import {Ionicons} from '@expo/vector-icons'
import {  SectionList } from 'react-native';
import axios from 'axios';
import SectionTitle from '../components/SectionTitle' 


const HomeScreen = ({navigation}) => {
      const [data , setData] = useState([
        {
    "title" : "14 квітня",
    "data" : [
        {
          "user":{
            "name" : "Іван Антончик" ,
            "avatar" : "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/00bf046358db15501ace58e309f637f83a864d7b_full.jpg",
            "diagnos" : "Пульпіт"
          },
          "active" : false ,
          "date" : "12.30" ,
          "phone" : "+ 38 (099) 538 45 71"
        }
      ]
  }
      ])

    return(
        <Container >
          {
            data.length > 0 &&
            <SectionList
                sections={data}
                keyExtractor={(item, index) => index } 
                renderItem={({ item }) => {console.log(item); return <Appointment navigate={navigation.navigate } item={item} />}}
                renderSectionHeader={({ section: { title } }) => (
                     <SectionTitle  title={title} />
                )}
            />
          }
            
            <PlusButton >
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