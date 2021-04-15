import React from 'react'
import { View, Text, Button } from 'react-native';

const Stack2 = ({navigation})=>{
    return(
        <View>
            <Text>Stack2 SCREEN</Text>
            <Button title='Stack 1' onPress={()=> navigation.pop()} />
        </View>
    )
}

export default Stack2