import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import { Colors } from '../config'

const IconButton = ({ onPress, icon }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <FontAwesome name={icon} size={24} color={Colors.grey} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: Colors.darkSlateGrey,
        borderRadius: 45,
        justifyContent: 'center',
        height: 45,
        width: 45,
    },
})

export default IconButton
