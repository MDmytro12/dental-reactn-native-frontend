import React , {useState} from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import { patientApi } from '../utils/api'

const AddPatientScreen = ({navigation}) => {

    const [values , setValues] = useState({
        fullname : '',
        phone : ''
    })

    const onChangeHandlerName = (e) => {
        setValues({
            ...values , 
            fullname : e.nativeEvent.text
        })          
        
    }

    const onChangeHandlerPhone = (e) => {
        setValues({
            ...values ,
            phone: e.nativeEvent.text
        })
    }

    const onPressSend = () => {
        patientApi.post(values)
                  .then( res => alert('Пацієнта було успішно записано!') )
                  .catch( e => alert('У вас не вийшло записти') ) 
        
        setValues({
            fullname : '' ,
            phone : ''
        })
        navigation.navigate.bind(this  , 'Home')
    }

    return (
        <AddFormWrapper>
            <AddFormInputName
                placeholder="Ім'я та фамілія пацієнта"
                autoFocus
                value={values.fullname}
                onChange={onChangeHandlerName}
            />
            <AddFormInputPhone 
                dataDetectorTypes='phoneNumber'
                keyboardType='phone-pad'
                placeholder='Номер телефону пацієнта'
                value={values.phone}
                onChange={onChangeHandlerPhone}
            />
            <ButtonWrapper >
                <ButtonOpacity onPress={onPressSend}  >
                    <AntDesign name="adduser" size={30} color="white" />
                    <ButtonText>
                        Записати пацієнта
                    </ButtonText>
                </ButtonOpacity>
            </ButtonWrapper>
        </AddFormWrapper>
    )
}

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

const AddFormInputPhone = styled.TextInput`
    width: 90%;
    font-size: 25px;
    border-bottom-width: 2px;
    border-bottom-color: #a3a3a3;
    padding: 10px 20px;
    margin-bottom: 30px;
`;

const AddFormInputName = styled.TextInput`
    width: 90%;
    font-size: 25px;
    border-bottom-width: 2px;
    border-bottom-color: #a3a3a3;
    margin-bottom: 30px;
    padding: 10px 20px;
`;

const AddFormWrapper = styled.View`
    display : flex ;
    flex-direction : column ;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`;

AddPatientScreen.navigationOptions = {
    title : "Запис пацієнта", 
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

export default AddPatientScreen;