import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { H1, Button, Text, Container, Content, Body } from 'native-base'

class Home extends React.Component {
    navigate() {
        this.props.navigation(screenName)
    }

    render() {
        return(
            <SafeAreaView>
                <View style={{ alignItems: 'flex-start'}}>
                    <H1>Home Page</H1>
                    <Button
                        onPress={() => this.navigate('Home')}
                        block
                    >
                        <Text>ABOUT</Text>
                    </Button>
                </View>
            </SafeAreaView>
            // <SafeAreaView>
            // </SafeAreaView>
        )
    }
}

export default Home
