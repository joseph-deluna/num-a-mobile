import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, Header, Content, Button, Text, H1, Icon} from 'native-base';

class About extends React.Component{
    goToHome() {
        this.props.navigation.push('Home')
    }
    goToProfile() {
        this.props.navigation.push('Profile')
    }
    render(){
        return(
            <SafeAreaView>
                <Button block onPress={() => this.goToHome()}>
                     <Text>Home</Text>
                </Button>
                <Button block success onPress={() => this.goToProfile()}>
                     <Text>Profile</Text>
                </Button>
                
            </SafeAreaView>
        )
    }
}

export default About