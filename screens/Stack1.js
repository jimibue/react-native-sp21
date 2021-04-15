import React from 'react'
import { View, Text, Button } from 'react-native';

const Stack1 = ({navigation})=>{
    return(
        <View>
            <Text>Stack1 SCREEN</Text>
            <Button title='Stack 2' onPress={()=> navigation.push('Stack2')} />
        </View>
    )
}

export default Stack1