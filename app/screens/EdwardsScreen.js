// UCM Interior Maps Code

import React, { Component, useState } from 'react';
import { Button, Dimensions, Image, ImageBackground, Platform, Picker, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageZoom from 'react-native-image-pan-zoom'; //React Native Image Zoom Library: https://github.com/ascoders/react-native-image-zoom

// Floor plan images
import groundFloorImage from '../assets/edwards_floor0.png'
import firstFloorImage from '../assets/edwards_floor1.png'
import secondFloorImage from '../assets/edwards_floor2.png'
import thirdFloorImage from '../assets/edwards_floor3.png'


// Constant variables for floor plan images
const groundFloorImageUri = Image.resolveAssetSource(groundFloorImage).uri
const firstFloorImageUri = Image.resolveAssetSource(firstFloorImage).uri
const secondFloorImageUri = Image.resolveAssetSource(secondFloorImage).uri
const thirdFloorImageUri = Image.resolveAssetSource(thirdFloorImage).uri

// Array containing room numbers, loads first floor rooms on initial load
var FloorRooms = ["1000","1003","1005","1010","1020","1030","1040","1045","1060","1100",
                "1110","1112","1114","1116","1118","1120","1122","1124","1125","1126",
                "1127","1128","1129","1130","1131","1132","1133","1135","1200","1202",
                "1204","1206","1216","1218","1219","1220","1222","1224","1226","1227",
                "1300","1310","1320","1400","1413","1414","1416","1418","1420","1422",
                "1424","1428","1430","1510","1520","1530","1550","1560","1600","1602",
                "1604","1614","1615","1616","1619","1620","1622","1624","1626","1702",
                "1704","1706","1708","1801","1802","1806","1808","1810","1812","1814",
                "1816","1818","1820","1822","1823","1902","1909","1910","1912","1914",
                "1916","1918","1919","1920","1921","1922","1924","1926","1930"];

export default class EdwardsScreen extends Component {
    constructor() {
        super();
        
        // The this.setState functions below handle changing the image shown on screen to the correct floor plan
        // and changing the contents of the room number picker list
        this.state = {
            imageURL: firstFloorImageUri
        }
    }

    changeToFloorGround = () => {
        this.setState ({
            imageURL: groundFloorImageUri
        })
        FloorRooms = ["0010","0020","0101","0102","0103","0104","0106","0107","0108","0109",
                    "0110","0112","0114","0116","0118","0120","0121","0122","0123","0200",
                    "0203","0205","0305","0310","0400","0405","0407","0409","0410","0412",
                    "0414","0418","0420","0422","0423","0426","0428","0430","0435","0502",
                    "0504","0512","0602","0603","0604","0605","0607","0608","0610","0611",
                    "0612","0614","0616","0618","0620","0622","0623","0624","0628","0629",
                    "0630","0631","0702","0704","0705","0706","0800","0802","0804","0806",
                    "0808","0810","0812","0900","0902","0904","0906","0908","0917","0919"];
    }

    changeToFloorOne = () => {
        this.setState ({
            imageURL: firstFloorImageUri
        })
        FloorRooms = ["1000","1003","1005","1010","1020","1030","1040","1045","1060","1100",
                    "1110","1112","1114","1116","1118","1120","1122","1124","1125","1126",
                    "1127","1128","1129","1130","1131","1132","1133","1135","1200","1202",
                    "1204","1206","1216","1218","1219","1220","1222","1224","1226","1227",
                    "1300","1310","1320","1400","1413","1414","1416","1418","1420","1422",
                    "1424","1428","1430","1510","1520","1530","1550","1560","1600","1602",
                    "1604","1614","1615","1616","1619","1620","1622","1624","1626","1702",
                    "1704","1706","1708","1801","1802","1806","1808","1810","1812","1814",
                    "1816","1818","1820","1822","1823","1902","1909","1910","1912","1914",
                    "1916","1918","1919","1920","1921","1922","1924","1926","1930"];
    }

    changeToFloorTwo = () => {
        this.setState ({
            imageURL: secondFloorImageUri
        })
        FloorRooms = ["2000","2010","2020","2030","2040","2045","2100","2102","2104","2106",
                    "2107","2108","2110","2112","2113","2115","2116","2117","2118","2119",
                    "2120","2122","2200","2201","2202","2204","2206","2207","2300","2310",
                    "2320","2400","2401","2402","2403","2404","2405","2406","2410","2411",
                    "2412","2413","2414","2415","2416","2520","2540","2560","2600","2601",
                    "2612","2702","2703","2704","2705","2706","2707","2708","2800","2805",
                    "2810"];   
    }

    changeToFloorThree = () => {
        this.setState ({
            imageURL: thirdFloorImageUri
        })
        FloorRooms = ["3100","3102","3106","3106","3107","3108","3112","3113","3115","3117",
                    "3118","3120","3122","3200","3201","3206","3207","3300","3320","3400",
                    "3401","3402","3403","3404","3405","3406","3410","3411","3412","3413",
                    "3414","3415","3416","3520","3560","3600","3601","3610","3612","3702",
                    "3703","3704","3705","3706","3707","3708","3805"];
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
                    <Button color='#696969' title="Ground Floor" onPress={this.changeToFloorGround}></Button>
                    <Button color='#696969' title="1st Floor" onPress={this.changeToFloorOne}></Button>
                    <Button color='#696969' title="2nd Floor" onPress={this.changeToFloorTwo}></Button>
                    <Button color='#696969' title="3rd Floor" onPress={this.changeToFloorThree}></Button>
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