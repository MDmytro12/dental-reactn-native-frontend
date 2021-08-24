import React , {useState , useRef } from 'react'
import styled from 'styled-components/native'
import { Foundation  } from '@expo/vector-icons'
import {ScrollView ,  Picker , ActivityIndicator } from 'react-native'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { appointmentApi } from '../utils/api';


const AddAppointmentScreen = ({navigation}) => {

    const [values , setValues] = useState({
        dentNumber : '1' ,    
        diagnostic : 'Видалення зуба',
        price : '1000',
        date : new Date()  ,
        time : new Date() ,
        patientId : navigation.getParam('patientId')
    })
    const [isLoading , setIsLoading] = useState(false)

    const onChangeValue = (key , value) => {
        setValues({...values , [key] : value})  
    } 
 
    const onPressSend = () => {
        setIsLoading(true)
        appointmentApi.add({
            price : values.price ,
            date : new Intl.DateTimeFormat('ua-UA' , {year: 'numeric' , month: 'numeric' , day: 'numeric' , hour12: false }).format(values.date).split('.').reverse().join('-') ,
            time : new Intl.DateTimeFormat('ua-UA' , {hour: 'numeric' , minute: 'numeric' , hour12: false}).format(values.time) ,
            diagnostic: values.diagnostic ,
            dentNumber : values.dentNumber ,
            patientId: values.patientId
        }).then( res => {
            setIsLoading(false)
            navigation.navigate('Home')
        } )
          .catch(err => alert("Ви не змогли добавити прийом!Перевірте правильність введення даних!"))
          .finally(() => setIsLoading(false))
    }
 
    return (
        <ScrollView>
            <AddFormWrapper>
                <AddFormInputName
                    style={{marginBottom: 20}}
                    placeholder="Номер зуба"
                    value={values.dentNumber.toString()}
                    keyboardType='numeric'
                    onChange={ (e) => onChangeValue('dentNumber' , e.nativeEvent.text)}
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
                    is24Hour={true}
                    display="spinner"
                    onChange={(er , date) => setValues({...values , date : date })}
                />

                <DiagnosticText style={{marginBottom: 20 , marginTop: 20}}>
                    Час :
                </DiagnosticText>                
                <RNDateTimePicker 
                    testID="dateTimePicker"
                    style={{ height: 100, width: '100%' , marginBottom: 20 }}
                    value={values.time || new Date()}
                    mode='time' 
                    is24Hour={true}
                    fomrmat
                    display="spinner"
                    onChange={(err , time) => setValues({...values , time : time })}
                />

                {
                    isLoading ? <ActivityIndicator size='large' color="#2a86ff" /> :
                    <ButtonWrapper style={{marginBottom: 50}}>
                    <ButtonOpacity onPress={onPressSend}  >
                        <Foundation name="clipboard-pencil" size={30} color="white" />
                            <ButtonText>
                                Записати пацієнта
                            </ButtonText>
                        </ButtonOpacity>
                    </ButtonWrapper>
                }
                
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