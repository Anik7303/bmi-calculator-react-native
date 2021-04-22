import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Colors } from '../config'

const Button = ({ onPress, title }) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.crimson,
        maxHeight: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: Colors.white,
        fontSize: 24,
        fontWeight: '700',
        letterSpacing: 1.5,
        textTransform: 'uppercase',
    },
})

export default Button
