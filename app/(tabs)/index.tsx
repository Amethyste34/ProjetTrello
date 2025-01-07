import TaskBoard from "@/src/components/TaskBoard";
import { Stack } from "expo-router";
import React from "react";

export default function HomeScreen() {
  return (
      <>
        <Stack.Screen options={{ title: "Project Board"}} />
        <TaskBoard/>
      </>
  );
}
