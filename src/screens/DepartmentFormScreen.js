import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBuyerDepartment } from './store/actions';

const DepartmentFormScreen = ( { navigation } ) => {
    const dispatch = useDispatch();

    const [department, setDepartment] = useState( {
        name: '',
        description: ''
    } )
    const handleOnInputChange = ( event, name ) => {
        const { eventCount, target, text } = event.nativeEvent;
        setDepartment( {
            ...department,
            [name]: text
        } )
    }

    const handleDataOnPress = () => {
        dispatch( addBuyerDepartment( department, navigation, setDepartment ) )
    }

    return (
        <View style={styles.formSection}>
            <View>
                <Text style={styles.labelText}>Department : </Text>
                <TextInput
                    style={styles.textInput}
                    name="name"
                    value={department.name}
                    placeholder="name"
                    onChange={( e ) => handleOnInputChange( e, 'name' )}
                />
            </View>
            <View>
                <Text style={styles.labelText}>Description : </Text>
                <TextInput
                    style={styles.textInput}
                    name="description"
                    value={department.description}
                    placeholder="description"
                    onChange={( e ) => handleOnInputChange( e, 'description' )}

                />
            </View>
            <View style={styles.buttons}>
                <Button
                    onPress={() => handleDataOnPress()}
                    title="Save"
                />
            </View>


        </View>
    )
}

export default DepartmentFormScreen;

const styles = StyleSheet.create( {
    formSection: {
        marginTop: 6,
        padding: 15,
        flex: 1,
        width: '100%',
        backgroundColor: '#C6C6C6'
    },
    labelText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: "black",
        fontFamily: 'Roboto',
    },
    buttons: {
        marginTop: 6,

    },
    textInput: {
        borderWidth: 1,
        backgroundColor: 'white',
        width: "100%",
        marginBottom: 5,
        paddingLeft: 5,
        paddingRight: 5
    }
} )
