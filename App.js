import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from "./App/Components/HomeScreen";
import NoteScreen from "./App/Components/NoteScreen";

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Note: {
            screen: NoteScreen
        }
    },
    {
        initialRouteName: 'Home',
    }
);