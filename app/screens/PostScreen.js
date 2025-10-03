import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function PostScreen({navigation}) {
    return (
        <View style={styles.container}>
        
        <Text style={styles.text1}>Everything will be okay</Text>
        <Text style={styles.text2}>You're not going through this alone</Text>

        <View style={styles.background}>
        <Text style={styles.text3}>What's on your mind today?</Text>
        </View>

        <Image resizeMode = 'contain'
               style={styles.image}
               source={require('/Users/yyuriaa/WEvolve/images/post.png')}
        />

        <View style={styles.facebookButton}
                          onPress={() => navigation.navigate("WelcomeScreen") }>
            <TextInput autoCapitalize='none'
                      autoCorrect={false}
                      keyboardType='email-address'
                      placeholder="No more than 80 words."
                      textContentType='emailAddress'
                      style={styles.text4}
            />
            
        </View>

        <TouchableOpacity style={styles.emailButton}
                          onPress={() => navigation.navigate("CommunityScreen") }>
            <Text style={styles.text5}>Publish Now</Text>
        </TouchableOpacity>

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
                                onPress={() => navigation.navigate("CommunityScreen")}/>
        
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
        bottom: -180,  
        right: 30
    },

    text2: {
        color: '#3b475e',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -190,
        right: 18
    },

    text3: {
        color: '#3b475e',
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: 200

    },

    text4: {
        color: '#3b475e',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: 0,
        right: 0
    },

    text5: {
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: 0,
        right: 0
    },

    background: {
        backgroundColor: '#fafafa',
        width: '80%',
        height: 450,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -210

    },

    facebookButton: {
        backgroundColor: '#fff',
        width: '70%',
        height: 135,
        padding: 10,
        borderRadius: 15,  
        bottom: 400
    },

    emailButton: {
        backgroundColor: '#FD6D4C',
        width: '55.5%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        bottom: 390,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    icon: {
        bottom: 1030,
        right: 155
   
    },

    image: {
        width: 250,
        height: 400,
        bottom: 300
    },


    icon4: {
        top: -340,
        right: 145,
    },


    icon5: {
        top: -370,
        right: 75,
    },

    icon6: {
        top: -400,
        right: 0,
    },

    icon7: {
        top: -430,
        right: -75,
    },

    icon8: {
        top: -460,
        right: -145,
    },

})

export default PostScreen;
