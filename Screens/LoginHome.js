import React from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import { Container, View, Button } from 'native-base'

class LoginHome extends React.Component{
    render(){
        return(
            <Container>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <View name='Image Logo' style={{marginTop: 60}}>
                        <Image source= {require('./logo.png')} style={style.img}>
                        </Image>
                    </View>
                    <View name='Login As' style={{marginTop: 30}}>
                        <Text style={style.text}>LOG IN AS:</Text>
                    </View>
                    <View name='Buttons' style={{marginTop: 10}}>
                        <View>
                            <Button rounded style={style.btn}>
                            <Text style={style.btnTxt}>FARMER</Text>
                            </Button>
                        </View>

                        <View style={{marginTop: 25}}>
                            <Button rounded style={style.btn}>
                            <Text style={style.btnTxt}>BUYER</Text>
                            </Button>
                        </View>
                    </View>
                    <Text>
                    <Text numberOfLines={1}>               
                        ________________________________________________
                    </Text>
                    </Text>
                    <View>
                         <Button transparent light style={{marginTop: 25}}>
                            <Text style= {style.create} >Create an Account?</Text>
                         </Button>
                    </View>

                    
                </View>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    img: {
        width: 200,
        height: 200.
    },
    text: {
        fontSize: 20,
    },
    btn: {
        backgroundColor: '#D9EF82',
        width: 250,
        height: 60,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnTxt: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    create:{
        fontSize: 15
    },
})

export default LoginHome