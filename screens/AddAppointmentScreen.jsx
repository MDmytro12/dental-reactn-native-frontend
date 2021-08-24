import React , {useState , useRef } from 'react'
import styled from 'styled-components/native'
import { Foundation  } from '@expo/vector-icons'
import {ScrollView ,  Picker } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {appointmentApi} from '../utils/api/appointment'


const AddAppointmentScreen = ({navigation}) => {

    const [values , setValues] = useState({
        dentNumber : 0 ,    
        diagnostic : 'Видалення зуба',
        price : '',
        date : new Date()  ,
        time : ''
    })

    const onChangeValue = (key , value) => {
        switch(key){
            case 'time' : setValues({...values , time : value});
            case 'date' : setValues({...values , date : value});
            case 'diagnostic' : setValues({...values , diagnostic : value});
            case 'price' : setValues({...values , price : value});
            case 'dentNumber' : setValues({...values , dentNumber : value});
            default : setValues(values)
        }   
    } 
 
    const onPressSend = () => {
  
        console.log(navigation.getParam('data'))
    }
 
    return (
        <ScrollView>
            <AddFormWrapper>
                <AddFormInputName
                    style={{marginBottom: 20}}
                    placeholder="Номер зуба"
                    value={values.dentNumber}
                    keyboardType='numeric'
                    onChange={ () => onChangeValue('dentNumber' , values.dentNumber)}
                />
                <DiagnosticText>
                    Діагноз : 
                </DiagnosticText> 

                <Picker
                    mode="dialog"
                    selectedValue={values.diagnostic}
                    style={{color: 'black' ,width: '90%'  , fontSize: 22 }} 
                    itemStyle={{ fontSize: 22  ,fontWeight: '500'}}
                    onValueChange={(itemValue, itemIndex) => setValues({...values , diagnostic : itemValue})}
                >
                    <Picker.Item label="Видалення зуба" value="Видалення зуба" />
                    <Picker.Item label="Пульпіт" value="Пульпіт" />
                    <Picker.Item label="Парадонтит" value="Парадонтит"/>
                    <Picker.Item label="Періодонтит" value="Періодонтит"/>
                    <Picker.Item label="Кіста зуба" value="Кіста зуба"/>
                    <Picker.Item label="Альвеоліт" value="Альвеоліт"/>
                </Picker>

                <AddFormInputName
                    placeholder="Ціна"
                    value={values.price}
                    keyboardType='numeric'
                    onChange={(e) => setValues({...values , price : e.nativeEvent.text})}
                />

                <DiagnosticText style={{marginBottom: 20 , marginTop: 20}}>
                    Дата :
                </DiagnosticText>                
                <RNDateTimePicker 
                    testID="dateTimePicker"
                    style={{ height: 100, width: '100%'} }
                    value={values.date || new Date()}
                    mode='date'
                    locale='ua-UA'  
                    is24Hour={true}
                    display="spinner"
                    onChange={(er , date) => setValues({...values , date })}
                />

                <DiagnosticText style={{marginBottom: 20 , marginTop: 20}}>
                    Час :
                </DiagnosticText>                
                <RNDateTimePicker 
                    testID="dateTimePicker"
                    style={{ height: 100, width: '100%' , marginBottom: 20 }}
                    value={values.time || new Date()}
                    mode='time'
                    locale='ua-UA'  
                    is24Hour={true}
                    display="spinner"
                    onChange={(err , time) => setValues({...values , time })}
                />


                <ButtonWrapper style={{marginBottom: 50}}>
                    <ButtonOpacity onPress={onPressSend}  >
                    <Foundation name="clipboard-pencil" size={30} color="white" />
                        <ButtonText>
                            Записати пацієнта
                        </ButtonText>
                    </ButtonOpacity>
                </ButtonWrapper>
            </AddFormWrapper>
        </ScrollView>
        
    )
}

const DiagnosticText = styled.Text`
    font-size: 25px;
    color: #a3a3a3;
    width: 90%;
    align-self: center;
    margin-left: 40px;
`;

const DateInputWrapper = styled.View`
    display : flex;
    flex-direction: row;
    justify-content: center;
`;

const ButtonText = styled.Text`
    font-size: 25px;
    font-weight: 700;
    color: white;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 10px;
`;

const ButtonOpacity = styled.TouchableOpacity`
    width: 100%;
    display: flex;
    justify-content: center ;
    align-items: center;
    flex-direction: row;
    background-color: #8ED78D;
    border-radius: 50px;
`;

const ButtonWrapper = styled.View`
    width: 90%; 
    display: flex;
    justify-content: center ;
    align-items: center;
`;

const AddFormInputName = styled.TextInput`
    width: 90%;
    font-size: 25px;
    border-bottom-width: 2px;
    border-bottom-color: #a3a3a3;
    padding: 10px 20px;
`;

const AddFormWrapper = styled.View`
    display : flex ;
    flex-direction : column ;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`;

AddAppointmentScreen.navigationOptions = {
    title : "Запис прийома", 
    headerTintColor: '#2a86ff' ,
    headerStyle:{
        elevation: 0.8 ,
        shadowOpacity : 0.8 
    } ,
    headerTitleStyle:{
        fontWeight: 'bold' ,
        fontSize: 23
    } ,
    headerTitleContainerStyle :{
        paddingBottom: 15
    }
}


export default AddAppointmentScreen;