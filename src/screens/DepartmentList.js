// import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDepartments } from './store/actions';

const DepartmentList = ( { navigation } ) => {
    const dispatch = useDispatch();
    const { departments } = useSelector( ( { buyerDepartments } ) => buyerDepartments );

    useEffect( () => {
        dispatch( getAllDepartments() )
    }, [] )


    return (
        <View style={styles.list}>
            <Text style={styles.listHeading}>Departments: </Text>
            <ScrollView style={{ width: '100%' }}>
                {departments?.map( d => (
                    <View key={d.id}>
                        <View style={styles.dataRow}>
                            <Text style={styles.department}>{d.name}  </Text>
                            {/* <Ionicons

                                name='trash'
                                color="red"
                            /> */}

                        </View>

                    </View>
                ) )}

            </ScrollView>
        </View>
    )
}

export default DepartmentList;

const styles = StyleSheet.create( {
    list: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#D4E5F6',
        marginTop: 6,
        padding: 15,
    },
    listHeading: {
        fontFamily: 'Roboto',
        fontWeight: '900',
        fontSize: 19,
        textDecorationLine: 'underline'

    },
    dataRow: {

    },
    department: {
        color: 'blue',
        fontFamily: 'Roboto',
        fontSize: 18,
        backgroundColor: '#8DC9C8',
        width: '95%',
        marginTop: 2,
        marginBottom: 2
    }
} )

