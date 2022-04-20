// UCM Interior Maps Code

import React, { useState } from 'react';
import { Dimensions, Image, ImageBackground, Picker, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ImageZoom from 'react-native-image-pan-zoom'; //React Native Image Zoom Library: https://github.com/ascoders/react-native-image-zoom

function StartScreen( { navigation } ) {
    // Constant variable to set the default building selected to be entered to upon starting the app
    const [selectedValue, setSelectedValue] = useState("morris");
    return (
        <ImageBackground 
        style={styles.container}
        source={require('../assets/white_background.png')}
        >
            <View style={styles.topBorder}></View>
            {/* Campus map image*/}
            <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={400}
                       imageHeight={700}>
            <Image
            style={styles.campusMap}
            source={require('../assets/campus_map.png')}>
            </Image>
            </ImageZoom>
            <View style={styles.bottomBorder}></View>
            {/* Enter Building button */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(selectedValue)}>
                <Text>Enter Building</Text>
            </TouchableOpacity>
            {/* Select a building picker */}
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {/* Buildings that can be entered */}
                <Picker.Item label="P. A. Humphreys" value="humphreys" />
                <Picker.Item label="Ward Edwards" value="edwards" />
                <Picker.Item label="W. C. Morris" value="morris" />
            </Picker>
        </ImageBackground>
    );
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
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        borderColor: '#000000',
        borderRadius: 50,
        bottom: 90,
        height: 50,
        justifyContent: 'center',
        position: 'absolute',
        width: 200,
    },
    campusMap: {
        height: '100%',
        position: 'absolute',
        resizeMode: 'contain',
        width: '100%',
    },
    container: {
        flex: 1,
        height: '90%',
        resizeMode: 'contain',
        width: '100%',
        alignItems: 'center',
    },
    picker: {
        color: '#FFFFFF',
        bottom: 30,
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

export default StartScreen;