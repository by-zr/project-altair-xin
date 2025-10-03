import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable, TextInput, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


function KnowAboutScreen({navigation}) {

    return (
        <View style={styles.container}>
        
        <Text style={styles.text1}>I want to know about ...</Text>

        <TouchableOpacity style={styles.rowOneOne}
                          onPress={() => console.log("Personality Selected") }>
                  <Text style={styles.text2}>Personality</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowOneTwo}
                          onPress={() => console.log("Relationships Selected") }>
                  <Text style={styles.text2}>Relationships</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowOneThree}
                          onPress={() => console.log("Anger Selected") }>
                  <Text style={styles.text2}>Anger</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowTwoOne}
                          onPress={() => console.log("Jealousy Selected") }>
                  <Text style={styles.text2}>Jealousy</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowTwoTwo}
                          onPress={() => console.log("Uncertainty Selected") }>
                  <Text style={styles.text2}>Uncertainty</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowTwoThree}
                          onPress={() => console.log("Depression Selected") }>
                  <Text style={styles.text2}>Depression</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowThreeOne}
                          onPress={() => console.log("Productivity Selected") }>
                  <Text style={styles.text2}>Productivity</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowThreeTwo}
                          onPress={() => console.log("Guilt Selected") }>
                  <Text style={styles.text2}>Guilt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowThreeThree}
                          onPress={() => console.log("Friendship Selected") }>
                  <Text style={styles.text2}>Friendship</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowFourOne}
                          onPress={() => console.log("Boredom Selected") }>
                  <Text style={styles.text2}>Boredom</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowFourTwo}
                          onPress={() => console.log("Happiness Selected") }>
                  <Text style={styles.text2}>Happiness</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowFourThree}
                          onPress={() => console.log("Overeating Selected") }>
                  <Text style={styles.text2}>Overeating</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowFiveOne}
                          onPress={() => console.log("Love Selected") }>
                  <Text style={styles.text2}>Love</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowFiveTwo}
                          onPress={() => console.log("Confidence Selected") }>
                  <Text style={styles.text2}>Confidence</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowFiveThree}
                          onPress={() => console.log("Procrastination Selected") }>
                  <Text style={styles.text2}>Procrastination</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowSixOne}
                          onPress={() => console.log("Mood Disorders Selected") }>
                  <Text style={styles.text2}>Mood Disorders</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowSixTwo}
                          onPress={() => console.log("Anxiety & Fear Selected") }>
                  <Text style={styles.text2}>Anxiety & Fear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowSevenOne}
                          onPress={() => console.log("Childhood Issues Selected") }>
                  <Text style={styles.text2}>Childhood Issues</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowSevenTwo}
                          onPress={() => console.log("Bereavement Selected") }>
                  <Text style={styles.text2}>Bereavement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowEightOne}
                          onPress={() => console.log("Personal Development Selected") }>
                  <Text style={styles.text2}>Personal Development</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowEightTwo}
                          onPress={() => console.log("Chronic Pain Selected") }>
                  <Text style={styles.text2}>Chronic Pain</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.others}
                          onPress={() => console.log("Others Selected")}> 
                  <Text style={styles.text4}>Others</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.emailButton}
                          onPress={() => navigation.navigate("OthersScreen") }>
            <Text style={styles.text3}>Continue</Text>
        </TouchableOpacity>

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
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
        bottom: -80,  
        right: 30
    },

    text2: {
        color: '#0A2D5D',
        fontSize: 16.5,
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
        color: '#fff',
        fontSize: 16.5,
        fontWeight: 'bold',
        fontFamily: 'ArialRoundedMTBold',
    },

    rowOneOne: {
        backgroundColor: '#fff',
        width: '30%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: -115,
        right: 120,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowOneTwo: {
        backgroundColor: '#fff',
        width: '35%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: -70,
        right: -15,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowOneThree: {
        backgroundColor: '#fff',
        width: '20%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: -25,
        right: -130,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowTwoOne: {
        backgroundColor: '#fff',
        width: '25%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: -35,
        right: 130,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowTwoTwo: {
        backgroundColor: '#fff',
        width: '30%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 10,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowTwoThree: {
        backgroundColor: '#fff',
        width: '30%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 55,
        right: -110,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowThreeOne: {
        backgroundColor: '#fff',
        width: '35%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 45,
        right: 110,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowThreeTwo: {
        backgroundColor: '#fff',
        width: '20%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 90,
        right: -5,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowThreeThree: {
        backgroundColor: '#fff',
        width: '30%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 135,
        right: -110,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowFourOne: {
        backgroundColor: '#fff',
        width: '25%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 125,
        right: 130,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowFourTwo: {
        backgroundColor: '#fff',
        width: '30%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 170,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowFourThree: {
        backgroundColor: '#fff',
        width: '30%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 215,
        right: -110,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowFiveOne: {
        backgroundColor: '#fff',
        width: '15%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 205,
        right: 150,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowFiveTwo: {
        backgroundColor: '#fff',
        width: '30%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 250,
        right: 55,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowFiveThree: {
        backgroundColor: '#fff',
        width: '40%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 295,
        right: -90,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowSixOne: {
        backgroundColor: '#fff',
        width: '45%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 285,
        right: 90,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowSixTwo: {
        backgroundColor: '#fff',
        width: '41%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 330,
        right: -88,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowSevenOne: {
        backgroundColor: '#fff',
        width: '45%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 320,
        right: 90,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowSevenTwo: {
        backgroundColor: '#fff',
        width: '41%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 365,
        right: -88,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowEightOne: {
        backgroundColor: '#fff',
        width: '52%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 355,
        right: 75,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    rowEightTwo: {
        backgroundColor: '#fff',
        width: '33%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 400,
        right: -102,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    others: {
        backgroundColor: '#FD6D4C',
        width: '30%',
        height: 45,
        padding: 10,
        borderRadius: 30,
        bottom: 390,
        right: 120,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

    emailButton: {
        backgroundColor: '#032048',
        width: '90%',
        height: 50,
        padding: 10,
        borderRadius: 15,
        bottom: 355,
        justifyContent: 'center',
        alignItems: 'center'
  
    },

 
  
})

export default KnowAboutScreen;
