import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SimpleButton from "./SimpleButton";

class HomeScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'React Notes',
            headerRight: (
                <SimpleButton
                    style={styles.navBarRightButton}
                    textStyle={styles.navBarButtonText}
                    onPress={() => navigation.navigate('Note', {  })}
                    customText='Create Note'
                />
            ),
            headerStyle:                styles.navBar,
            headerTitleStyle:           styles.navBarTitleText,
            //headerRightContainerStyle : styles.navBarRightButton
        };
    };

    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.noNotesText}>You have not created any notes!</Text>
                <SimpleButton
                    style={styles.simpleButton}
                    textStyle={styles.simpleButtonText}
                    customText='Create Note'
                    onPress={() => navigate('Note', {  })}/>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noNotesText: {
        color: '#48209A',
        marginBottom: 10
    },
    simpleButton: {
        backgroundColor: '#5B29C1',
        borderColor: '#48209A',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 20,
        paddingVertical: 15,
        shadowColor: 'darkgrey',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    simpleButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
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

export default HomeScreen;