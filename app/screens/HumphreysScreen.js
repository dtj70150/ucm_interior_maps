// UCM Interior Maps Code

import React, { Component, useState } from 'react';
import { Button, Dimensions, Image, ImageBackground, Platform, Picker, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageZoom from 'react-native-image-pan-zoom'; //React Native Image Zoom Library: https://github.com/ascoders/react-native-image-zoom

// Floor plan images
//import basementFloorImage from '../assets/humphreys_floor0.png' --- Basement is currently not included because I did not know if the basement was often frequented or not
import firstFloorImage from '../assets/humphreys_floor1.png'
import secondFloorImage from '../assets/humphreys_floor2.png'
import thirdFloorImage from '../assets/humphreys_floor3.png'
import fourthFloorImage from '../assets/humphreys_floor4.png'

// Constant variables for floor plan images
//const basementFloorImageUri = Image.resolveAssetSource(basementFloorImage).uri --- Basement is currently not included because I did not know if the basement was often frequented or not
const firstFloorImageUri = Image.resolveAssetSource(firstFloorImage).uri
const secondFloorImageUri = Image.resolveAssetSource(secondFloorImage).uri
const thirdFloorImageUri = Image.resolveAssetSource(thirdFloorImage).uri
const fourthFloorImageUri = Image.resolveAssetSource(fourthFloorImage).uri

// Array containing room numbers, loads first floor rooms on initial load
var FloorRooms = ["100","101","102","103","104","105","106","107","108","109",
                "110","111","112","113","114","115","116","117","119","120",
                "120","121","123","127","131"];

export default class HumphreysScreen extends Component {
    constructor() {
        super();
        
        // The this.setState functions below handle changing the image shown on screen to the correct floor plan
        // and changing the contents of the room number picker list
        this.state = {
            imageURL: firstFloorImageUri
        }
    }

    changeToFloorOne = () => {
        this.setState ({
            imageURL: firstFloorImageUri
        })
        FloorRooms = ["100","101","102","103","104","105","106","107","108","109",
                "110","111","112","113","114","115","116","117","119","120",
                "120","121","123","127","131"];
    }

    changeToFloorTwo = () => {
        this.setState ({
            imageURL: secondFloorImageUri
        })
        FloorRooms = ["200","201","202","204","205","206","207","208","209","210",
                "211","212","213","214","215","216","217","218","219","220",
                "221","222","223","224","225","226","227"];
    }

    changeToFloorThree = () => {
        this.setState ({
            imageURL: thirdFloorImageUri
        })
        FloorRooms = ["300","301","302","303","304","305","306","307","308","309",
                    "310","311","312","313","314","315","316","317","318","319",
                    "320","321","322","323","324","325","326","327","329"];
    }

    changeToFloorFour = () => {
        this.setState ({
            imageURL: fourthFloorImageUri
        })
        FloorRooms = ["400","401","402","403","404","405","406","407","408","410"];
    }

    // This function changes the room number and room type text displayed when the room number picker is changed
    // This function is only implemented for the Morris Screen
    displayRoomInfo = () => {
        this.setState ({})

    }
    
    render(props) {
        return (
            <ImageBackground 
            style={styles.container}
            source={require('../assets/white_background.png')}
            >
                <View style={styles.topBorder}></View>
                <View style={styles.bottomBorder}></View>
                {/* Image source chooses an image based off of this.state */}
                <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={800}>
                <Image
                style={styles.floorImage}
                source = {{ uri: this.state.imageURL }}
                >
                {/* Buttons that change the current floor plan being displayed */}
                </Image>
                </ImageZoom>
                <View style={styles.buttonsContainer}>
                    <Button color='#696969' title="1st Floor" onPress={this.changeToFloorOne}></Button>
                    <Button color='#696969' title="2nd Floor" onPress={this.changeToFloorTwo}></Button>
                    <Button color='#696969' title="3rd Floor" onPress={this.changeToFloorThree}></Button>
                    <Button color='#696969' title="4th Floor" onPress={this.changeToFloorFour}></Button>
                </View>
                {/* View room details of selected room, room number and room type */}
                <Picker
                selectedValue={this.state.selected}
                style={styles.picker}
                onValueChange={() => this.displayRoomInfo()}
                >
                    {/* Selectable rooms */}
                    {FloorRooms.map((item, index) => {
                    return (<Picker.Item label={item} value={index} key={index}/>) 
                    })}
                </Picker>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    bottomBorder: {
        backgroundColor: '#cf202e',
        bottom: 0,
        flex: 1,
        height: '20%',
        position: 'absolute',
        width: '100%',
    },
    buttonsContainer: {
        bottom: 55,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
    },
    container: {
        flex: 1,
        height: '90%',
        resizeMode: 'contain',
        width: '100%',
        alignItems: 'center',
    },
    floorImage: {
        height: '100%',
        position: 'absolute',
        resizeMode: 'contain',
        width: '100%',
    },
    picker: {
        color: '#FFFFFF',
        bottom: 10,
        height: 50,
        position: 'absolute',
        width: 200,
    },
    title: {
        //fontFamily: 'Futura BT', //Futura BT is the main font used by UCM, but it costs money to use
        fontSize: 20,
        top: 115,
    },
    topBorder: {
        backgroundColor: '#cf202e',
        flex: 1,
        height: '5%',
        position: 'absolute',
        top: 0,
        width: '100%'
    }
})