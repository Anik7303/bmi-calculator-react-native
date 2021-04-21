import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home'
import Result from './src/screens/Result'

const Stack = createStackNavigator()

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'BMI Calculator', headerShown: false }}
                />
                <Stack.Screen
                    name="Result"
                    component={Result}
                    options={{ title: 'BMI Result' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
