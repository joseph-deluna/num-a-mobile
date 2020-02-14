import React from 'react'
import { Text, Container, Header, Left, Button, Icon, Content, Item, View } from 'native-base'
import { StyleSheet, Image } from 'react-native'


class FarmerHome extends React.Component {
    render(){
        return(
            <Container>
                <View style={{alignItems: 'center', marginTop: 20}}>
                    <View style= {styles.circle} />
                    <Text>Farmer Name</Text>
                </View>
                <View style = {{marginTop: 40, alignItems: 'center'}}>
                    <Image source = {require('./numaLogo.png')} style={styles.image}/>
                </View>
                <View style = {{flexDirection: 'row', marginTop: 15, justifyContent: 'center'}}>
                    <Button primary style = {styles.button}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image source = {require('./analysis.png')} style={styles.imageButton}>
                            </Image>
                            <Text style = {styles.text}>Analysis</Text>
                        </View>
                    </Button>
                    <Button primary style = {styles.button}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image source = {require('./farm.png')} style={styles.imageButton}>
                            </Image>
                            <Text style = {styles.text}>Farm</Text>
                        </View>
                    </Button>
                </View>
                <View style = {{flexDirection: 'row', marginTop: 10, justifyContent: 'center'}}>
                    <Button primary style = {styles.button}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image source = {require('./market.png')} style={styles.imageButton}>
                            </Image>
                            <Text style = {styles.text}>Market</Text>
                        </View>
                    </Button>
                    <Button primary style = {styles.button}>
                        <View style={{justifyContent: 'center', alignItems: 'center'}}>
                            <Image source = {require('./activities.png')} style={styles.imageButton}>
                            </Image>
                            <Text style = {styles.text}>Transactions</Text>
                        </View>
                    </Button>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#D9EF82',
        width: 170,
        height: 100,
        padding: 20,
        margin: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
        textAlignVertical: 'center',
        shadowColor: '#C3DB5B',
      
        
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontFamily: "Helvetica",
    },
    image: {
        width: 30,
        height: 30,
    },
    circle: {
        width: 90,
        height: 90,
        borderRadius: 100/2,
        backgroundColor: '#C3DB5B',
    },
    imageButton: {
        width: 35,
        height: 35
    },
 

})

export default FarmerHome
