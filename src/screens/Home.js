import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import { Colors, Gender } from '../config'
import GenderSelector from '../components/GenderSelector'
import HeightSelector from '../components/HeightSelector'

const Home = () => {
    const [selectedGender, setSelectedGender] = useState(Gender.Male)
    const [height, setHeight] = useState(180)
    console.log({ selectedGender, height })

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <GenderSelector
                selectedGender={selectedGender}
                onSelect={setSelectedGender}
            />
            <HeightSelector height={height} onChange={setHeight} />
        </SafeAreaView>
    )
}

const border = {
    borderColor: 'dodgerblue',
    borderWidth: 3,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        padding: 10,
    },
})

export default Home
