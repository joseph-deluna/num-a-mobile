import React from 'react'
import { SafeAreaView } from 'react-native'
import { H1, Container, Content, Header } from 'native-base'

class Profile extends React.Component {
    render() {
        return(
            <Container>
                {/* <Header /> */}
                <Content>
                    <H1>Profile Page</H1>
                </Content>
            </Container>
            // <SafeAreaView>
            // </SafeAreaView>
        )
    }
}

export default Profile
