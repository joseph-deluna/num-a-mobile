import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

class IconInput extends React.Component{
    render(){
        const { icon, placeholder } = this.props
        return(
            <View style={{flexDirection: 'row', position: 'relative'}}>
                <View style={{ position: 'absolute', height: '100%', width: 40, left: 10, flex: 1, alignItems: 'center', justifyContent: 'center', zIndex: 10}}>
                    { icon } 
                </View>
                <TextInput style={styles.input} placeholder={placeholder}>
                </TextInput> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 250,
        borderRadius: 20,
        borderColor: '#D9EF82',
        borderWidth: 2,
        padding: 10,
        margin: 10,
        backgroundColor: '#D9EF82',
        paddingLeft: 40,
    }
})
export default IconInput