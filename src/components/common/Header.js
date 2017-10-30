// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
//make a component
const Header = (props) => {
    const { textStyles, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyles}>{props.headerText}</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        alignItems: 'center',
        // justifyContent: 'center'
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'
    },
    textStyles: {
        fontSize: 20
    }
};
//make the component avaible to other parts of the app
export { Header };
