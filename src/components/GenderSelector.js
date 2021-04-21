import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Colors, Gender } from '../config'
import IconCard from './IconCard'

const GenderSelector = ({ onSelect, selectedGender }) => {
    return (
        <View style={styles.container}>
            <IconCard
                backgroundColor={
                    selectedGender === Gender.MALE
                        ? Colors.darkSlateGrey
                        : Colors.lightSlateGrey
                }
                color={
                    selectedGender === Gender.MALE ? Colors.white : Colors.grey
                }
                icon="mars"
                onPress={() => onSelect(Gender.MALE)}
                title={'male'.toUpperCase()}
            />
            <IconCard
                backgroundColor={
                    selectedGender === Gender.FEMALE
                        ? Colors.darkSlateGrey
                        : Colors.lightSlateGrey
                }
                color={
                    selectedGender === Gender.FEMALE
                        ? Colors.white
                        : Colors.grey
                }
                icon="venus"
                onPress={() => onSelect(Gender.FEMALE)}
                title={'female'.toUpperCase()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        maxHeight: 200,
    },
})

export default GenderSelector
