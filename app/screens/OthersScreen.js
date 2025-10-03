import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function OthersScreen({navigation}) {
    return (
        <View style={styles.container}>
        
        <Text style={styles.text1}>Others </Text>

        <View style={styles.facebookButton}>
            <TextInput autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='email-address'
                      placeholder="What's on your mind?"
                      textContentType='emailAddress'
                      style={styles.text2}
            />
        </View>

        <TouchableOpacity style={styles.emailButton}
                          onPress={() => navigation.navigate("HomeScreen") }>
            <Text style={styles.text3}>Continue</Text>
        </TouchableOpacity>

        <Ionicons name ='chevron-back-circle-outline'
                  size={30}
                  style={styles.icon} 
                  onPress={() => navigation.navigate("KnowAboutScreen")}/>

 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f3ed',
        flex: 1,
        alignItems: 'center'

    },


    text1: {
        color: '#3b475e',
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -180,  
        right: 100
    },

    text2: {
        color: '#a5a5a5',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
    },

    text3: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Arial',
    },

    facebookButton: {
        backgroundColor: '#fff',
        width: '82.5%',
        height: 255,
        padding: 10,
        borderRadius: 15,
        bottom: -225,
  
    },

    emailButton: {
        backgroundColor: '#032048',
        width: '82.5%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        bottom: -260,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    icon: {
        top: -285,
        right: 160,
    }

    
})

export default OthersScreen;
