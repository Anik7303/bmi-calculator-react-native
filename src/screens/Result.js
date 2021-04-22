import React, { useLayoutEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Button from '../components/Button'

import { Colors } from '../config'

const processBMI = (bmi) => {
    if (bmi > 30) {
        return {
            opinion: 'Obese',
            message:
                'Your BMI is too high. Please take steps to reduce your weight',
        }
    } else if (bmi > 25) {
        return {
            opinion: 'Overweight',
            message: 'You should exercise more to reduce your weight',
        }
    } else if (bmi >= 18.5) {
        return {
            opinion: 'Normal',
            message: 'You have a normal body. Good job!',
        }
    } else {
        return {
            opinion: 'Underweight',
            message:
                'You need to gain a little bit of weight to stay healthy. Gook luck.',
        }
    }
}

const Result = ({ navigation, route }) => {
    useLayoutEffect(() => {
        navigation.setOptions({ headerShown: false })
    }, [navigation, route])

    const { bmi } = route.params
    const result = processBMI(bmi)

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.pageTitle}>Your Result</Text>
                <View style={styles.resultContainer}>
                    <Text style={styles.opinion}>{result.opinion}</Text>
                    <Text style={styles.bmiTextContainer}>
                        <Text style={styles.text}>{bmi.toFixed(2)}</Text>
                        <Text style={styles.scale}>kg/m2</Text>
                    </Text>
                    <Text style={styles.message}>{result.message}</Text>
                </View>
            </View>
            <Button onPress={() => navigation.goBack()} title="Return" />
        </View>
    )
}

const styles = StyleSheet.create({
    bmiTextContainer: {
        textAlign: 'center',
    },
    container: {
        backgroundColor: Colors.black,
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        alignItems: 'stretch',
        padding: 20,
    },
    message: {
        color: Colors.white,
        fontSize: 18,
        textAlign: 'center',
    },
    opinion: {
        color: Colors.green,
        fontSize: 18,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    pageTitle: {
        color: Colors.white,
        fontSize: 40,
        fontWeight: '700',
    },
    resultContainer: {
        backgroundColor: Colors.lightSlateGrey,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
        padding: 20,
    },
    scale: {
        color: Colors.grey,
        fontSize: 18,
        fontWeight: '400',
    },
    text: {
        color: Colors.white,
        fontSize: 70,
        fontWeight: '700',
    },
})

export default Result
