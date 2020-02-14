import React from 'react'
import { H1, Button, Text } from 'native-base'
import { SafeAreaView, View } from 'react-native'

class About extends React.Component{
    navigate(screenName){
        this.props.navigation.push(screenName)
    }
    render(){
        return(
            
            <SafeAreaView>
                <View style= {{ alignments: 'flex-start'}}>            
                    <Button 
                    onPress= {() => this.navigate('Profile')} block> 
                        <Text>Profile </Text>
                    </Button>
                    <Button 
                    onPress= {() => this.navigate('Home')} block> 
                        <Text>Home </Text>
                    </Button>

                </View>
                    
            </SafeAreaView>
           
        )
    }
}
export default About