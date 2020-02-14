import React from 'react';
import { Container, Header, Content, Button, Text, H1 } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

class Profile extends React.Component{
    goToHome(){
        this.props.navigation.push('Home')
    }
    goToAbout(){
        this.props.navigation.push('About')
    }
    render(){
        return(
            <SafeAreaView>
                <Button block onPress={() => this.goToHome()}>
                     <Text>Home</Text>
                </Button>
                <Button block success onPress={() => this.goToAbout()}>
                     <Text>About</Text>
                </Button>
            </SafeAreaView>
        )
    }
}

export default Profile