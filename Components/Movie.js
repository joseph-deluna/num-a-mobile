import React from 'react'
import {Card, CardItem, Text} from 'native-base'


class Movie extends React.Component{
    render(){
        const { title } = this.props
        return(
            <Card>
             <CardItem>
                <Text>
                   { title }
                </Text> 
            </CardItem>

            </Card>
        )
    }
}

export default Movie