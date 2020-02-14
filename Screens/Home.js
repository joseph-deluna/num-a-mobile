import React from 'react'
import { H1, Button, Container, Text } from 'native-base'
import { SafeAreaView, View} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


class Home extends React.Component{
    navigate(screenName){
        this.props.navigation.push(screenName)
    }
    
    render(){
       
        return(
            <SafeAreaView>
                <View style= {{ alignments: 'flex-start'}}>
            
                    <Button 
                    onPress= {() => this.navigate('About')} block> 
                        <Text>About</Text>
                    </Button>
                    <Button 
                    onPress= {() => this.navigate('Profile')} block> 
                        <Text>Profile </Text>
                    </Button>
                    <Button 
                    onPress= {() => this.navigate('Movies')} block> 
                        <Text>Movies </Text>
                    </Button>
                  

                </View>
                    
            </SafeAreaView>
       
        )
    }
}
export default Home