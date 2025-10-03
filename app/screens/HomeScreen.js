import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TextInput, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
                
        <Text style={styles.text1}>Good Morning, </Text>
        <Text style={styles.text2}>How are you feeling today?</Text>

        <View style={styles.moodMeter}>
        <Image resizeMode = 'contain'
               style={styles.image}
               source={require('/Users/yyuriaa/WEvolve/images/mood.png')}
        />
        </View>

        <Text style={styles.text3}>Thoughts of the day</Text>
        <Text style={styles.text4}>View All</Text>


        <Image resizeMode = 'contain'
               style={styles.image2}
               source={require('/Users/yyuriaa/WEvolve/images/home.png')}
        />

        <TouchableOpacity style={styles.emailButton}
                          onPress={() => navigation.navigate("PostScreen") }>
            <Text style={styles.text5}>Create a Post</Text>
        </TouchableOpacity>

        <Text style={styles.text6}>Recommended for you</Text>
        <Text style={styles.text7}>View all</Text>


        <Image resizeMode = 'contain'
               style={styles.image3}
               source={require('/Users/yyuriaa/WEvolve/images/podcast.png')}
        />


        <Ionicons name ='search'
                        size={30}
                        style={styles.icon1} 
                        onPress={() => navigation.navigate("KnowAboutScreen")}/>
        
        <Ionicons name ='call'
                        size={30}
                        style={styles.icon2} 
                        onPress={() => navigation.navigate("KnowAboutScreen")}/>

        <Ionicons name ='notifications'
                                size={30}
                                style={styles.icon3} 
                                onPress={() => navigation.navigate("KnowAboutScreen")}/>

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

    <Entypo name ='pencil'
                                    size={30}
                                    style={styles.icon9} 
                                    onPress={() => navigation.navigate("PostScreen")}/>

 
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
        right: 70
    },

    text2: {
        color: '#3b475e',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -120,  
        right: 0
    },

    text3: {
        color: '#3b475e',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -160,  
        right: 70
    },

    text4: {
        color: '#FD6D4C',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -135,  
        right: -125
    },

    text5: {
        color: '#032048',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        right: 20

    },

    text6: {
        color: '#3b475e',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: 50,  
        right: 60
    },

    text7: {
        color: '#FD6D4C',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: 75,  
        right: -125
    },


    
    moodMeter: {
        backgroundColor: '#f8f3ed',
        width: '82.5%',
        height: 100,
        padding: 10,
        borderRadius: 15,
        bottom: -140,
        justifyContent: 'center',
        alignItems: 'center'
  
  
    },

    emailButton: {
        backgroundColor: '#f8f3ed',
        width: '82.5%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        bottom: 75,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    icon1: {
        top: -1030,
        right: -70,
    },

    icon2: {
        top: -1063,
        right: -108,
    },

    icon3: {
        top: -1095,
        right: -150,
    },

    image: {
        width: 300,
        height: 400,
    },

    image2: {
        width: 300,
        height: 400,
        bottom: -30
    },

    image3: {
        width: 350,
        height: 400,
        bottom: 200
    },

    icon4: {
        top: -415,
        right: 145,
    },

    icon5: {
        top: -445,
        right: 75,
    },

    icon6: {
        top: -475,
        right: 0,
    },

    icon7: {
        top: -505,
        right: -75,
    },

    icon8: {
        top: -535,
        right: -145,
    },

    icon9: {
        top: -812,
        right: -70,
    },





    
})

export default HomeScreen;
