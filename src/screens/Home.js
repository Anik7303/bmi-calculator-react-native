import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import { Colors, Gender } from '../config'
import GenderSelector from '../components/GenderSelector'
import HeightSelector from '../components/HeightSelector'
import NumberCard from '../components/NumberCard'

const Home = ({ navigation }) => {
    const [selectedGender, setSelectedGender] = useState(Gender.Male)
    const [height, setHeight] = useState(180)
    const [weight, setWeight] = useState(60)
    const [age, setAge] = useState(18)

    const onSubmit = () => {
        const bmi = weight / Math.pow(height / 100.0, 2)
        navigation.navigate('Result', { bmi })
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <GenderSelector
                selectedGender={selectedGender}
                onSelect={setSelectedGender}
            />
            <HeightSelector height={height} onChange={setHeight} />
            <View style={styles.weightAgeContainer}>
                <NumberCard
                    onChange={setWeight}
                    title="weight"
                    value={weight}
                />
                <NumberCard onChange={setAge} title="age" value={age} />
            </View>
            <TouchableOpacity style={styles.calculateButton} onPress={onSubmit}>
                <Text style={styles.text}>Calculate</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    calculateButton: {
        flex: 1,
        backgroundColor: Colors.crimson,
        maxHeight: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        padding: 10,
    },
    text: {
        color: Colors.white,
        fontSize: 30,
        fontWeight: '700',
        letterSpacing: 1.0,
        textTransform: 'uppercase',
    },
    weightAgeContainer: {
        flex: 1,
        flexDirection: 'row',
    },
})

export default Home
