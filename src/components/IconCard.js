import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { Colors } from '../config'

const IconCard = ({ backgroundColor, color, icon, onPress, title }) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container, { backgroundColor }]}>
            <FontAwesome name={icon} size={60} color={color} />
            <Text style={[styles.text, { color }]}>{title}</Text>
        </View>
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.lightSlateGrey,
        borderRadius: 10,
        flex: 1,
        margin: 10,
        justifyContent: 'center',
    },
    text: {
        color: Colors.grey,
        fontSize: 18,
        letterSpacing: 1.2,
        marginTop: '6%',
        textTransform: 'uppercase',
    },
})

export default IconCard
