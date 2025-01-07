import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

export default function RootLayout () {
    return (
        <ThemeProvider value={DarkTheme} >
            <Stack screenOptions={{}} >
                <Stack.Screen name='index' options={{ title: 'Todo' }}/>
            </Stack>
            <StatusBar style='light' />
        </ThemeProvider>
    )
}
