import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import Realm from '../../src/providers/Realm';

export default function RootLayout () {
    return (
        <ThemeProvider value={DarkTheme} >
            <Realm>
                <Stack screenOptions={{}} >
                    <Stack.Screen name='index' options={{ title: 'Todo' }}/>
                </Stack>
            </Realm>
            <StatusBar style='light' />
        </ThemeProvider>
    )
}
