import React from 'react'
import { Text, View, Container, Item, Input, Button } from 'native-base'
import { Image, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo';

class Login extends React.Component{
    render(){
        return(
            <Container>
             <View style={{justifyContent:'center', alignItems:'center', flex: 1}}> 
                <View>
                    <Image source = {require('./numaLogo.png')} style={styles.logo}> 
                    </Image>
                </View>
                <View style={{marginTop: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput style={styles.input} placeholder='Username'>
                        </TextInput>
                        <Icon name="user" ></Icon>
                    </View>
                        <TextInput style={styles.input} placeholder='Password'>
                        </TextInput>
                </View>
                <View style={{marginTop: 40}}>
                    <Button rounded style={styles.btn}>
                        <Text style={styles.text}>LOGIN</Text>
                    </Button>
                </View>
             </View> 
            </Container>
           
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
    },
    input: {
        height: 50,
        width: 250,
        borderRadius: 20,
        borderColor: '#D9EF82',
        borderWidth: 2,
        padding: 10,
        margin: 10,
        backgroundColor: '#D9EF82',
        
    },
    btn: {
        backgroundColor: '#C3DB5B',
        height: 50,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#D9EF82'
    },
    text: {
        fontWeight: 'bold',
        fontFamily: 'Velvetica',
        color: 'black'
        
    },
    btnIcon: {
        width: 10,
        height: 10
    }
})

export default Login