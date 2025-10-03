import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function EmailSignUpScreen({navigation}) {
    return (
        <View style={styles.container}>
        
        <Text style={styles.text1}>Sign up with Email</Text>

        <View style={styles.facebookButton}
                          onPress={() => navigation.navigate("WelcomeScreen") }>
            <TextInput autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='email-address'
                      placeholder='Enter your email'
                      textContentType='emailAddress'
                      style={styles.text2}
            />
        </View>


        <View style={styles.googleButton}
                          onPress={() => navigation.navigate("WelcomeScreen") }>
            <TextInput autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='email-address'
                      placeholder='Enter password'
                      textContentType='emailAddress'
                      style={styles.text2}
            />
        </View>


        <View style={styles.appleButton}
                          onPress={() => navigation.navigate("WelcomeScreen") }>
            <TextInput autoCapitalize='none'
                       autoCorrect={false}
                       keyboardType='email-address'
                       placeholder='Confirm password'
                       textContentType='emailAddress'
                       style={styles.text2}
            />
        </View>


        <TouchableOpacity style={styles.emailButton}
                          onPress={() => navigation.navigate("KnowAboutScreen") }>
            <Text style={styles.text3}>Create an account</Text>
        </TouchableOpacity>

        <Ionicons name ='chevron-back-circle-outline'
                  size={30}
                  style={styles.icon} 
                  onPress={() => navigation.navigate("SignUpScreen")}/>

 
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

    text4: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        bottom: -270,
        fontStyle: 'italic'
    },

    facebookButton: {
        backgroundColor: '#fff',
        width: '82.5%',
        height: 65,
        padding: 10,
        borderRadius: 15,
        bottom: -225,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    googleButton: {
        backgroundColor: '#fff',
        width: '82.5%',
        height: 65,
        padding: 10,
        borderRadius: 15,
        bottom: -235,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    appleButton: {
        backgroundColor: '#fff',
        width: '82.5%',
        height: 65,
        padding: 10,
        borderRadius: 15,
        bottom: -245,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    emailButton: {
        backgroundColor: '#032048',
        width: '82.5%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        bottom: -280,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    icon: {
        top: -235,
        right: 160,
    }

    
})

export default EmailSignUpScreen;
