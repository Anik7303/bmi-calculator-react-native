import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

import { Colors, Gender } from '../config'
import GenderSelector from '../components/GenderSelector'
import HeightSelector from '../components/HeightSelector'
import NumberCard from '../components/NumberCard'
import Button from '../components/Button'

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
            <View style={styles.inputContainer}>
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
            </View>
            <Button onPress={onSubmit} title="Calculate BMI" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flex: 1,
        backgroundColor: Colors.black,
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10,
    },
    weightAgeContainer: {
        flex: 1,
        flexDirection: 'row',
    },
})

export default Home
