import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

// import { Container } from './styles';

export default props => {
    const stylesBtns = [styles.btn]

    if(props.duplo){
        stylesBtns.push(styles.btnDouble);
    }

    return (
        <TouchableOpacity onPress={props.onChange} >
            <Text style={styles.btn} >
                {props.buttons}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderColor: '#777',
        textAlign: 'center'
    },
    btnDouble: {
        width: (Dimensions.get('window').width/4)*2,
    }
});