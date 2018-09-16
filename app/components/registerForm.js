import React from 'react';
import {
    StyleSheet, 
    Text,
    Image,
    TextInput, 
    View,
    TouchableWithoutFeedback,
} from 'react-native';
import { Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';

class RegisterForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: "Fecha de nacimiento",
            errorEmail: "",
            toggle: false
        };        
    }
    onChanged (text) {
        this.setState({
            mobile: text.replace(/[^0-9]/g, ''),
        });
    }
    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(reg.test(text) === false)
        {
        
        this.setState({errorEmail:"Email incorrecto"});
        console.log("Email is Not Correct");
        this.setState({email:text})
        return false;
          }
        else {
          this.setState({email:text})
          this.setState({errorEmail:""})
        }
    }
    state = {
        isDateTimePickerVisible: false,
        selectedDate: "Fecha de nacimiento",
        toggle: false
      };
    
      _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    
      _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
      _handleDatePicked = (date) => {

        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, 0);
        const day = `${date.getDate()}`.padStart(2, 0);        
        const stringDate = [day, month, year].join("/");

        this.setState({ 
            toggle: true,
            selectedDate: stringDate,
        });
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
      };

  render() {  
    const { isDateTimePickerVisible, selectedDate } = this.state;
    return (
      <View style={styles.RegisterForm}>

        <Text style={styles.header}>Registro de Candidato</Text>      

        <TextInput style={styles.textInput} 
            placeholder="Nombre completo" 
            underlineColorAndroid={'transparent'}
        />

        <TextInput style={styles.textInput} 
            placeholder="Cédula" 
            keyboardType='numeric'
            onChangeText={(text)=> this.onChanged(text)}
            value={this.state.mobile}
            underlineColorAndroid={'transparent'}
        />

        <TouchableWithoutFeedback onPress={this._showDateTimePicker}>
            <Text style={[styles.textDate, this.state.toggle && styles.textDate2]} >
                {this.state.selectedDate}
            </Text>
        </TouchableWithoutFeedback>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />

        <View style={styles.inputForm}>
            <TextInput style={styles.textInput} 
                placeholder="Correo electrónico" 
                underlineColorAndroid={'transparent'}
                onChangeText={(text) => this.validate(text)}
                value={this.state.email}
            />
            <Text style={styles.error}>{this.state.errorEmail}</Text>
        </View>

        <TextInput style={styles.textInput} 
            placeholder="Usuario Github" 
            underlineColorAndroid={'transparent'}
        />

        <Button
        title="Guardar"
        icon={{name: 'save', type: 'font-awesome'}}
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 200,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 10
        }}
        containerStyle={{ marginTop: 20 }}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
    RegisterForm: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1
    },
    inputForm:{
        position: 'relative',
    },
    textInput:{
        alignSelf:'stretch',
        height: 40,
        marginBottom: 25,
        color: '#000',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        borderRadius: 10
    },
    textDate:{
        alignSelf:'stretch',
        height: 40,
        marginBottom: 25,
        paddingTop: 10,
        paddingLeft: 5,
        color: 'rgba(0, 0, 0, .4)',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        borderRadius: 10,
    },
    textDate2:{
        alignSelf:'stretch',
        height: 40,
        marginBottom: 25,
        paddingTop: 10,
        paddingLeft: 5,
        color: 'rgba(0, 0, 0, 1)',
        backgroundColor: 'rgba(255, 255, 255, .8)',
        borderRadius: 10,
    },
    error:{
        marginTop:40,
        marginLeft:5,
        position:"absolute",
        alignSelf:'stretch',
        color:'red',
    }

});

export default RegisterForm;