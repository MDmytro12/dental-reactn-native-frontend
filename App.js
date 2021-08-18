import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  SectionList , TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'
import { Appointment , SectionTitle} from './components';
import {Ionicons} from '@expo/vector-icons'

const DATA = [
  {
    title:'12 квітня',
    data: [
      {
        user : {
          diagnos: 'Пульпіт',
          name : 'Іван Антончик' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/0f/0fb3183813467a3cfc8ba3bcc77ae4c55a119a53_full.jpg'
        } ,
        date: '12:30' ,
        active : true
      } ,
      {
        user : {
          diagnos: 'Видалення зуба',
          name : 'Олександр Дудар' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/59/5999713f6137908fff6079e934f6041381dc0035_full.jpg'
        } ,
        date: '12:30' ,
        active : false
      } ,
      {
        user : {
          diagnos: 'Пломба',
          name : 'Андросюк Артем' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7d/7d7a2ecf787b12febdb334ca26074a6a87372541_full.jpg'
        } ,
        date: '12:30' , 
        active : false
      }
    ]
  } ,
  {
    title:'13 квітня',
    data: [
      {
        user : {
          diagnos: 'Пульпіт',
          name : 'Іван Антончик' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/0f/0fb3183813467a3cfc8ba3bcc77ae4c55a119a53_full.jpg'
        } ,
        date: '12:30' ,
        active : false
      } ,
      {
        user : {
          diagnos: 'Видалення зуба',
          name : 'Олександр Дудар' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/59/5999713f6137908fff6079e934f6041381dc0035_full.jpg'
        } ,
        date: '12:30' ,
        active : false
      } ,
      {
        user : {
          diagnos: 'Пломба',
          name : 'Андросюк Артем' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7d/7d7a2ecf787b12febdb334ca26074a6a87372541_full.jpg'
        } ,
        date: '12:30' , 
        active : false
      }
    ]
  } ,
  {
    title:'14 квітня',
    data: [
      {
        user : {
          diagnos: 'Пульпіт',
          name : 'Іван Антончик' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/0f/0fb3183813467a3cfc8ba3bcc77ae4c55a119a53_full.jpg'
        } ,
        date: '12:30' ,
        active : false
      } ,
      {
        user : {
          diagnos: 'Видалення зуба',
          name : 'Олександр Дудар' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/59/5999713f6137908fff6079e934f6041381dc0035_full.jpg'
        } ,
        date: '12:30' ,
        active : false
      } ,
      {
        user : {
          diagnos: 'Пломба',
          name : 'Андросюк Артем' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7d/7d7a2ecf787b12febdb334ca26074a6a87372541_full.jpg'
        } ,
        date: '12:30' , 
        active : false
      }
    ]
  } ,
  {
    title:'15 квітня',
    data: [
      {
        user : {
          diagnos: 'Пульпіт',
          name : 'Іван Антончик' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/0f/0fb3183813467a3cfc8ba3bcc77ae4c55a119a53_full.jpg'
        } ,
        date: '12:30' ,
        active : false
      } ,
      {
        user : {
          diagnos: 'Видалення зуба',
          name : 'Олександр Дудар' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/59/5999713f6137908fff6079e934f6041381dc0035_full.jpg'
        } ,
        date: '12:30' ,
        active : false
      } ,
      {
        user : {
          diagnos: 'Пломба',
          name : 'Андросюк Артем' ,
          avatar : 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/7d/7d7a2ecf787b12febdb334ca26074a6a87372541_full.jpg'
        } ,
        date: '12:30' , 
        active : false
      }
    ]
  }
]
 
export default function App() {
  return (
    <Container >
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => index } 
          renderItem={({ item }) => <Appointment {...item} />}
          renderSectionHeader={({ section: { title } }) => (
            <SectionTitle  title={title} />
        )}
      />
      <PlusButton >
        <Ionicons name='ios-add' size={36} color='white' />
      </PlusButton>
    </Container>
  );
}


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
  margin-top: 50px;
  margin-left: 10px;
`;
