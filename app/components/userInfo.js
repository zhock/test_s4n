import React from 'react';
import {
    Component,
    StyleSheet, 
    Text,
    TextInput, 
    View,
    TouchableOpacity,
} from 'react-native';

class userInfo extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Información del repositorio</Text>
            </View>
        )
    }
}

const  styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    title:{
        fontSize: 25
    }

});

export default userInfo;