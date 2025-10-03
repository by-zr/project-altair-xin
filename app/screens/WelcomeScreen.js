import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
        
        <Text style={styles.text1}>xīn</Text>
        <Text style={styles.text2}>/' sin</Text>

        <Text style={styles.text3}>where the 
        <Text style={{fontWeight: 'bold'}}> heart</Text>
        </Text>
        <Text style={styles.text4}>meets the 
        <Text style={{fontWeight: 'bold'}}> soul</Text>
        </Text>
   
        <TouchableOpacity style={styles.loginButton}
                          onPress={() => navigation.navigate("LoginScreen") }>
            <Text style={styles.text5}>The Journey to Happiness Starts Here</Text>
        </TouchableOpacity>

        <Image resizeMode = 'contain'
               style={styles.image}
               source={require('/Users/yyuriaa/WEvolve/images/1.png')}
        />

        <Ionicons name ='ios-volume-medium'
                  size={30}
                  style={styles.icon} 
                  onPress={() => console.log("Pronunciation of xīn")}/>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f3ed',
        flex: 1,
        alignItems: 'center'

    },

    image: {
        width: 400,
        height: 400,
        bottom: -235
    },

    text1: {
        color: '#3b475e',
        fontSize: 60,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -150,  
        right: 110
    },

    text2: {
        color: '#3b475e',
        fontSize: 25,
        bottom: -150,
        right: 125,
        fontFamily:'ArialRoundedMTBold',
    },


    text3: {
        color: '#000000',
        fontSize: 26,
        bottom: -185,
        fontFamily: 'Arial',
        right: 65
    },

    text4: {
        color: '#000',
        fontSize: 26,
        bottom: -190,
        fontFamily: 'Arial',
        right: 70
    },

    text5: {
        color: '#fff',
        fontSize: 15.5,
        fontFamily:'ArialRoundedMTBold'
    },

    loginButton: {
        backgroundColor: '#032048',
        width: '82.5%',
        height: 65,
        padding: 10,
        borderRadius: 15,
        bottom: -225,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    icon: {
        top: -402,
        right: 70
    }
})

export default WelcomeScreen;
