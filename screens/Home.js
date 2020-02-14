import React from 'react';
import { Container, Header, Content, Button, Text, H1 } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

class Home extends React.Component{
    goToAbout() {
        this.props.navigation.push('About')
    }
    goToProfile() {
        this.props.navigation.push('Profile')
    }
    render(){
   
        return(
            <SafeAreaView>
                <Button block onPress={() => this.goToAbout()}>
                     <Text>About</Text>
                </Button>
                <Button block success onPress={() => this.goToProfile()}>
                     <Text>Profile</Text>
                </Button>
                
            </SafeAreaView>
        )
    }
}

export default Home