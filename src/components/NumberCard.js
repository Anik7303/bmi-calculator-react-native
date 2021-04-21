import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Colors } from '../config'
import IconButton from './IconButton'

const NumberCard = ({ onChange, title, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.value}>{value.toFixed(0)}</Text>
            <View style={styles.buttonContainer}>
                <IconButton
                    icon="minus"
                    onPress={() => onChange((v) => v - 1)}
                />
                <IconButton
                    icon="plus"
                    onPress={() => onChange((v) => v + 1)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'stretch',
    },
    iconButton: {
        alignItems: 'center',
        backgroundColor: Colors.darkSlateGrey,
        borderRadius: 45,
        justifyContent: 'center',
        height: 45,
        width: 45,
    },
    container: {
        alignItems: 'center',
        backgroundColor: Colors.lightSlateGrey,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    scale: {
        color: Colors.grey,
        fontSize: 18,
        fontWeight: '400',
    },
    text: {
        color: Colors.grey,
        fontSize: 18,
        letterSpacing: 1.2,
        textTransform: 'uppercase',
    },
    value: {
        color: Colors.white,
        fontSize: 60,
        fontWeight: '700',
    },
})

export default NumberCard
