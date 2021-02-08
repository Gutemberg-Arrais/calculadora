import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ColorPropType } from 'react-native';

// import { Container } from './styles';

export default props => {
    return (
        <View style={styles.display} >
            <Text numberOfLines={1} style={styles.txtOperation}>
                {props.value}
            </Text>
            <Text numberOfLines={1} style={styles.txtResult}>
                {props.result}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    display:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%'
    },
    txtOperation: {
        fontSize: 35
    },
    txtResult: {
        fontSize: 50
    },
});