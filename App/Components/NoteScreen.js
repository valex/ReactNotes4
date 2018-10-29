import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import SimpleButton from "./SimpleButton";

class NoteScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Create Note',
            headerLeft: (
                <SimpleButton
                    style={styles.navBarLeftButton}
                    textStyle={styles.navBarButtonText}
                    onPress={() => navigation.pop()}
                    customText='Back'
                />
            ),
            headerStyle:                styles.navBar,
            headerTitleStyle:           styles.navBarTitleText,
            //headerLeftContainerStyle : styles.navBarLeftButton
        };
    };
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        autoFocus={true}
                        autoCapitalize="sentences"
                        placeholder="Untitled"
                        style={[styles.textInput, styles.title]}
                        onEndEditing={(text) => {this.refs.body.focus()}}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        ref="body"
                        multiline={true}
                        placeholder="Start typing"
                        style={[styles.textInput, styles.body]}
                        textAlignVertical="top"
                        underlineColorAndroid="transparent"
                    />
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        padding: 20
    },
    title: {
        height: 40
    },
    body: {
        height: 250
    },
    inputContainer: {
        borderBottomColor: '#9E7CE3',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginBottom: 10
    },
    textInput: {
        flex: 1,
        fontSize: 16,
    },

    navBar: {
        backgroundColor: '#5B29C1',
        borderBottomColor: '#48209A',
        borderBottomWidth: 1
    },
    navBarTitleText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 16
    },
    navBarLeftButton: {
        paddingLeft: 10
    },
    navBarRightButton: {
        paddingRight: 10
    },
    navBarButtonText: {
        color: '#EEE',
        fontSize: 16,
        marginVertical: 16
    }
});

export default NoteScreen;