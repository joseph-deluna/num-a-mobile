import React from 'react'
import { H1, Button, Text } from 'native-base'
import { SafeAreaView,View } from 'react-native'
class Profile extends React.Component{
    navigate(screenName){
        this.props.navigation.push(screenName)
    }
    render(){
        return(
            
            <SafeAreaView>
                <View style= {{ alignments: 'flex-start'}}>
                
                    
                    <Button 
                    onPress= {() => this.navigate('Home')} block> 
                        <Text>Home </Text>
                    </Button>

                    <Button 
                    onPress= {() => this.navigate('About')} block> 
                        <Text>About </Text>
                    </Button>

                </View>
                    
            </SafeAreaView>
           
        )
    }
}
export default Profile