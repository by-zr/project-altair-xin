import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function SignUpScreen({navigation}) {
    return (
        <View style={styles.container}>
        
        <Text style={styles.text1}>Welcome back to xīn</Text>
        
   
        <TouchableOpacity style={styles.facebookButton}
                          onPress={() => navigation.navigate("LoginScreen") }>
            <Text style={styles.text2}>   
            <MaterialCommunityIcons name ='facebook'
                  size={18}
                  style={styles.icon} />  Sign up with Facebook</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.googleButton}
                          onPress={() => navigation.navigate("LoginScreen") }>
            <Text style={styles.text2}>   
            <MaterialCommunityIcons name ='google'
                  size={18}
                  style={styles.icon} />  Sign up with Google</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.appleButton}
                          onPress={() => navigation.navigate("LoginScreen") }>
            <Text style={styles.text2}>   
            <MaterialCommunityIcons name ='apple'
                  size={18}
                  style={styles.icon} />  Sign up with Apple</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.emailButton}
                          onPress={() => navigation.navigate("EmailSignUpScreen") }>
            <Text style={styles.text2}>   
            <MaterialCommunityIcons name ='email'
                  size={18}
                  style={styles.icon} />  Sign up with Email</Text>
        </TouchableOpacity>

        <Text style={styles.text3}>Have an account?
        <Text style={styles.text4} 
        onPress={() => navigation.navigate("LoginScreen")}> Login.</Text> 
        </Text>

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
        color: '#3b475e',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
    },

    text3: {
        color: '#e5e5e5',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Arial',
        bottom: -270
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
        backgroundColor: '#fff',
        width: '82.5%',
        height: 65,
        padding: 10,
        borderRadius: 15,
        bottom: -255,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    icon: {
        right: 70,
    }

    
})

export default SignUpScreen;
