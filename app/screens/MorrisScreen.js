// UCM Interior Maps Code

import React, { Component, useState } from 'react';
import { Button, Dimensions, Image, ImageBackground, Platform, Picker, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageZoom from 'react-native-image-pan-zoom'; //React Native Image Zoom Library: https://github.com/ascoders/react-native-image-zoom

// Floor plan images
import firstFloorImage from '../assets/morris_floor1.png'
import secondFloorImage from '../assets/morris_floor2.png'
import thirdFloorImage from '../assets/morris_floor3.png'
import fourthFloorImage from '../assets/morris_floor4.png'

// Constant variables for floor plan images
const firstFloorImageUri = Image.resolveAssetSource(firstFloorImage).uri
const secondFloorImageUri = Image.resolveAssetSource(secondFloorImage).uri
const thirdFloorImageUri = Image.resolveAssetSource(thirdFloorImage).uri
const fourthFloorImageUri = Image.resolveAssetSource(fourthFloorImage).uri

// Variables for the current room number and the current room type displayed near the top of the screen
var roomNumber = "100"
var roomType = "Classroom"

// Variable to store the number position of the currently selected room number in the picker and inside var FloorRooms,
// this value is used to call the corresponding room type from var RoomTypes
var numPosition;

// Array containing room numbers, loads first floor rooms on initial load
var FloorRooms = ["100","101","102","103","104","105","106","107","108","109",
                "110","111","112","113","115","116","117","118","119","121",
                "123","124","125","126","127","128","129","130","131","132",
                "133","134","135","137","139","141"];

// Array containing the room types for the current floor, e.g. the RoomTypes[0] is the room type for FloorRooms[0],
// loads first floor room types on initial load
var RoomTypes = ["classroom","classroom","lab","classroom","office","classroom","workroom","biology lab","office","biology lab",
                "lab","office","biology lab","office","office","office","office","office","office","office",
                "office","classroom","office","computing commons","office","classroom","classroom","mathematic education commons","classroom","dock",
                "N/A","N/A","bathroom","bathroom","utility","utility"];

export default class MorrisScreen extends Component {
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
                    "110","111","112","113","115","116","117","118","119","121",
                    "123","124","125","126","127","128","129","130","131","132",
                    "133","134","135","137","139","141"];

        RoomTypes = ["classroom","classroom","lab","classroom","office","classroom","workroom","biology lab","office","biology lab",
                    "lab","office","biology lab","office","office","office","office","office","office","office",
                    "office","classroom","office","computing commons","office","classroom","classroom","mathematic education commons","classroom","dock",
                    "N/A","N/A","bathroom","bathroom","utility","utility"];
    }

    changeToFloorTwo = () => {
        this.setState ({
            imageURL: secondFloorImageUri
        })
        FloorRooms = ["200","201","202","203","204","205","206","207","208","209",
                    "210","211","212","213","214","215","216","217","218","219",
                    "220","221","222","223","224","225","227","228","229","230",
                    "231","233","235","237","239","299"];

        RoomTypes = ["Nahm Auditorium","computer classroom","lab","graduate assistant office","graduate assistant office","office suite","office suite","office","workroom","lab",
                    "cyber lab","office","lab","office","office","office","lab","office","conference room","office",
                    "computer commons","office","school of computer science and mathematics","office","classroom","office","office","classroom","computer classroom","lab & office suite",
                    "computer classroom","bathroom","bathroom","utility","utility","N/A"];
    }

    changeToFloorThree = () => {
        this.setState ({
            imageURL: thirdFloorImageUri
        })
        FloorRooms = ["300","301","302","303","304","305","306","307","308","309",
                    "310","311","312","313","314","315","316","318","319","320",
                    "321","322","323","325","327","329"];

        RoomTypes = ["office","biology lab","biology lab","office","office","biology lab","school of natural sciences biology suite","office","break room","biology lab",
                    "biology lab","biology lab","office","biology lab","autoclave","biology lab","biology lab","classroom","office suite","computer room",
                    "lab","classroom","bathroom","bathroom","utility","utility"];
    }

    changeToFloorFour = () => {
        this.setState ({
            imageURL: fourthFloorImageUri
        })
        FloorRooms = ["400","401","403","404","406","408","409","410","411","412",
                    "413","414","416","417","418","420","422","423","424","425",
                    "426","427","429","431","433"];

        RoomTypes = ["chemistry lab","office","chemistry lab","chemistry lab","school of natural sciences chemistry suite","chemistry stockroom","office","chemistry lab","chemistry lab","mechanical",
                    "office","chemistry lab","chemistry lab","office suite","chemistry lab","chemistry lab","classroom","classroom","computer lab","classroom",
                    "office","bathroom","bathroom","utility","utility"];
    }

    // This function changes the room number and room type text displayed when the room number picker is changed
    // This function is only implemented for the Morris Screen
    changeRoomInfo = (item) => {
        this.setState ({})
        roomNumber = FloorRooms[item];
        numPosition = FloorRooms.indexOf(roomNumber);
        roomType = RoomTypes[numPosition];
    }
    
    render(props) {
        return (
            <ImageBackground 
            style={styles.container}
            source={require('../assets/white_background.png')}
            >
                <View style={styles.topBorder}></View>
                <View style={styles.bottomBorder}></View>
                {/* Text that displays the room number and room type for the currently selected room number in the picker */}
                <View style={styles.roomDetails}>
                    <Text>Room Number: {roomNumber} | Room Type: {roomType}</Text>
                </View>
                {/* Image source chooses an image based off of this.state */}
                <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={800}>
                <Image
                style={styles.floorImage}
                source = {{ uri: this.state.imageURL }}
                >
                </Image>
                </ImageZoom>
                {/* Buttons that change the current floor plan being displayed */}
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
                onValueChange={(item) => this.changeRoomInfo(item)}
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
    roomDetails: {
        color: '#FFFFFF',
        fontSize: 12,
        textAlign: 'center',
        top: 0,
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