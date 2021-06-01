import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View>
                <Text style={styles.container}> Read Story </Text>
             </View>
                
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:45,
        justifyContent:'center',
        alignItems:'center',
    }
})