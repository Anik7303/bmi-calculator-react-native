import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slider from '@react-native-community/slider'

import { Colors } from '../config'

const HeightSelector = ({ height, onChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Height</Text>
            <Text>
                <Text style={styles.heightText}>{height.toFixed(1)}</Text>
                <Text style={styles.heightScale}>cm</Text>
            </Text>
            <Slider
                minimumTrackTintColor={Colors.white}
                minimumValue={30}
                maximumTrackTintColor={Colors.grey}
                maximumValue={400}
                onValueChange={onChange}
                style={styles.slider}
                thumbTintColor={Colors.crimson}
                value={height}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.lightSlateGrey,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        margin: 10,
        maxHeight: 300,
    },
    heightScale: {
        color: Colors.grey,
        fontSize: 20,
        fontWeight: '400',
    },
    heightText: {
        color: Colors.white,
        fontSize: 70,
        fontWeight: '700',
    },
    slider: {
        width: '90%',
        height: 40,
    },
    text: {
        color: Colors.grey,
        fontSize: 20,
        letterSpacing: 1.2,
        marginTop: '6%',
        textTransform: 'uppercase',
    },
})

export default HeightSelector
