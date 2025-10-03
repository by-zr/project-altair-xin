import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons} from '@expo/vector-icons';


function CommunityScreen({navigation}) {
    return (
        <View style={styles.container}>
        
        <Text style={styles.text1}>Timeline</Text>
        <Text style={styles.text2}>Message</Text>

        <View style={styles.background}>
        <TextInput autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='email-address'
                      placeholder="What's on your mind today?"
                      textContentType='emailAddress'
                      style={styles.text3}
            />
        </View>
        <Feather name ='plus-circle'
                  size={30}
                  style={styles.icon2} 
                  onPress={() => navigation.navigate("PostScreen")}/>

    <Text style={styles.text4}>Recent Posts</Text>

    <View style={styles.background2}>
    <Text style={styles.text6}>Today is Project Altair's Gala Night</Text>
    <Text style={styles.text5}>#0001 | Posted 1 min ago</Text>
    </View>

    <MaterialCommunityIcons name ='comment-multiple-outline'
                  size={30}
                  style={styles.icon3} 
                  onPress={() => navigation.navigate("PostScreen")}/>


       

     
        

        <Ionicons name ='chevron-back-circle-outline'
                  size={30}
                  style={styles.icon} 
                  onPress={() => navigation.navigate("HomeScreen")}/>

        <Ionicons name ='home'
                        size={30}
                        style={styles.icon4} 
                        onPress={() => navigation.navigate("WelcomeScreen")}/>
        
        <FontAwesome name ='heartbeat'
                                size={30}
                                style={styles.icon5} 
                                onPress={() => navigation.navigate("KnowAboutScreen")}/>
        
        <FontAwesome name ='podcast'
                                size={30}
                                style={styles.icon6} 
                                onPress={() => navigation.navigate("KnowAboutScreen")}/>
        
        <Entypo name ='message'
                                size={30}
                                style={styles.icon7} 
                                onPress={() => navigation.navigate("KnowAboutScreen")}/>
        
        <FontAwesome5 name ='book'
                                size={30}
                                style={styles.icon8} 
                                onPress={() => navigation.navigate("KnowAboutScreen")}/>


 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'

    },


    text1: {
        color: '#3b475e',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -120,  
        right: 90,
        textDecorationLine: 'underline'

    },

    text2: {
        color: '#3b475e',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -90,  
        right: -90,
        
    },

    text3: {
        color: '#3b475e',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        right: 15
    },

    text4: {
        color: '#3b475e',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -100,  
        right: 70,
    },

    text5: {
        color: '#c3c3c3',
        fontSize: 13,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -10,
        right: 55
    },

    text6: {
        color: '#3b475e',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: 10,
        right: 10
    },

    background: {
        backgroundColor: '#fafafa',
        width: '80%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
  
        bottom: -110,
        borderRadius: 15

    },

    background2: {
        backgroundColor: '#fafafa',
        width: '80%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
  
        bottom: -120,
        borderRadius: 15

    },

    facebookButton: {
        backgroundColor: '#fff',
        width: '70%',
        height: 135,
        padding: 10,
        borderRadius: 15,  
        bottom: 20
    },

    emailButton: {
        backgroundColor: '#FD6D4C',
        width: '55.5%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        bottom: 290,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    icon: {
        bottom: 1030,
        right: 155
   
    },

    icon4: {
        top: 440,
        right: 145,
    },


    icon5: {
        top: 410,
        right: 75,
    },

    icon6: {
        top: 380,
        right: 0,
    },

    icon7: {
        top: 350,
        right: -75,
    },

    icon8: {
        top: 320,
        right: -145,
    },

    icon2: {
        top: 55,
        right: -125,
    },

    icon3: {
        top: 80,
        right: -125,
    },
    
})

export default CommunityScreen;
