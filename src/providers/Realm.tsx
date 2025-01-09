import { PropsWithChildren} from "react";
import React from 'react';
import {Props} from "expo-system-ui/plugin/build/withAndroidUserInterfaceStyle";
import { RealmProvider} from "@realm/react";
import { Task } from "../models/Task";

export default function RealmCustomProvider({ children}: PropsWithChildren<Props>) {
    return <RealmProvider schema={[Task]}>{children}</RealmProvider>;
}