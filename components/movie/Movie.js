import React from 'react'
import { Card, CardItem, Text } from 'native-base'
import { Image } from 'react-native'

class Movie extends React.Component {
    render() {
        const { title, poster_path } = this.props
        console.log(poster_path)
        return (
            <Card>
                <CardItem>
                    <Text>{ title }</Text>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: `http://image.tmdb.org/t/p/w342/${poster_path}`}} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
            </Card>
        )
    }
}

export default Movie
