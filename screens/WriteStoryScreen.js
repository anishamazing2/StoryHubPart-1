import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import * as Permissions from 'expo-permissions';


export default class WriteStoryScreen extends React.Component{

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={{textAlign: 'center', fontSize:30, backgroundColor: 'lightgreen'}}>StoryHub</Text>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputBox}
                    placeholder="Title of Story"/>
                
                </View>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.inputBox}
                    placeholder="Author of Story"/>
                
                </View>
                <TextInput
                    style={styles.storyBox}
                    placeholder="Write your story here"/>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'lightgreen'
    },
    inputView:{
        flexDirection:'row', 
        margin: 20
    },
    inputBox:{
        width:200,
        height:40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor:'white'
    },
    storyBox:{
        width:200,
        height:200,
        borderWidth:1.5,
        borderRightWidth: 1.5,
        fontSize: 20,
        backgroundColor:'white'
    }
});